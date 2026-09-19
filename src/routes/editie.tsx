import { Outlet, createFileRoute } from "@tanstack/react-router";
import { EditionShell } from "@/components/dossier/edition-shell";

export const Route = createFileRoute("/editie")({
  component: EditionLayout,
});

function EditionLayout() {
  return (
    <EditionShell>
      <Outlet />
    </EditionShell>
  );
}
