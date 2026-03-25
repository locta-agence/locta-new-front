import Image from "next/image";
import { partners } from "@/data/partners";
import Link from "next/link";

const svgMap: Record<string, string> = {
  instagram: '/images/instagram.svg',
  linkedin: '/images/linkedIn.svg',
  tiktok: '/images/tikTok.svg',
};


export default function Page(){
    return (
    <main className="p-8">
      <div className="text-center">
        <h1 className="text-7xl font-semibold uppercase">Les partenaires Locta (TODO)</h1>
        <p>Envie de devenir partenaire ?</p>
        <Link
              href="/media/contact"
              className="font-bold underline"
            >
              Nous contacter
        </Link>
      </div>

      <section className="w-full px-6 pb-10">
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "500px", maxHeight: "550px" }}
        >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/ski.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        </div>
      </section>

      <section className="flex flex-col">
        {partners.map((partner, index) => (
          <article
            key={partner.id}
            className={`self-stretch px-6 pb-8 flex flex-col md:inline-flex md:items-center gap-2 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Image avec overlay gradient */}
            <div className="relative flex-1 aspect-[9/16] min-h-[450px] md:min-w-96 md:min-h-[500px] p-5 bg-gradient-to-b from-black/30 via-zinc-800/0 to-black/30 overflow-hidden">
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-cover -z-10"
              />
            </div>

            {/* Contenu texte */}
            <div className="flex-1 px-4 md:px-10 inline-flex flex-col justify-center items-center gap-6">
              <h2 className="self-stretch text-center text-6xl font-semibold uppercase leading-[56px]">
                {partner.name}
              </h2>
              <p className="self-stretch text-center text-sm font-light">
                {partner.description}
              </p>
              <a href={partner.site} target="_blank" rel="noopener noreferrer" className="self-stretch text-center text-sm font-light underline">
                {partner.site}
              </a>
              {partner.socials && (
                <div className="inline-flex justify-center items-center gap-6">
                  {partner.socials.map((s) => svgMap[s.platform] && (
                    <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" title={s.platform}>
                      <Image src={svgMap[s.platform]} alt={s.platform} width={20} height={20} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

    </main>
    );
}