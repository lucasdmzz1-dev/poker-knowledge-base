-- Poker KB: uso do site por área, só para administradores. Rode no SQL Editor do Supabase.
-- Guarda quais áreas cada jogador abre (sem conteúdo) e dá ao administrador um
-- resumo por usuário. Os leaks, stats e painel de cada um continuam privados.

-- Quem é administrador. Cada um só enxerga a própria linha.
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);
alter table public.admins enable row level security;
create policy "ver se sou admin" on public.admins
  for select using (auth.uid() = user_id);

-- Uma linha por abertura de área.
create table if not exists public.eventos (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  area text not null check (area in ('inicio', 'teoria', 'pratica', 'analise')),
  criado timestamptz not null default now()
);
create index if not exists eventos_user_idx on public.eventos (user_id, criado desc);
alter table public.eventos enable row level security;
create policy "registrar o proprio uso" on public.eventos
  for insert with check (auth.uid() = user_id);

-- Resumo por usuário, só para administradores. Não devolve o conteúdo dos dados.
create or replace function public.resumo_usuarios()
returns table (
  email text,
  provedor text,
  cadastro timestamptz,
  ultimo_login timestamptz,
  ultima_atividade timestamptz,
  aberturas_inicio bigint,
  aberturas_teoria bigint,
  aberturas_pratica bigint,
  aberturas_analise bigint,
  treinos integer,
  leaks integer,
  semanas integer
)
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  if not exists (select 1 from public.admins a where a.user_id = auth.uid()) then
    raise exception 'sem acesso';
  end if;
  return query
  select
    u.email::text,
    coalesce(u.raw_app_meta_data ->> 'provider', '')::text,
    u.created_at,
    u.last_sign_in_at,
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
              where d.user_id = u.id and d.chave = 'pkb:painel2' and jsonb_typeof(d.valor -> 'semana') = 'array'), 0)
  from auth.users u
  order by u.created_at desc;
end;
$$;

revoke all on function public.resumo_usuarios() from public, anon;
grant execute on function public.resumo_usuarios() to authenticated;

-- Torne a si mesmo administrador (troque pelo seu e-mail):
-- insert into public.admins (user_id) select id from auth.users where email = 'seu@email.com';
