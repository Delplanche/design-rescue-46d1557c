import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { DossierBlock, DossierSection } from "@/lib/dossier-edition";

function Para({ text }: { text: string }) {
  return (
    <p className="text-[0.975rem] leading-[1.85] text-zinc-300 [text-wrap:pretty]">
      {text}
    </p>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 border-l border-zinc-800 pl-6">
      {items.map((item, i) => (
        <li key={i} className="relative text-[0.95rem] leading-[1.8] text-zinc-300">
          <span className="absolute -left-[1.6rem] top-[0.55rem] h-px w-3 bg-zinc-700" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Callout({ label, text }: { label: string; text: string }) {
  return (
    <aside className="grid gap-3 border border-zinc-800 bg-zinc-900/60 p-5 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-6">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-amber-200/80">
        {label}
      </p>
      <p className="min-w-0 text-[0.925rem] leading-[1.75] text-zinc-200">{text}</p>
    </aside>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto border border-zinc-800">
      <table className="w-full min-w-[34rem] border-collapse text-left">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900/80">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-zinc-400"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-zinc-900 last:border-b-0 hover:bg-zinc-900/40">
              {headers.map((_, ci) => (
                <td
                  key={ci}
                  className={
                    ci === 0
                      ? "px-4 py-3 align-top text-sm font-medium text-zinc-100"
                      : "px-4 py-3 align-top text-sm leading-relaxed text-zinc-400"
                  }
                >
                  {row[ci] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BlockList({ blocks }: { blocks: DossierBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "para") return <Para key={i} text={block.text} />;
        if (block.type === "list") return <List key={i} items={block.items} />;
        if (block.type === "callout")
          return <Callout key={i} label={block.label} text={block.text} />;
        return <DataTable key={i} headers={block.headers} rows={block.rows} />;
      })}
    </div>
  );
}

export function SectionBlock({ section }: { section: DossierSection }) {
  return (
    <section id={`sectie-${section.number}`} className="scroll-mt-28 border-t border-zinc-900 pt-10">
      <p className="font-mono text-[0.7rem] tracking-[0.3em] text-zinc-600">
        {section.number === "SLOT" ? "SLOT" : section.number}
      </p>
      <h2 className="mt-3 font-serif text-[1.9rem] leading-[1.15] text-zinc-50 sm:text-[2.25rem]">
        {section.title}
      </h2>
      {section.lead ? (
        <p className="mt-4 border-l-2 border-amber-200/40 pl-5 text-[1.02rem] leading-[1.7] text-zinc-400 italic">
          {section.lead}
        </p>
      ) : null}
      <div className="mt-8">
        <BlockList blocks={section.blocks} />
      </div>
    </section>
  );
}

export function DeepDiveCard({ section }: { section: DossierSection }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-zinc-800 bg-zinc-900/40">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-zinc-900/80"
      >
        <span className="font-mono text-[0.7rem] tracking-[0.2em] text-zinc-600">
          {section.number}
        </span>
        <span className="min-w-0">
          <span className="block font-serif text-lg leading-snug text-zinc-100">
            {section.title}
          </span>
          {section.lead ? (
            <span className="mt-1 block truncate text-sm text-zinc-500">{section.lead}</span>
          ) : null}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-zinc-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? (
        <div className="border-t border-zinc-800 px-5 py-6">
          {section.lead ? (
            <p className="mb-6 text-[0.95rem] leading-[1.7] text-zinc-400 italic">{section.lead}</p>
          ) : null}
          <BlockList blocks={section.blocks} />
        </div>
      ) : null}
    </div>
  );
}
