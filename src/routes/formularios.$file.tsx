import { createFileRoute } from "@tanstack/react-router";
import cadastroHtml from "../static/formularios/cadastro.html?raw";
import loginHtml from "../static/formularios/login.html?raw";
import stylesCss from "../static/formularios/styles.css?raw";
import readmeMd from "../static/formularios/README.md?raw";

const FILES: Record<string, { body: string; type: string }> = {
  "cadastro.html": { body: cadastroHtml, type: "text/html; charset=utf-8" },
  "login.html": { body: loginHtml, type: "text/html; charset=utf-8" },
  "styles.css": { body: stylesCss, type: "text/css; charset=utf-8" },
  "README.md": { body: readmeMd, type: "text/markdown; charset=utf-8" },
};

export const Route = createFileRoute("/formularios/$file")({
  server: {
    handlers: {
      GET: ({ params }) => {
        const entry = FILES[params.file];
        if (!entry) {
          return new Response("Not found", { status: 404 });
        }
        return new Response(entry.body, {
          status: 200,
          headers: { "Content-Type": entry.type },
        });
      },
    },
  },
});
