"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import SocialSection from "@/app/components/SocialSection";
import { talents, type Talent } from "@/data/talents";

const filters = ["Tout voir", "Photographe", "Rappeur"] as const;
const TALENTS_PER_PAGE = 23;

const layoutPattern = [
  {
    className: "col-span-3 md:col-span-4 md:col-start-1 md:row-start-1 md:row-span-2",
    featured: false,
  },
  {
    className: "col-span-3 md:col-span-4 md:col-start-5 md:row-start-1 md:row-span-2",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-2 md:col-start-3 md:row-start-3 md:row-span-1",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-2 md:col-start-6 md:row-start-3 md:row-span-1",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-2 md:col-start-8 md:row-start-3 md:row-span-1",
    featured: false,
  },
  {
    className: "col-span-6 md:col-span-4 md:col-start-1 md:row-start-4 md:row-span-3",
    featured: true,
  },
  {
    className: "col-span-3 md:col-span-2 md:col-start-5 md:row-start-4 md:row-span-1",
    featured: false,
  },
  {
    className: "col-span-6 md:col-span-4 md:col-start-9 md:row-start-4 md:row-span-3",
    featured: true,
  },
  {
    className: "col-span-2 md:col-span-3 md:col-start-1 md:row-start-7 md:row-span-2",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-3 md:col-start-5 md:row-start-7 md:row-span-2",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-3 md:col-start-10 md:row-start-7 md:row-span-2",
    featured: false,
  },
  {
    className: "col-span-3 md:col-span-2 md:col-start-3 md:row-start-9 md:row-span-1",
    featured: false,
  },
  {
    className: "col-span-3 md:col-span-2 md:col-start-5 md:row-start-9 md:row-span-1",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-2 md:col-start-8 md:row-start-9 md:row-span-1",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-2 md:col-start-11 md:row-start-9 md:row-span-1",
    featured: false,
  },
  {
    className: "col-span-3 md:col-span-4 md:col-start-1 md:row-start-10 md:row-span-2",
    featured: false,
  },
  {
    className: "col-span-3 md:col-span-4 md:col-start-5 md:row-start-10 md:row-span-2",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-2 md:col-start-3 md:row-start-12 md:row-span-1",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-2 md:col-start-6 md:row-start-12 md:row-span-1",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-2 md:col-start-8 md:row-start-12 md:row-span-1",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-3 md:col-start-1 md:row-start-13 md:row-span-2",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-3 md:col-start-5 md:row-start-13 md:row-span-2",
    featured: false,
  },
  {
    className: "col-span-2 md:col-span-3 md:col-start-10 md:row-start-13 md:row-span-2",
    featured: false,
  },
];

function TalentCard({ talent, index }: { talent: Talent; index: number }) {
  const pattern = layoutPattern[index % layoutPattern.length];

  return (
    <article className={`${pattern.className} group min-h-0`}>
      <div
        className={`relative w-full overflow-hidden bg-neutral-100 ${
          pattern.featured ? "aspect-[9/12]" : "aspect-[4/5]"
        } md:h-full md:aspect-auto`}
      >
        <Image
          src={talent.image_01}
          alt={talent.fullname}
          fill
          sizes="(max-width: 768px) 92vw, 34vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          priority={index < 2}
        />
      </div>
      <p className="mt-1 text-[10px] leading-none text-black/70">
        {talent.fullname}
      </p>
    </article>
  );
}

