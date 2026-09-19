import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { editionDate, sourceRegistry } from "@/lib/dossier-edition";

export const Route = createFileRoute("/editie/bronregister")({
  head: () => ({
    meta: [
      { title: "Bronregister W01–W26 — Onderzoekseditie 4.0" },
      {
        name: "description",
        content:
          "Doorzoekbaar register van de 26 openbare bronnen achter het dossier: EU-regelgeving, toezichtsdocumentatie, CRM-documentatie en onderzoeksjournalistiek.",
      },
      { property: "og:title", content: "Bronregister W01–W26 — Onderzoekseditie 4.0" },
      {
        property: "og:description",
        content: "De 26 openbare bronnen achter het dossier, met directe links.",
      },
    ],
  }),
  component: SourceRegistryPage,
});

function domainOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

const groups = [
  { key: "alle", label: "Alle" },
  { key: "regelgeving", label: "Regelgeving" },
  { key: "toezicht", label: "Toezicht" },
  { key: "software", label: "Software / CRM" },
  { key: "journalistiek", label: "Journalistiek" },
  { key: "data", label: "Data" },
] as const;

function groupOf(id: string) {
  const n = Number(id.slice(1));
  if (n <= 5 || n === 26) return "regelgeving";
  if (n <= 7 || (n >= 22 && n <= 24)) return "toezicht";
  if (n <= 10 || n === 25) return "data";
  if (n <= 19) return "software";
  return "journalistiek";
}

function SourceRegistryPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<string>("alle");

  const results = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return sourceRegistry.filter((entry) => {
      if (group !== "alle" && groupOf(entry.id) !== group) return false;
      const haystack = `${entry.id} ${entry.label} ${entry.url}`.toLowerCase();
      return terms.every((t) => haystack.includes(t));
    });
  }, [query, group]);

  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:py-20">
      <p className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-zinc-600">
        Bronregister · webcontrole {editionDate}
      </p>
      <h1 className="mt-5 font-serif text-[2.4rem] leading-tight text-zinc-50 sm:text-[3rem]">
        W01 – W26
      </h1>
      <p className="mt-5 max-w-2xl text-[1rem] leading-[1.8] text-zinc-400">
        Alle openbare bronnen waarop deze editie steunt: Europese regelgeving en richtsnoeren,
        toezichtsdocumentatie, publieke productdocumentatie van CRM-leveranciers, onderzoeks-
        journalistiek en demografische data.
      </p>

      <div className="mt-10 grid gap-4">
        <label className="relative block">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-600" />
          <span className="sr-only">Zoek in het bronregister</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Zoek op bron, instelling of trefwoord…"
            className="w-full border border-zinc-800 bg-zinc-900/50 py-3 pl-11 pr-4 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-600 focus:outline-none"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {groups.map((g) => (
            <button
              key={g.key}
              type="button"
              onClick={() => setGroup(g.key)}
              className={`border px-3 py-1.5 font-mono text-[0.64rem] uppercase tracking-[0.16em] transition-colors ${
                group === g.key
                  ? "border-amber-200/50 bg-amber-200/10 text-amber-100"
                  : "border-zinc-800 text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-zinc-600">
          {results.length} van {sourceRegistry.length} bronnen
        </p>
      </div>

      <div className="mt-8 overflow-x-auto border border-zinc-800">
        <table className="w-full min-w-[42rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/80">
              <th className="px-4 py-3 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-zinc-500">
                ID
              </th>
              <th className="px-4 py-3 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-zinc-500">
                Bron
              </th>
              <th className="px-4 py-3 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-zinc-500">
                Domein
              </th>
              <th className="px-4 py-3 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-zinc-500">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((entry) => (
              <tr key={entry.id} className="border-b border-zinc-900 last:border-b-0 hover:bg-zinc-900/40">
                <td className="px-4 py-4 align-top font-mono text-[0.72rem] text-amber-200/70">
                  {entry.id}
                </td>
                <td className="px-4 py-4 align-top text-sm leading-relaxed text-zinc-200">
                  {entry.label}
                </td>
                <td className="px-4 py-4 align-top text-sm text-zinc-500">{domainOf(entry.url)}</td>
                <td className="px-4 py-4 align-top">
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-400 underline-offset-4 hover:text-amber-100 hover:underline"
                  >
                    Openen <ExternalLink className="size-3.5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {results.length === 0 ? (
          <p className="px-4 py-10 text-center text-sm text-zinc-500">
            Geen bronnen gevonden voor deze zoekopdracht.
          </p>
        ) : null}
      </div>
    </div>
  );
}
