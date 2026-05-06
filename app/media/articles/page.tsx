"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type CSSProperties } from "react";
import { blogArticles, type BlogArticle, type BlogCategory } from "@/data/blogArticles";
import SocialSection from "@/app/components/SocialSection";

const headingStyle: CSSProperties = {
  fontWeight: 600,
};

const filterStyle: CSSProperties = {
  fontSize: "12px",
  lineHeight: "normal",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const categoryStyle: CSSProperties = {
  ...filterStyle,
  fontSize: "10px",
};

const filterOrder: Array<"Tout voir" | BlogCategory> = [
  "Tout voir",
  "EVENT",
  "MODE",
  "MUSIQUE",
  "THEATRE",
  "CONCERT",
];

const mosaicClasses = [
  "md:col-span-2 lg:col-span-4 lg:row-span-15",
  "md:col-span-1 lg:col-span-4 lg:row-span-15",
  "md:col-span-1 lg:col-span-4 lg:row-span-15",
  "md:col-span-2 lg:col-span-8 lg:row-span-14",
  "md:col-span-2 lg:col-span-4 lg:row-span-14",
];

function getCardClassName(index: number) {
  const baseClass = mosaicClasses[index % mosaicClasses.length];

  if (index >= mosaicClasses.length) {
    return `${baseClass} lg:min-h-[420px]`;
  }

  return baseClass;
}

function ArticleCard({
  article,
  index,
}: {
  article: BlogArticle;
  index: number;
}) {
  return (
    <Link
      href={`/media/articles/${article.id}`}
      className={`${getCardClassName(index)} group relative block min-h-[360px] overflow-hidden bg-black text-white sm:min-h-[460px] lg:min-h-0`}
    >
      <Image
        src={article.imageBackground}
        alt={article.nom}
        fill
        priority={index < 3}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/15" />

      <span
        className="absolute left-3 top-3 border border-white/80 px-2 py-1 text-white sm:left-4 sm:top-4"
        style={categoryStyle}
      >
        {article.categorie}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h2
          className="max-w-[18ch] text-[24px] uppercase leading-[0.95] tracking-[-0.04em] sm:text-[30px]"
          style={headingStyle}
        >
          {article.nom}
        </h2>
        <p className="mt-2 max-w-[34ch] text-xs leading-relaxed text-white/82 sm:text-[13px]">
          {article.description}
        </p>
      </div>
    </Link>
  );
}

export default function Page() {
  const availableFilters = useMemo(
    () =>
      filterOrder.filter(
        (filter) =>
          filter === "Tout voir" ||
          blogArticles.some((article) => article.categorie === filter),
      ),
    [],
  );
  const [selectedFilter, setSelectedFilter] =
    useState<(typeof availableFilters)[number]>("Tout voir");

  const filteredArticles = useMemo(
    () =>
      selectedFilter === "Tout voir"
        ? blogArticles
        : blogArticles.filter((article) => article.categorie === selectedFilter),
    [selectedFilter],
  );

  return (
    <main className="px-4 pb-14 pt-10 sm:px-8 lg:px-2">
      <div className="mx-auto w-full max-w-[1400px]">
        <header className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h1
            className="whitespace-nowrap text-[42px] uppercase leading-[0.92] tracking-[-0.05em] sm:text-[64px] lg:text-[72px]"
            style={headingStyle}
          >
            LE BLOG LOCTA
          </h1>

          <p className="max-w-[420px] pt-1 text-sm leading-relaxed text-black/68">
            Une selection d&apos;articles autour des scenes locales, des
            formats culturels et des collaborations qui bougent a Lyon et
            autour.
          </p>
        </header>

        <nav className="mb-6 flex flex-wrap gap-x-6 gap-y-2 border-b border-black pb-3">
          {availableFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`cursor-pointer underline-offset-2 ${
                selectedFilter === filter ? "font-semibold underline" : ""
              }`}
              style={{
                ...filterStyle,
                fontWeight: selectedFilter === filter ? 600 : 400,
              }}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </nav>

        {filteredArticles.length === 0 ? (
          <p className="text-sm text-black/65">
            Aucun article disponible pour ce filtre.
          </p>
        ) : (
          <section className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[34px]">
            {filteredArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </section>
        )}
      </div>
      <SocialSection />
    </main>
  );
}
