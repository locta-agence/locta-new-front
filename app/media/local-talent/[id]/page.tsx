import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SocialSection from "@/app/components/SocialSection";
import StatsSection from "@/app/components/StatsSection";
import { events } from "@/data/events";
import { talents, type Talent } from "@/data/talents";

function getTalentById(id: string) {
  return talents.find((talent) => talent.id === id);
}

function getOtherTalents(currentId: string) {
  return talents.filter((talent) => talent.id !== currentId).slice(0, 3);
}

function formatDate(date: string) {
  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("fr-FR").replaceAll("/", ".");
}

function splitParagraphs(text: string) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function TextBlock({
  title,
  text,
  align = "left",
}: {
  title?: string;
  text: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {title ? (
        <h2 className="mb-6 text-[30px] font-semibold uppercase leading-none tracking-[-0.02em] md:text-[52px]">
          {title}
        </h2>
      ) : null}
      <div
        className={`space-y-5 text-sm leading-snug text-black/75 ${
          align === "center" ? "mx-auto max-w-[760px]" : "max-w-[610px]"
        }`}
      >
        {splitParagraphs(text).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function TalentIntroText({ talent }: { talent: Talent }) {
  return (
    <div>
      <TextBlock title={talent.title_01} text={talent.text_01} />
      {talent.text_02 ? (
        <div className="mt-6">
          <TextBlock title={talent.title_02} text={talent.text_02} />
        </div>
      ) : null}
    </div>
  );
}

function ImagePanel({
  src,
  alt,
  caption,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`relative overflow-hidden bg-neutral-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 92vw, 50vw"
        className="object-cover"
      />
      {caption ? (
        <figcaption className="absolute bottom-2 left-2 text-[10px] text-white/90">
          © {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function EventCard({ event }: { event: (typeof events)[number] }) {
  return (
    <Link
      href={`/media/evenement/${event.slug}`}
      className="group relative block aspect-[9/12] overflow-hidden bg-black text-white outline-none focus-visible:ring-2 focus-visible:ring-black"
    >
      <Image
        src={event.image}
        alt={event.titre}
        fill
        sizes="33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/30" />
      <div className="absolute left-3 top-3 flex items-center gap-2 text-[10px] uppercase">
        <span className="border border-white px-2 py-1">{event.type}</span>
        <span>{formatDate(event.date)}</span>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-2xl font-semibold uppercase leading-none">
          {event.titre}
        </h3>
        <p className="mt-1 text-xs uppercase">Lieu</p>
      </div>
    </Link>
  );
}

function OtherTalentCard({
  talent,
  variant,
}: {
  talent: Talent;
  variant: "large" | "small";
}) {
  return (
    <Link
      href={`/media/local-talent/${talent.id}`}
      className={`group block outline-none focus-visible:ring-2 focus-visible:ring-black ${
        variant === "large" ? "md:col-span-4" : "md:col-span-2"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-neutral-100 ${
          variant === "large" ? "aspect-[4/5]" : "aspect-[3/4]"
        }`}
      >
        <Image
          src={talent.image_01}
          alt={talent.fullname}
          fill
          sizes="(max-width: 768px) 30vw, 28vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />
      </div>
      <p className="mt-1 text-[10px] leading-none text-black/70">
        {talent.fullname}
      </p>
    </Link>
  );
}

export function generateStaticParams() {
  return talents.map((talent) => ({ id: talent.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const talent = getTalentById(id);

  if (!talent) {
    return { title: "Talent | Locta" };
  }

  return {
    title: `${talent.fullname} | Locta`,
    description: talent.subTitle,
  };
}

export default async function TalentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const talent = getTalentById(id);

  if (!talent) {
    notFound();
  }

  const otherTalents = getOtherTalents(talent.id);
  const photoCredit = talent.credits_photos.join(" / ");
  const latestEvents = events.slice(0, 3);

  return (
    <main className="bg-white text-black">
      <section className="px-4 pb-12 pt-8 md:px-10 md:pb-18">
        <div className="mx-auto max-w-[1440px]">
          <nav className="mb-10 flex flex-wrap gap-2 text-xs text-black/60 md:mb-12">
            <Link href="/" className="hover:text-black">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/media/local-talent" className="hover:text-black">
              Mur des talents
            </Link>
            <span>/</span>
            <span className="text-black">{talent.fullname}</span>
          </nav>

          <header className="mx-auto mb-8 max-w-[720px] text-center md:mb-10">
            <h1 className="text-[38px] font-semibold uppercase leading-none tracking-[-0.03em] md:text-[72px]">
              {talent.fullname}
            </h1>
            <p className="mx-auto mt-7 max-w-[560px] text-sm leading-snug text-black/70">
              {talent.subTitle}
            </p>
          </header>

          <ImagePanel
            src={talent.image_01}
            alt={talent.fullname}
            priority
            className="aspect-[1/1] md:aspect-[16/6]"
          />

          <section className="mt-8 grid gap-10 md:mt-7 md:grid-cols-12 md:items-center md:gap-8">
            <div className="md:col-span-5 md:col-start-2">
              <TalentIntroText talent={talent} />
            </div>
            <ImagePanel
              src={talent.image_02}
              alt={talent.title_01}
              caption={photoCredit}
              className="aspect-[4/5] md:col-span-6 md:col-start-7"
            />
          </section>

          <section className="py-12 md:py-24">
            <TextBlock title={talent.title_03} text={talent.text_03} align="center" />
          </section>

          <section className="hidden pb-14 md:block">
            <div className="mb-8 flex items-end justify-between gap-8">
              <h2 className="max-w-[760px] text-[52px] font-semibold uppercase leading-none tracking-[-0.03em]">
                Derniers événements de {talent.fullname}
              </h2>
              <Link
                href="/media/evenement"
                className="text-xs font-semibold uppercase underline underline-offset-4"
              >
                Tout voir
              </Link>
            </div>
            <div className="grid gap-2 md:grid-cols-3">
              {latestEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          <section className="grid gap-10 md:grid-cols-12 md:items-center md:gap-8">
            <ImagePanel
              src={talent.image_event_01}
              alt={talent.title_event_01}
              caption={photoCredit}
              className="aspect-[4/5] md:col-span-6"
            />
            <div className="md:col-span-5 md:col-start-8">
              <TextBlock title={talent.title_event_01 || "Titre H2"} text={talent.text_event_01} />
            </div>
          </section>

          <section className="pt-12 md:pt-16">
            <div className="mb-8 flex items-end justify-between gap-8">
              <h2 className="text-[32px] font-semibold uppercase leading-none tracking-[-0.03em] md:text-[52px]">
                D&apos;autres talents
              </h2>
              <Link
                href="/media/local-talent"
                className="text-xs font-semibold uppercase underline underline-offset-4"
              >
                Tout voir
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-2 md:grid-cols-12 md:items-start md:gap-3">
              {otherTalents.map((otherTalent, index) => (
                <OtherTalentCard
                  key={otherTalent.id}
                  talent={otherTalent}
                  variant={index === 1 ? "small" : "large"}
                />
              ))}
            </div>
          </section>
        </div>
      </section>

      <div className="mt-4 md:mt-8">
        <SocialSection />
      </div>
      <StatsSection />
    </main>
  );
}
