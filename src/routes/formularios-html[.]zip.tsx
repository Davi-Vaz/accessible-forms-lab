import { createFileRoute } from "@tanstack/react-router";
import zipB64 from "../static/formularios-html.zip.b64?raw";

function base64ToBytes(b64: string): Uint8Array {
  const clean = b64.replace(/\s+/g, "");
  const bin = atob(clean);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

export const Route = createFileRoute("/formularios-html.zip")({
  server: {
    handlers: {
      GET: () => {
        const bytes = base64ToBytes(zipB64);
        return new Response(bytes, {
          status: 200,
          headers: {
            "Content-Type": "application/zip",
            "Content-Disposition":
              'attachment; filename="formularios-html.zip"',
            "Content-Length": String(bytes.byteLength),
          },
        });
      },
    },
  },
});
