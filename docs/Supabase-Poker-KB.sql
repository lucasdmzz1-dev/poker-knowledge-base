-- Poker KB: dados de cada jogador. Rode no SQL Editor do Supabase.
-- Cada linha é uma chave do site (leaks, painel, stats do HUD...) de um usuário.
create table if not exists public.dados_usuario (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  chave text not null,
  valor jsonb,
  atualizado timestamptz not null default now(),
  primary key (user_id, chave)
);

alter table public.dados_usuario enable row level security;

-- Cada jogador lê e escreve só as próprias linhas.
create policy "ler as proprias linhas" on public.dados_usuario
  for select using (auth.uid() = user_id);
create policy "criar as proprias linhas" on public.dados_usuario
  for insert with check (auth.uid() = user_id);
create policy "alterar as proprias linhas" on public.dados_usuario
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "apagar as proprias linhas" on public.dados_usuario
  for delete using (auth.uid() = user_id);

-- Relatos de erro das questões da Prática (botão "Relatar erro"). Rode no SQL Editor.
-- Cada jogador só cria e lê os próprios relatos; você lê todos pelo painel do Supabase.
create table if not exists public.relatos_erro (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  criado timestamptz not null default now(),
  tema text not null,
  questao text not null,
  comentario text not null check (char_length(comentario) <= 1000),
  contexto jsonb
);

alter table public.relatos_erro enable row level security;

create policy "criar os proprios relatos" on public.relatos_erro
  for insert with check (auth.uid() = user_id);
create policy "ler os proprios relatos" on public.relatos_erro
  for select using (auth.uid() = user_id);
