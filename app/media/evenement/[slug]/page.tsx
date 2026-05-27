import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import { events, getEventBySlug, getOtherEvents } from "@/data/events";
import SocialSection from "@/app/components/SocialSection";
import Footer from "@/app/components/Footer";
import ContactForm from "@/app/components/ContactForm";

const headingStyle: CSSProperties = {
  fontFamily: 'var(--Heading, "Armin Soft")',
};
const textStyle: CSSProperties = {
  fontFamily: 'var(--Text, "Armin Soft")',
};

function formatDate(date: string) {
  const parsedDate = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsedDate.getTime())) return date;
  return parsedDate.toLocaleDateString("fr-FR").replaceAll("/", ".");
}

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Événement | Locta" };
  return {
    title: `${event.titre} | Locta`,
    description: event.description,
  };
}

/** Carte article réutilisée (hero, galerie, autres évènements) */
function ArticleCard({
  src,
  copyright,
  topLeft,
  bottomLeft,
  priority = false,
  containerStyle,
}: {
  src: string;
  copyright?: string;
  topLeft?: ReactNode;
  bottomLeft?: ReactNode;
  priority?: boolean;
  containerStyle?: CSSProperties;
}) {
  return (
    <div
      className="relative flex w-full flex-1 flex-col items-start justify-end overflow-hidden min-h-[360px] sm:min-h-[480px] md:min-h-[570px] p-[12px] sm:p-[16px] md:p-[20px] min-w-0 md:min-w-[450px]"
      style={{
        aspectRatio: "300/380",
        ...containerStyle,
      }}
    >
      {/* image */}
      <Image src={src} alt="" fill priority={priority} className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      {/* gradient : opaque haut + bas, transparent milieu */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(51,51,51,0) 50%, rgba(0,0,0,0.3) 100%)",
        }}
      />
      {/* slot haut-gauche */}
      {topLeft && (
        <div className="absolute left-[12px] top-[12px] sm:left-[16px] sm:top-[16px] md:left-[20px] md:top-[20px]">{topLeft}</div>
      )}
      {/* slot bas-gauche */}
      {bottomLeft && (
        <div className="relative w-full">{bottomLeft}</div>
      )}
      {/* copyright */}
      {copyright && (
        <p
          className="relative w-full text-[12px] text-white/90"
          style={textStyle}
        >
          {copyright}
        </p>
      )}
    </div>
  );
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event || !event.detail) notFound();

  const { detail } = event;
  const others = getOtherEvents(slug, 2);

  return (
    <div className="bg-white text-black">

      {/* ── FIL D'ARIANE ──────────────────────────────────────── */}
      <nav
        className="flex flex-wrap items-center gap-x-[12px] gap-y-[4px] px-(--margin-margin,24px) py-[20px] text-[14px] sm:text-[16px]"
        style={textStyle}
      >
        <Link href="/" className="hover:underline">Accueil</Link>
        <span>/</span>
        <Link href="/media/evenement" className="hover:underline">Nos évènements</Link>
        <span>/</span>
        <span>{event.titre}</span>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="px-(--margin-margin,24px)">
        <ArticleCard
          src={detail.heroImage}
          priority
          containerStyle={{
            aspectRatio: "16 / 9",
            width: "100%",
            minHeight: "320px",
          }}
          topLeft={
            <div className="flex items-center gap-[8px]">
              <div
                className="border border-white px-[6px] py-[2px]"
                style={textStyle}
              >
                <span className="text-[12px] uppercase text-white">{event.type}</span>
              </div>
              <span className="text-[12px] uppercase text-white" style={textStyle}>
                {formatDate(event.date)}
              </span>
            </div>
          }
          bottomLeft={
            <div className="flex flex-col gap-[8px]">
              <p
                className="text-[22px] uppercase leading-none text-white sm:text-[28px] md:text-[32px]"
                style={{ ...headingStyle, fontWeight: 600 }}
              >
                {event.titre}
              </p>
              <p
                className="text-[14px] uppercase leading-none text-white sm:text-[16px] md:text-[18px]"
                style={{ ...headingStyle, fontWeight: 300 }}
              >
                Lyon
              </p>
            </div>
          }
        />
      </section>

      {/* ── DÉTAIL ROWS ───────────────────────────────────────── */}
      {detail.detailRows.map((row, i) => {
        if (row.kind !== "split") return null;

        const textBlock = (
          <div
            className="flex w-full flex-1 flex-col items-center justify-center gap-[16px] py-[24px] text-center sm:gap-[24px] sm:py-[40px] md:gap-[32px] md:py-[60px]"
            style={{ minWidth: 0 }}
          >
            <p
              className="text-[32px] uppercase leading-none sm:text-[42px] md:text-[56px]"
              style={{ ...headingStyle, fontWeight: 600 }}
            >
              {row.heading}
            </p>
            <div className="max-w-[480px] text-[14px] leading-normal text-[#0f0f0f]" style={textStyle}>
              <p className="mb-0">{row.paragraphs[0]}</p>
              <p>{row.paragraphs[1]}</p>
            </div>
          </div>
        );

        const imageBlock = (
          <ArticleCard
            src={row.image}
            copyright="© Lorem ipsum dolor sit amet consectetur."
          />
        );

        return (
          <section
            key={i}
            className="flex flex-col md:flex-row md:flex-wrap items-center gap-(--gutter,8px) px-(--margin-margin,24px) py-(--gutter,8px)"
          >
            {row.textFirst ? (
              <>{textBlock}{imageBlock}</>
            ) : (
              <>{imageBlock}{textBlock}</>
            )}
          </section>
        );
      })}

      {/* ── GALERIE ────────────────────────────────────────────── */}
      <section className="flex flex-col md:flex-row md:flex-wrap items-start gap-(--gutter,8px) px-(--margin-margin,24px)">
        {detail.gallery.map((src, i) => (
          <ArticleCard
            key={`${src}-${i}`}
            src={src}
            copyright="© Lorem ipsum dolor sit amet consectetur."
          />
        ))}
      </section>

      {/* ── NOS DERNIERS ÉVÉNEMENTS ───────────────────────────── */}
      <section className="flex flex-col items-end justify-center px-(--margin-margin,24px) pb-[24px] pt-[40px] sm:pb-[40px] sm:pt-[60px]">
        {/* en-tête */}
        <div className="mb-0 flex w-full flex-col gap-[16px] items-start sm:flex-row sm:items-end sm:justify-between">
          <p
            className="text-[32px] uppercase leading-none sm:text-[42px] md:text-[56px]"
            style={{ ...headingStyle, fontWeight: 600 }}
          >
            Nos derniers évènements
          </p>
          <Link
            href="/media/evenement"
            className="border-b border-black pb-[2px] text-[16px] uppercase leading-none hover:opacity-60 sm:text-[18px]"
            style={{ ...headingStyle, fontWeight: 600 }}
          >
            Tout voir
          </Link>
        </div>
      </section>

      {/* cartes */}
      <section className="flex flex-col md:flex-row md:flex-wrap items-start gap-(--gutter,8px) px-(--margin-margin,24px)">
        {others.map((ev) => (
          <Link
            key={ev.id}
            href={`/media/evenement/${ev.slug}`}
            className="group flex w-full flex-1 md:min-w-[450px]"
          >
            <ArticleCard
              src={ev.image}
              topLeft={
                <div className="flex items-center gap-[8px]">
                  <div className="border border-white px-[6px] py-[2px]" style={textStyle}>
                    <span className="text-[12px] uppercase text-white">{ev.type}</span>
                  </div>
                  <span className="text-[12px] uppercase text-white" style={textStyle}>
                    {ev.type} — {formatDate(ev.date)}
                  </span>
                </div>
              }
              bottomLeft={
                <div className="flex flex-col gap-[8px]">
                  <p
                    className="w-full text-[22px] uppercase leading-none text-white transition-opacity group-hover:opacity-80 sm:text-[28px] md:text-[32px]"
                    style={{ ...headingStyle, fontWeight: 600 }}
                  >
                    {ev.titre}
                  </p>
                  <p
                    className="w-full text-[14px] uppercase leading-none text-white sm:text-[16px] md:text-[18px]"
                    style={{ ...headingStyle, fontWeight: 300 }}
                  >
                    {formatDate(ev.date)}
                  </p>
                </div>
              }
            />
          </Link>
        ))}
      </section>
      <ContactForm />
      <SocialSection />
      <Footer />
    </div>
  );
}
