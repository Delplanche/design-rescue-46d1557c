import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { dossierChapters, editionDate, sourceRegistry } from "@/lib/dossier-edition";

export const Route = createFileRoute("/editie/")({
  head: () => ({
    meta: [
      { title: "Onderzoekseditie 4.0 — De Marktplaats van de Ziel" },
      {
        name: "description",
        content:
          "Zeven delen forensisch onderzoek naar gecommercialiseerde intimiteit: operations, financiële stromen, AI-pipelines, sociologie en modelwetgeving.",
      },
      { property: "og:title", content: "Onderzoekseditie 4.0 — De Marktplaats van de Ziel" },
      {
        property: "og:description",
        content:
          "Zeven delen forensisch onderzoek naar gecommercialiseerde intimiteit, met bronregister en expliciet bewijsprotocol.",
      },
    ],
  }),
  component: EditionIndex,
});

function EditionIndex() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-zinc-600">
        Onderzoekseditie 4.0 · {editionDate}
      </p>
      <h1 className="mt-6 font-serif text-[2.75rem] leading-[1.05] text-zinc-50 sm:text-[4rem]">
        De Marktplaats
        <br />
        van de Ziel
      </h1>
      <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.8] text-zinc-400">
        Een forensische reconstructie van gecommercialiseerde intimiteit: van de filosofische
        macro-context tot de operationele achterkant, de financiële ketens, de AI-pipelines, de
        sociale gevolgen en het juridische antwoord. Elk deel scheidt bronclaim, verificatie,
        inferentie en hypothese.
      </p>

      <dl className="mt-12 grid gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-3">
        {[
          ["Delen", String(dossierChapters.length)],
          ["Bronregister", `${sourceRegistry.length} items`],
          ["Broncontrole", editionDate],
        ].map(([label, value]) => (
          <div key={label} className="bg-zinc-950 px-5 py-6">
            <dt className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-zinc-600">
              {label}
            </dt>
            <dd className="mt-2 font-serif text-2xl text-zinc-100">{value}</dd>
          </div>
        ))}
      </dl>

      <ol className="mt-16 space-y-px border-y border-zinc-800">
        {dossierChapters.map((chapter) => (
          <li key={chapter.slug}>
            <Link
              to="/editie/$slug"
              params={{ slug: chapter.slug }}
              className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-5 border-b border-zinc-900 py-7 transition-colors last:border-b-0 hover:bg-zinc-900/40 sm:gap-8"
            >
              <span className="font-mono text-[0.72rem] leading-8 tracking-[0.2em] text-zinc-600">
                {String(chapter.index).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-[1.5rem] leading-tight text-zinc-100 sm:text-[1.75rem]">
                  {chapter.title}
                </span>
                <span className="mt-2 block text-[0.92rem] leading-relaxed text-zinc-500">
                  {chapter.subtitle}
                </span>
                <span className="mt-3 block font-mono text-[0.64rem] uppercase tracking-[0.2em] text-zinc-700">
                  {chapter.kicker}
                </span>
              </span>
              <ArrowRight className="mt-2 size-4 shrink-0 text-zinc-700 transition-colors group-hover:text-amber-200/80" />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
