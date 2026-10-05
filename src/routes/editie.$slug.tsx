import { useT } from "@/lib/i18n";
import { useContent } from "@/lib/content";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DeepDiveCard, SectionBlock } from "@/components/dossier/blocks";
import { editionDate, getChapter } from "@/lib/dossier-edition";

export const Route = createFileRoute("/editie/$slug")({
  loader: ({ params }) => {
    const chapter = getChapter(params.slug);
    if (!chapter) throw notFound();
    return { chapter };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Deel niet gevonden" }, { name: "robots", content: "noindex" }],
      };
    }
    const { chapter } = loaderData;
    const title = `${String(chapter.index).padStart(2, "0")} · ${chapter.title} — Onderzoekseditie 4.0`;
    return {
      meta: [
        { title },
        { name: "description", content: chapter.subtitle },
        { property: "og:title", content: title },
        { property: "og:description", content: chapter.subtitle },
      ],
    };
  },
  component: ChapterPage,
});

function ChapterPage() {
  const { chapter: nlChapter } = Route.useLoaderData();
  const t = useT();
  const { dossierChapters } = useContent();
  const chapter = dossierChapters.find((c) => c.slug === nlChapter.slug) ?? nlChapter;
  const main = chapter.sections.filter((s) => /^0\d$/.test(s.number));
  const deep = chapter.sections.filter((s) => /^9\d$/.test(s.number));
  const closing = chapter.sections.find((s) => s.number === "SLOT");

  const position = dossierChapters.findIndex((c) => c.slug === chapter.slug);
  const prev = position > 0 ? dossierChapters[position - 1] : null;
  const next = position < dossierChapters.length - 1 ? dossierChapters[position + 1] : null;

  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20">
      <header className="border-b border-zinc-800 pb-12">
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-zinc-600">
          {t("Deel", "Part")} {String(chapter.index).padStart(2, "0")} {t("van", "of")} 07 · {chapter.kicker}
        </p>
        <h1 className="mt-6 font-serif text-[2.4rem] leading-[1.08] text-zinc-50 sm:text-[3.25rem]">
          {chapter.title}
        </h1>
        <p className="mt-6 text-[1.05rem] leading-[1.75] text-zinc-400">{chapter.subtitle}</p>
        <p className="mt-8 font-mono text-[0.64rem] uppercase tracking-[0.2em] text-zinc-700">
          {t("Redactionele herstructurering + externe broncontrole", "Editorial restructuring + external source check")} · {t(editionDate, "19 September 2026")}
        </p>
      </header>

      <div className="mt-14 space-y-16">
        {main.map((section) => (
          <SectionBlock key={section.number} section={section} />
        ))}
      </div>

      {deep.length > 0 ? (
        <section className="mt-20">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-zinc-600">
            {t("Verdieping · bewijsarchitectuur en broncontrole", "Deep dive · evidence architecture and source check")}
          </p>
          <h2 className="mt-3 font-serif text-[1.9rem] leading-tight text-zinc-50">
            {t("Technische verdieping", "Technical deep dive")}
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-zinc-500">
            {t("Klap een onderdeel open voor het volledige protocol, de bewijsgrenzen en de bijbehorende tabellen.", "Expand a section for the full protocol, the limits of the evidence and the accompanying tables.")}
          </p>
          <div className="mt-8 space-y-3">
            {deep.map((section) => (
              <DeepDiveCard key={section.number} section={section} />
            ))}
          </div>
        </section>
      ) : null}

      {closing ? (
        <div className="mt-20 border border-zinc-800 bg-zinc-900/40 p-6 sm:p-9">
          <SectionBlock section={closing} />
        </div>
      ) : null}

      <nav
        className="mt-20 grid gap-3 border-t border-zinc-800 pt-8 sm:grid-cols-2"
        aria-label={t("Hoofdstuknavigatie", "Chapter navigation")}
      >
        {prev ? (
          <Link
            to="/editie/$slug"
            params={{ slug: prev.slug }}
            className="group border border-zinc-800 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <span className="flex items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.2em] text-zinc-600">
              <ArrowLeft className="size-3.5" /> {t("Vorig deel", "Previous part")}
            </span>
            <span className="mt-2 block font-serif text-lg leading-snug text-zinc-200">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/editie/$slug"
            params={{ slug: next.slug }}
            className="group border border-zinc-800 p-5 text-right transition-colors hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <span className="flex items-center justify-end gap-2 font-mono text-[0.64rem] uppercase tracking-[0.2em] text-zinc-600">
              {t("Volgend deel", "Next part")} <ArrowRight className="size-3.5" />
            </span>
            <span className="mt-2 block font-serif text-lg leading-snug text-zinc-200">
              {next.title}
            </span>
          </Link>
        ) : (
          <Link
            to="/editie/bronregister"
            className="group border border-zinc-800 p-5 text-right transition-colors hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <span className="flex items-center justify-end gap-2 font-mono text-[0.64rem] uppercase tracking-[0.2em] text-zinc-600">
              {t("Bronregister", "Source registry")} <ArrowRight className="size-3.5" />
            </span>
            <span className="mt-2 block font-serif text-lg leading-snug text-zinc-200">
              {t("W01–W26 met directe links", "W01–W26 with direct links")}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}
