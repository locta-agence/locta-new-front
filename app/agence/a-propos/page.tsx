import Link from "next/link";
import Image from "next/image";
import AgenceSocialSection from "../components/AgenceSocialSection";

export default function AgenceAProposPage() {
  return (
    <main style={{ background: "#000", color: "#fff" }}>
      <div className="p-[40px]">
        <div className="text-center">
          <h1
            className="font-bold text-6xl uppercase"
            style={{ color: "#fff" }}
          >
            À propos de nous
          </h1>
          <p className="mt-[32px]" style={{ color: "#fff" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor niam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
          <div className="mb-[40px]" />
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
        </div>

        <div className="text-center mt-[60px]">
          <h2 className="font-bold text-4xl uppercase" style={{ color: "#fff" }}>
            Notre team
          </h2>
          <p className="mt-[32px]" style={{ color: "rgba(255,255,255,0.7)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor niam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Image + texte */}
        <section className="mt-[24px] flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 relative aspect-[9/12] overflow-hidden">
            <Image
              src="/images/team/team_1.png"
              alt="Team Member"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="p-[60px]">
              <h2
                className="font-bold text-4xl lg:text-6xl uppercase mb-6"
                style={{ color: "#fff" }}
              >
                Titre H2
              </h2>
              <div
                className="self-stretch text-sm font-light"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur. Felis amet ultricies
                  gravida quam tortor. Ut elementum vulputate vivamus varius hac.
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Felis amet ultricies
                  gravida quam tortor. Ut elementum vulputate vivamus varius hac.
                  Lorem ipsum dolor sit amet consectetur. Felis amet ultricies
                  gravida quam tortor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2 images côte à côte */}
        <section
          className="mt-[24px] grid gap-[24px]"
          style={{ gridTemplateColumns: "2fr 1fr" }}
        >
          <div className="relative aspect-[9/12] overflow-hidden">
            <Image
              src="/images/team/team_1.png"
              alt="Team"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[9/12] overflow-hidden">
            <Image
              src="/images/team/team_1.png"
              alt="Team"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Texte + image inversés */}
        <section className="mt-[24px] flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="flex-1 relative aspect-[9/12] overflow-hidden">
            <Image
              src="/images/team/team_1.png"
              alt="Team Member"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="p-[60px]">
              <h2
                className="font-bold text-4xl lg:text-6xl uppercase mb-6"
                style={{ color: "#fff" }}
              >
                Titre H2
              </h2>
              <div
                className="self-stretch text-sm font-light"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur. Felis amet ultricies
                  gravida quam tortor. Ut elementum vulputate vivamus varius hac.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Felis amet ultricies
                  gravida quam tortor. Ut elementum vulputate vivamus varius hac.
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Citation */}
        <div
          className="mt-[40px] p-[70px] grid gap-8"
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <div />
          <div className="flex flex-col justify-between">
            <p
              className="font-bold text-5xl uppercase"
              style={{ color: "#fff" }}
            >
              Lorem ipsum dolor sit amet consectetur. Felis amet ultricies
              gravida quam tortor. Ut elementum vulputate vivamus varius hac.
            </p>
            <Link
              href="/agence/projets"
              className="inline-block w-fit text-sm md:text-base mt-[24px]"
              style={{
                fontFamily: 'var(--Heading, "Armin Soft")',
                fontWeight: 600,
                color: "#fff",
                borderBottom: "1px solid #fff",
                textDecoration: "none",
              }}
            >
              Tous les projets
            </Link>
          </div>
        </div>

        {/* 2 images finales */}
        <div className="mt-[60px] grid grid-cols-2 gap-[24px]">
          <div className="relative aspect-[9/12] overflow-hidden">
            <Image src="/images/team/team_1.png" alt="Team" fill className="object-cover" />
          </div>
          <div className="relative aspect-[9/12] overflow-hidden">
            <Image src="/images/team/team_1.png" alt="Team" fill className="object-cover" />
          </div>
        </div>
      </div>

      <AgenceSocialSection />
    </main>
  );
}
