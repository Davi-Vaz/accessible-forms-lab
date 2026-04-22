# Atividade — Formulários Acessíveis em HTML
Projeto Integrador I

## Arquivos

- `cadastro.html` — Formulário principal: cadastro de usuários para receber atualizações do Dashboard.
- `login.html` — Formulário complementar: login de acesso.
- `styles.css` — Estilos compartilhados.

## Como executar (VS Code + Live Server)

1. Abra a pasta `formularios-html` no VS Code.
2. Instale a extensão **Live Server** (Ritwick Dey).
3. Clique com o botão direito em `cadastro.html` → **Open with Live Server**.
4. Use o menu superior para alternar entre **Cadastro** e **Login**.

## Recursos de acessibilidade aplicados

- `lang="pt-BR"` no `<html>` e `<meta charset="UTF-8">`.
- Skip link ("Pular para o conteúdo principal") para usuários de teclado.
- Estrutura semântica: `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`.
- `<label for="...">` associado a cada campo.
- `<fieldset>` + `<legend>` agrupando campos relacionados.
- Atributos `required`, `aria-required`, `aria-describedby`, `autocomplete`.
- Mensagens de ajuda com `<small class="hint">` referenciadas via `aria-describedby`.
- Foco visível com `outline` em alto contraste.
- Texto alternativo para asteriscos de obrigatoriedade (`sr-only`).
- Grupos de rádio com `role="radiogroup"` e `aria-labelledby`.
- Layout responsivo (mobile-first com grid).

## Validação no navegador

Os formulários usam validação nativa do HTML5 (`required`, `type="email"`, `minlength`, `pattern`). Ao tentar enviar com campos inválidos, o navegador exibe mensagens acessíveis automaticamente.

## Material de apoio

- Formulários acessíveis – Governo Digital
- W3Schools – HTML Forms
