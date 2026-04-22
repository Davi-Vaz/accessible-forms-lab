import { createFileRoute } from "@tanstack/react-router";
import zipUrl from "../static/formularios-html.zip?url";

export const Route = createFileRoute("/formularios-html.zip")({
  server: {
    handlers: {
      GET: async () => {
        // Fetch the bundled asset and stream it back with proper headers
        const res = await fetch(zipUrl);
        if (!res.ok) {
          return new Response("Not found", { status: 404 });
        }
        const buf = await res.arrayBuffer();
        return new Response(buf, {
          status: 200,
          headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": 'attachment; filename="formularios-html.zip"',
          },
        });
      },
    },
  },
});
