import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID("page", "home");

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>{page.data.page_title as string}</h1>
      <PrismicRichText field={page.data.description} />
    </main>
  );
}