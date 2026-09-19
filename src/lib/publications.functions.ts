import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type Publication = Pick<Database["public"]["Tables"]["publications"]["Row"],
  "id" | "sort_order" | "code" | "kind" | "title" | "subtitle" | "description" | "category" |
  "format" | "audience" | "page_count" | "file_size" | "pdf_path" | "published_on" | "keywords"
>;

const COLUMNS =
  "id,sort_order,code,kind,title,subtitle,description,category,format,audience,page_count,file_size,pdf_path,published_on,keywords";

export const getPublications = createServerFn({ method: "GET" }).handler(async (): Promise<Publication[]> => {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) throw new Error("De bibliotheekverbinding is niet beschikbaar.");
  const client = createClient<Database>(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await client
    .from("publications")
    .select(COLUMNS)
    .eq("is_published", true)
    .order("sort_order");
  if (error) throw new Error(`De bibliotheek kon niet worden geladen: ${error.message}`);
  return data;
});

export function formatPublicationDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  return new Intl.DateTimeFormat("nl-BE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date);
}

export function matchesQuery(publication: Publication, query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  const haystack = [
    publication.code, publication.kind, publication.title, publication.subtitle,
    publication.description, publication.category, publication.audience, publication.format,
    ...(publication.keywords ?? []),
  ].join(" ").toLowerCase();
  return needle.split(/\s+/).every((term) => haystack.includes(term));
}
