import Image from "next/image";
import { notFound } from "next/navigation";
import { blogArticles, type BlogSectionItem } from "@/data/blogArticles";

function SectionBlock({
  title,
  items,
}: {
  title: string;
  items: BlogSectionItem[];
}) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">{title} (TODO)</h2>

      <div className="mt-4 space-y-8">
        {items.map((item) => (
          <article
            key={item.titre}
            className="rounded-lg border border-black/10 p-4"
          >
            <h3 className="text-xl font-semibold">{item.titre}</h3>
            <p className="mt-2 text-black/80">{item.description}</p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {item.images.map((image, index) => (
                <div
                  key={`${item.titre}-${index}`}
                  className="relative h-52 w-full overflow-hidden rounded-md"
                >
                  <Image
                    src={image}
                    alt={`${item.titre} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return blogArticles.map((article) => ({ id: article.id }));
}

export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const { id } = await Promise.resolve(params);
  const article = blogArticles.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  return (
    <main className="px-8 py-10">
      <header className="relative h-80 w-full overflow-hidden rounded-xl">
        <Image
          src={article.imageBackground}
          alt={article.nom}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-end p-6">
          <h1 className="text-4xl font-bold text-white">{article.nom}</h1>
        </div>
      </header>

      <p className="mt-6 max-w-3xl text-lg text-black/80">{article.description}</p>

      <SectionBlock title="First Section" items={article.firstSection} />
      <SectionBlock title="Second Section" items={article.secondSection} />
      <SectionBlock title="Third Section" items={article.thirdSection} />
    </main>
  );
}
