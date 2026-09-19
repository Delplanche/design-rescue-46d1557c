import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Library, Menu, ShieldCheck, Table2, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { dossierChapters, editionLabel } from "@/lib/dossier-edition";

const methodology = [
  "Primaire bron boven samenvatting.",
  "Casus niet automatisch generaliseren.",
  "Productfeature niet verwarren met gebruik.",
  "Juridische norm niet verwarren met overtreding.",
  "Correlatie niet verwarren met causaliteit.",
  "Onzekerheid zichtbaar houden.",
  "Correcties niet verbergen maar versieerbaar maken.",
];

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="flex h-full flex-col gap-8 overflow-y-auto px-6 py-8" aria-label="Hoofdstukken">
      <div>
        <Link to="/editie" onClick={onNavigate} className="block">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-zinc-600">
            Onderzoeksdossier
          </p>
          <p className="mt-2 font-serif text-[1.35rem] leading-[1.15] text-zinc-100">
            De Marktplaats
            <br />
            van de Ziel
          </p>
        </Link>
      </div>

      <ul className="space-y-1">
        {dossierChapters.map((chapter) => {
          const href = `/editie/${chapter.slug}`;
          const active = pathname === href;
          return (
            <li key={chapter.slug}>
              <Link
                to="/editie/$slug"
                params={{ slug: chapter.slug }}
                onClick={onNavigate}
                className={`grid grid-cols-[auto_minmax(0,1fr)] gap-3 border-l-2 py-2.5 pl-4 pr-2 transition-colors ${
                  active
                    ? "border-amber-200/70 bg-zinc-900/70 text-zinc-50"
                    : "border-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                <span className="font-mono text-[0.68rem] leading-6 tracking-[0.15em] text-zinc-600">
                  {String(chapter.index).padStart(2, "0")}
                </span>
                <span className="min-w-0 text-[0.86rem] leading-snug">{chapter.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto space-y-1 border-t border-zinc-900 pt-6">
        <Link
          to="/editie/bronregister"
          onClick={onNavigate}
          className="flex items-center gap-3 py-2 text-[0.82rem] text-zinc-400 transition-colors hover:text-zinc-100"
        >
          <Table2 className="size-4 shrink-0 text-zinc-600" /> Bronregister W01–W26
        </Link>
        <Link
          to="/archief"
          onClick={onNavigate}
          className="flex items-center gap-3 py-2 text-[0.82rem] text-zinc-400 transition-colors hover:text-zinc-100"
        >
          <Library className="size-4 shrink-0 text-zinc-600" /> Bibliotheek / downloads
        </Link>
        <Link
          to="/"
          onClick={onNavigate}
          className="flex items-center gap-3 py-2 text-[0.82rem] text-zinc-400 transition-colors hover:text-zinc-100"
        >
          <BookOpen className="size-4 shrink-0 text-zinc-600" /> Terug naar de site
        </Link>
      </div>
    </nav>
  );
}

export function EditionShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-200 antialiased">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[19rem] border-r border-zinc-800 bg-zinc-950 lg:block">
        <SidebarNav />
      </aside>

      <div className="lg:pl-[19rem]">
        <header className="sticky top-0 z-20 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-8">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex size-9 items-center justify-center border border-zinc-800 text-zinc-400 lg:hidden"
              aria-label="Hoofdstukken openen"
            >
              <Menu className="size-4" />
            </button>
            <div className="min-w-0">
              <p className="truncate font-mono text-[0.66rem] uppercase tracking-[0.22em] text-zinc-500">
                {editionLabel}
              </p>
              <p className="mt-0.5 flex items-center gap-2 text-[0.7rem] text-zinc-600">
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400/80" aria-hidden />
                  Broncontrole actueel
                </span>
                <span className="hidden sm:inline">· 7 delen · 26 bronnen</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setNotesOpen(!notesOpen)}
              aria-expanded={notesOpen}
              className={`flex items-center gap-2 border px-3 py-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] transition-colors ${
                notesOpen
                  ? "border-amber-200/50 bg-amber-200/10 text-amber-100"
                  : "border-zinc-800 text-zinc-400 hover:text-zinc-100"
              }`}
            >
              <ShieldCheck className="size-3.5" />
              <span className="hidden sm:inline">Methodologie</span>
            </button>
          </div>
          {notesOpen ? (
            <div className="border-t border-zinc-800 bg-zinc-900/70 px-4 py-6 sm:px-8">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-zinc-500">
                Methodologische standaard
              </p>
              <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {methodology.map((rule, i) => (
                  <li key={i} className="flex gap-3 text-[0.85rem] leading-relaxed text-zinc-300">
                    <span className="font-mono text-[0.7rem] text-zinc-600">{i + 1}</span>
                    {rule}
                  </li>
                ))}
              </ol>
              <p className="mt-5 max-w-3xl text-[0.8rem] leading-relaxed text-zinc-500">
                Exacte cijfers zonder reproduceerbare methode worden in deze editie als onbevestigd
                aangemerkt en niet als bewijs gebruikt. Bronclaim, verificatie, inferentie en
                hypothese worden expliciet gescheiden.
              </p>
            </div>
          ) : null}
        </header>

        <main>{children}</main>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Menu sluiten"
            className="absolute inset-0 bg-black/70"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-xs border-r border-zinc-800 bg-zinc-950">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center text-zinc-500"
              aria-label="Menu sluiten"
            >
              <X className="size-4" />
            </button>
            <SidebarNav onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