function getPaginationItems(currentPage: number, totalPages: number) {
  if (totalPages <= 6) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, "...", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const paginationItems = getPaginationItems(currentPage, totalPages);
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav className="flex flex-col items-center gap-7 py-14 text-xs uppercase">
      <div className="flex items-center gap-4 text-black/25">
        {paginationItems.map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`}>...</span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={`underline-offset-4 transition-opacity hover:opacity-60 ${
                page === currentPage ? "font-semibold text-black underline" : ""
              }`}
            >
              {page}
            </button>
          ),
        )}
      </div>
      <div className="flex items-center gap-12 font-semibold">
        <button
          type="button"
          disabled={!hasPrevious}
          onClick={() => onPageChange(currentPage - 1)}
          className="underline underline-offset-4 transition-opacity disabled:cursor-default disabled:opacity-25"
        >
          Précédent
        </button>
        <button
          type="button"
          disabled={!hasNext}
          onClick={() => onPageChange(currentPage + 1)}
          className="underline underline-offset-4 transition-opacity disabled:cursor-default disabled:opacity-25"
        >
          Suivant
        </button>
      </div>
    </nav>
  );
}

function LocalStats() {
  const stats = [
    { value: "2023", label: "Création de l'agence" },
    { value: "2", label: "Membres de l'agence" },
    { value: "4", label: "Projets réalisés" },
    { value: "1200", label: "Personnes qui nous suivent" },
  ];

  return (
    <section className="border-y border-black px-4 py-8 md:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-4 md:gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline gap-3">
            <strong className="text-2xl font-semibold leading-none md:text-3xl">
              {stat.value}
            </strong>
            <span className="text-[11px] leading-tight text-black/70 md:text-xs">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PageFooter() {
  return (
    <footer className="bg-white px-4 pb-24 pt-12 md:px-10 md:pb-10 md:pt-14">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="max-w-[1220px] text-[28px] font-semibold uppercase leading-[0.95] tracking-[-0.03em] md:text-[64px]">
          Locta média indépendant lyonnais
        </h2>

        <div className="mt-12 grid gap-8 text-xs md:grid-cols-3 md:gap-12">
          <form className="max-w-[360px]">
            <h3 className="mb-5 font-semibold">Newsletter</h3>
            <div className="flex items-center gap-4 border-b border-black pb-2">
              <input
                type="email"
                aria-label="E-mail"
                placeholder="E-mail"
                className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-black/55"
              />
              <button type="submit" className="font-semibold underline underline-offset-4">
                M&apos;inscrire
              </button>
            </div>
            <p className="mt-4 text-black/65">Pour ne rien louper de l&apos;actu Lyonnaise</p>
          </form>

          <div className="border-t border-black pt-4 md:border-t-0 md:pt-0">
            <h3 className="mb-5 flex items-center justify-between font-semibold">
              A propos <span className="md:hidden">+</span>
            </h3>
            <ul className="hidden space-y-1 text-black/70 md:block">
              <li>Qui sommes-nous ?</li>
              <li>Nous événements</li>
              <li>Local talent</li>
              <li>Partenariat</li>
              <li>Nous suivre</li>
            </ul>
          </div>

          <div className="border-y border-black py-4 md:border-y-0 md:py-0">
            <h3 className="mb-5 flex items-center justify-between font-semibold">
              Infos <span className="md:hidden">+</span>
            </h3>
            <ul className="hidden space-y-1 text-black/70 md:block">
              <li>Articles</li>
              <li>Contact</li>
              <li>Nos services</li>
              <li>La manifeste</li>
              <li>Confidentialité</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-black/55">@Locta</p>
      </div>

      <div className="mt-10 hidden bg-black py-3 text-center text-xs font-semibold text-white underline underline-offset-4 md:block">
        Découvrir l&apos;agence +
      </div>
    </footer>
  );
}

export default function Page() {
  const [selectedFilter, setSelectedFilter] = useState<(typeof filters)[number]>("Tout voir");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTalents = useMemo(
    () =>
      selectedFilter === "Tout voir"
        ? talents
        : talents.filter((talent) => talent.type === selectedFilter),
    [selectedFilter],
  );
  const totalPages = Math.max(1, Math.ceil(filteredTalents.length / TALENTS_PER_PAGE));
  const pageTalents = useMemo(() => {
    const startIndex = (currentPage - 1) * TALENTS_PER_PAGE;

    return filteredTalents.slice(startIndex, startIndex + TALENTS_PER_PAGE);
  }, [currentPage, filteredTalents]);

  const handleFilterChange = (filter: (typeof filters)[number]) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <main className="bg-white text-black">
      <section className="px-4 pb-8 pt-10 md:px-10 md:pb-12 md:pt-20">
        <div className="mx-auto max-w-[1440px]">
          <header className="mb-7 grid gap-6 md:mb-8 md:grid-cols-12 md:items-end">
            <h1 className="text-[42px] font-semibold uppercase leading-[0.9] tracking-[-0.03em] md:col-span-6 md:text-[76px]">
              Mur
              <br />
              des talents
            </h1>
            <p className="max-w-[430px] text-sm leading-snug text-black/70 md:col-span-4 md:col-start-9">
              Lorem ipsum dolor sit amet consectetur. Id sit tellus ultrices magna.
              Sagittis volutpat non nec senectus odio. Arcu suspendisse blandit
              mauris pretium. Leo enim semper eu dignissim at volutpat.
            </p>
          </header>

          <div className="mb-6 flex flex-wrap gap-6 text-xs font-semibold uppercase md:mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterChange(filter)}
                className={`underline-offset-4 transition-opacity hover:opacity-60 ${
                  selectedFilter === filter ? "underline" : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <section className="grid grid-cols-6 gap-x-3 gap-y-8 md:grid-cols-12 md:auto-rows-[148px] md:gap-x-2 md:gap-y-8 lg:auto-rows-[180px]">
            {pageTalents.map((talent, index) => (
              <TalentCard key={talent.id} talent={talent} index={index} />
            ))}
          </section>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>

      <SocialSection />
      <LocalStats />
      <PageFooter />
    </main>
  );
}
