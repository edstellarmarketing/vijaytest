import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = await params;
  const client = createClient();

  const page = await client
    .getByUID("page", uid)
    .catch(() => notFound());

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>{page.data.page_title as string}</h1>
      <PrismicRichText field={page.data.description} />
    </main>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");
  return pages.map((page) => ({ uid: page.uid }));
}