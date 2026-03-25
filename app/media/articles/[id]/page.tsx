import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogArticles } from "@/data/blogArticles";
import SocialSection from "@/app/components/SocialSection";
import type { CSSProperties } from "react";

const headingStyle: CSSProperties = {
  fontWeight: 600,
};

const categoryStyle: CSSProperties = {
  fontSize: "10px",
  lineHeight: "normal",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

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

  const otherArticles = blogArticles.filter((a) => a.id !== article.id).slice(0, 2);

  const firstItem = article.firstSection[0];
  const secondItem = article.secondSection[0];
  const thirdItem = article.thirdSection[0];

  return (
    <main>
      {/* Breadcrumb */}
      <div className="px-6 pt-8 md:px-12">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-black/50">
          <Link href="/media" className="hover:text-black transition-colors">
            Média
          </Link>
          <span>/</span>
          <Link href="/media/articles" className="hover:text-black transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-black">{article.nom}</span>
        </nav>
      </div>

      {/* Titre + description */}
      <div className="px-6 pt-8 pb-6 text-center md:px-12">
        <h1
          className="mx-auto max-w-3xl text-4xl uppercase leading-[0.95] tracking-[-0.03em] md:text-6xl"
          style={headingStyle}
        >
          {article.nom}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/60 md:text-base">
          {article.description}
        </p>
      </div>

      {/* Image banner */}
      <div className="relative h-[50vw] max-h-[640px] min-h-[300px] w-full overflow-hidden">
        <Image
          src={article.imageBackground}
          alt={article.nom}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Section 1 — H2 + desc + image à droite */}
      {firstItem && (
        <section className="px-6 py-12 md:px-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <h2
                className="text-2xl uppercase leading-tight tracking-[-0.02em] md:text-4xl"
                style={headingStyle}
              >
                {firstItem.titre}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-black/70 md:text-base">
                {firstItem.description}
              </p>
            </div>
            {firstItem.images[0] && (
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={firstItem.images[0]}
                  alt={firstItem.titre}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Section 2 — H3 centré seul */}
      {secondItem && (
        <section className="px-6 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3
              className="text-2xl uppercase leading-tight tracking-[-0.02em] md:text-3xl"
              style={headingStyle}
            >
              {secondItem.titre}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-black/70 md:text-base">
              {secondItem.description}
            </p>
          </div>
        </section>
      )}

      {/* Section 3 — image à gauche + H2 + desc à droite */}
      {thirdItem && (
        <section className="px-6 py-12 md:px-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            {thirdItem.images[0] && (
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={thirdItem.images[0]}
                  alt={thirdItem.titre}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h2
                className="text-2xl uppercase leading-tight tracking-[-0.02em] md:text-4xl"
                style={headingStyle}
              >
                {thirdItem.titre}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-black/70 md:text-base">
                {thirdItem.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Derniers articles */}
      {otherArticles.length > 0 && (
        <section className="border-t border-black/10 px-6 py-12 md:px-12 md:py-16">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-[280px_1fr] md:items-center md:gap-12">
            <div>
              <h2
                className="text-4xl uppercase leading-[0.9] tracking-[-0.03em] md:text-6xl"
                style={headingStyle}
              >
                Derniers
                <br />
                Articles
              </h2>
              <Link
                href="/media/articles"
                className="mt-4 inline-block border-b border-black text-sm"
              >
                Tous les articles
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {otherArticles.map((a) => (
                <Link
                  key={a.id}
                  href={`/media/articles/${a.id}`}
                  className="group relative block aspect-3/4 overflow-hidden bg-black"
                >
                  <Image
                    src={a.imageBackground}
                    alt={a.nom}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span
                    className="absolute left-3 top-3 border border-white/80 px-2 py-1 text-white"
                    style={categoryStyle}
                  >
                    {a.categorie}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-black/50 px-4 py-3">
                    <h3
                      className="text-sm uppercase leading-tight tracking-[-0.02em] text-white md:text-base"
                      style={headingStyle}
                    >
                      {a.nom}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-xs text-white/70">
                      {a.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SocialSection />
    </main>
  );
}
