"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import SocialSection from "@/app/components/SocialSection";
import { talents, type Talent } from "@/data/talents";

const filters = ["Tout voir", ...Array.from(new Set(talents.flatMap((t) => t.type)))];
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
    <article className={`${pattern.className} min-h-0`}>
      <Link
        href={`/media/local-talent/${talent.id}`}
        aria-label={`Voir le talent ${talent.fullname}`}
        className="group flex h-full min-h-0 flex-col outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        <div
          className={`relative w-full overflow-hidden bg-neutral-100 md:min-h-0 md:flex-1 ${
            pattern.featured ? "aspect-[9/12]" : "aspect-[4/5]"
          } md:aspect-auto`}
        >
          {talent.media_01_type === "video" ? (
            <video
              src={talent.media_01}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
            />
          ) : (
            <Image
              src={talent.media_01}
              alt={talent.fullname}
              fill
              sizes="(max-width: 768px) 92vw, 34vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              priority={index < 2}
            />
          )}
        </div>
        <p className="mt-1 shrink-0 text-[10px] leading-none text-black/70">
          {talent.fullname}
        </p>
      </Link>
    </article>
  );
}

function getPaginationItems(currentPage: number, totalPages: number): Array<number | "..."> {
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
    <nav className="flex flex-col items-center gap-7 pb-4 pt-12 text-xs uppercase md:pb-0">
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

export default function Page() {
  const [selectedFilter, setSelectedFilter] = useState("Tout voir");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTalents = useMemo(
    () =>
      selectedFilter === "Tout voir"
        ? talents
        : talents.filter((talent) => talent.type.includes(selectedFilter as Talent["type"][number])),
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
      <section className="px-4 pb-0 pt-10 md:px-10 md:pt-20">
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

      <div className="mt-4 md:mt-8">
        <SocialSection />
      </div>
    </main>
  );
}
