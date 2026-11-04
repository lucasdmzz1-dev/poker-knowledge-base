-- Poker KB: aprovação de contas. Rode no SQL Editor do Supabase, depois de
-- Supabase-Poker-KB.sql e Supabase-Admin.sql.
-- Quem cria conta fica "aguardando aprovação" até um administrador aprovar em /#/admin.
-- A regra vale no servidor: conta não aprovada não grava dados nem uso.

create table if not exists public.aprovados (
  user_id uuid primary key references auth.users (id) on delete cascade,
  aprovado_em timestamptz not null default now()
);
alter table public.aprovados enable row level security;
create policy "ver a propria aprovacao" on public.aprovados
  for select using (auth.uid() = user_id);

-- Contas que já existem entram aprovadas.
insert into public.aprovados (user_id) select id from auth.users on conflict do nothing;

create or replace function public.sou_aprovado() returns boolean
language sql security definer stable set search_path = public as $$
  select exists (select 1 from public.aprovados where user_id = auth.uid())
$$;
revoke all on function public.sou_aprovado() from public, anon;
grant execute on function public.sou_aprovado() to authenticated;

-- Gravar dados e uso só com conta aprovada.
drop policy if exists "criar as proprias linhas" on public.dados_usuario;
create policy "criar as proprias linhas" on public.dados_usuario
  for insert with check (auth.uid() = user_id and public.sou_aprovado());
drop policy if exists "alterar as proprias linhas" on public.dados_usuario;
create policy "alterar as proprias linhas" on public.dados_usuario
  for update using (auth.uid() = user_id and public.sou_aprovado())
  with check (auth.uid() = user_id and public.sou_aprovado());
drop policy if exists "registrar o proprio uso" on public.eventos;
create policy "registrar o proprio uso" on public.eventos
  for insert with check (auth.uid() = user_id and public.sou_aprovado());

-- Só administradores aprovam ou removem a aprovação.
create or replace function public.aprovar_usuario(p_user uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.admins a where a.user_id = auth.uid()) then
    raise exception 'sem acesso';
  end if;
  insert into public.aprovados (user_id) values (p_user) on conflict do nothing;
end;
$$;
create or replace function public.remover_aprovacao(p_user uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.admins a where a.user_id = auth.uid()) then
    raise exception 'sem acesso';
  end if;
  if p_user = auth.uid() then
    raise exception 'não remova a própria aprovação';
  end if;
  delete from public.aprovados where user_id = p_user;
end;
$$;
revoke all on function public.aprovar_usuario(uuid), public.remover_aprovacao(uuid) from public, anon;
grant execute on function public.aprovar_usuario(uuid), public.remover_aprovacao(uuid) to authenticated;

-- Resumo com a situação da aprovação (substitui a versão de Supabase-Admin.sql).
drop function if exists public.resumo_usuarios();
create function public.resumo_usuarios()
returns table (
  id_usuario uuid, email text, provedor text, cadastro timestamptz,
  ultimo_login timestamptz, ultima_atividade timestamptz,
  aberturas_inicio bigint, aberturas_teoria bigint, aberturas_pratica bigint,
  aberturas_analise bigint, treinos integer, leaks integer, semanas integer,
  aprovado boolean
)
language plpgsql security definer set search_path = public, auth as $$
begin
  if not exists (select 1 from public.admins a where a.user_id = auth.uid()) then
    raise exception 'sem acesso';
  end if;
  return query
  select
    u.id, u.email::text, coalesce(u.raw_app_meta_data ->> 'provider', '')::text,
    u.created_at, u.last_sign_in_at,
    (select max(e.criado) from public.eventos e where e.user_id = u.id),
    (select count(*) from public.eventos e where e.user_id = u.id and e.area = 'inicio'),
    (select count(*) from public.eventos e where e.user_id = u.id and e.area = 'teoria'),
    (select count(*) from public.eventos e where e.user_id = u.id and e.area = 'pratica'),
    (select count(*) from public.eventos e where e.user_id = u.id and e.area = 'analise'),
    coalesce((select jsonb_array_length(d.valor) from public.dados_usuario d
              where d.user_id = u.id and d.chave = 'pkb:sessions' and jsonb_typeof(d.valor) = 'array'), 0),
    coalesce((select jsonb_array_length(d.valor) from public.dados_usuario d
              where d.user_id = u.id and d.chave = 'pkb:leaks' and jsonb_typeof(d.valor) = 'array'), 0),
    coalesce((select jsonb_array_length(d.valor -> 'semana') from public.dados_usuario d
              where d.user_id = u.id and d.chave = 'pkb:painel2' and jsonb_typeof(d.valor -> 'semana') = 'array'), 0),
    exists (select 1 from public.aprovados p where p.user_id = u.id)
  from auth.users u
  order by (exists (select 1 from public.aprovados p where p.user_id = u.id)), u.created_at desc;
end;
$$;
revoke all on function public.resumo_usuarios() from public, anon;
grant execute on function public.resumo_usuarios() to authenticated;
