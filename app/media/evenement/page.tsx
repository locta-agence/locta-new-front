"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type CSSProperties } from "react";
import { events } from "@/data/events";

const typeTextStyle: CSSProperties = {
  fontFamily: 'var(--Text, "Armin Soft")',
  fontSize: "12px",
  lineHeight: "normal",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const semiboldHeadingStyle: CSSProperties = {
  fontFamily: 'var(--Heading, "Armin Soft")',
  fontWeight: 600,
};

function formatDate(date: string) {
  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("fr-FR").replaceAll("/", ".");
}

function EventCard({
  event,
  isFeatured = false,
}: {
  event: (typeof events)[number];
  isFeatured?: boolean;
}) {
  return (
    <Link
      href={`/media/evenement/${event.slug}`}
      aria-label={`Voir l’événement ${event.titre}`}
      className={`group relative block overflow-hidden bg-black text-white outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
        isFeatured ? "h-[430px] sm:h-[520px]" : "h-[420px] sm:h-[560px]"
      }`}
    >
      <Image
        src={event.image}
        alt={event.titre}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        priority={isFeatured}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />

      <div className="absolute left-3 top-3 flex items-center gap-3 sm:left-4 sm:top-4">
        <span
          className="border border-white/90 px-2 py-1 leading-none"
          style={typeTextStyle}
        >
          {event.type}
        </span>
        <span className="text-[10px] uppercase tracking-[0.08em] text-white/85">
          Lyon - {formatDate(event.date)}
        </span>
      </div>

      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
        <h2
          className={`uppercase leading-none ${
            isFeatured ? "text-3xl sm:text-[34px]" : "text-[28px] sm:text-[32px]"
          }`}
          style={semiboldHeadingStyle}
        >
          {event.titre}
        </h2>
        <p className="mt-1 text-[13px] leading-none text-white/85">{formatDate(event.date)}</p>
      </div>
    </Link>
  );
}

export default function Page() {
  const eventFilters = useMemo(
    () => ["Tout voir", ...Array.from(new Set(events.map((event) => event.type)))],
    [],
  );
  const [selectedType, setSelectedType] = useState(eventFilters[0]);

  const filteredEvents = useMemo(
    () =>
      selectedType === "Tout voir"
        ? events
        : events.filter((event) => event.type === selectedType),
    [selectedType],
  );

  const featuredEvent = filteredEvents[0];
  /** Tous les autres événements (lien vers la page détail pour chaque carte) */
  const gridEvents = filteredEvents.slice(1);

  return (
    <main className="px-4 pb-14 pt-10 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1320px]">
        <header className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h1
            className="text-[42px] uppercase leading-[0.95] tracking-[-0.04em] sm:text-[56px]"
            style={semiboldHeadingStyle}
          >
            LES ÉVÉNEMENTS
          </h1>
          <p className="max-w-[420px] text-sm leading-relaxed text-black/65">
            Lorem ipsum dolor sit amet consectetur. Id sit tellus ultrices
            magna. Sagittis volutpat non nec senectus odio. Arcu suspendisse
            blandit mauris pretium. Leo enim semper eu dignissim at volutpat.
          </p>
        </header>

        <nav className="mb-4 flex flex-wrap gap-x-6 gap-y-2 border-b border-black pb-2">
          {eventFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`underline-offset-2 ${
                selectedType === filter ? "font-semibold underline" : ""
              }`}
              style={{
                ...typeTextStyle,
                fontFamily:
                  selectedType === filter
                    ? 'var(--Heading, "Armin Soft")'
                    : 'var(--Text, "Armin Soft")',
                fontWeight: selectedType === filter ? 600 : 400,
              }}
              onClick={() => setSelectedType(filter)}
            >
              {filter}
            </button>
          ))}
        </nav>

        <section className="space-y-1.5">
          {featuredEvent ? <EventCard event={featuredEvent} isFeatured /> : null}

          <div className="grid gap-1.5 md:grid-cols-2">
            {gridEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
