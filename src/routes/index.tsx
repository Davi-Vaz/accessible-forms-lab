import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Formulários Acessíveis em HTML — Projeto Integrador I" },
      {
        name: "description",
        content:
          "Atividade prática: formulários de cadastro e login em HTML com foco em acessibilidade e usabilidade.",
      },
      {
        property: "og:title",
        content: "Formulários Acessíveis em HTML — Projeto Integrador I",
      },
      {
        property: "og:description",
        content:
          "Cadastro de usuários e login implementados com HTML semântico, labels, fieldset e aria-*.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <header className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Projeto Integrador I
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Formulários Acessíveis em HTML
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Atividade prática focada em usabilidade, acessibilidade e boas
            práticas (labels, <code>fieldset</code>, <code>required</code>,
            atributos <code>aria-*</code>).
          </p>
        </header>

        <section className="mb-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Cadastro de Usuários</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Formulário principal para receber atualizações do Dashboard.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                href="/formularios/cadastro.html"
                target="_blank"
                rel="noreferrer"
              >
                Abrir formulário
              </a>
              <a
                className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
                href="/formularios/cadastro.html"
                download
              >
                Baixar HTML
              </a>
            </div>
          </article>

          <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Login (complementar)</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              E-mail, senha, "lembrar-me" e link de recuperação.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                href="/formularios/login.html"
                target="_blank"
                rel="noreferrer"
              >
                Abrir formulário
              </a>
              <a
                className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
                href="/formularios/login.html"
                download
              >
                Baixar HTML
              </a>
            </div>
          </article>
        </section>

        <section className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Pacote completo (.zip)</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Inclui <code>cadastro.html</code>, <code>login.html</code>,{" "}
            <code>styles.css</code> e <code>README.md</code>. Pronto para abrir
            no VS Code com Live Server.
          </p>
          <a
            className="mt-4 inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
            href="/formularios-html.zip"
            download
          >
            Baixar formularios-html.zip
          </a>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Acessibilidade aplicada</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-muted-foreground">
            <li>HTML semântico (header, main, nav, section, footer)</li>
            <li>
              <code>label</code> associado a cada campo via <code>for/id</code>
            </li>
            <li>
              Agrupamento com <code>fieldset</code> e <code>legend</code>
            </li>
            <li>
              <code>required</code>, <code>aria-required</code> e{" "}
              <code>aria-describedby</code> para dicas e erros
            </li>
            <li>Foco visível com alto contraste para navegação por teclado</li>
            <li>Layout responsivo (mobile-first)</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
