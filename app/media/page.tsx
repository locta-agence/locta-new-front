import Link from "next/link";
import ScrollGallery from "../components/ScrollGallery";
import SocialSection from "../components/SocialSection";
import ChiffresSection from "../components/ChiffresSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero text */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-16 gap-6">
        <h1
          className="text-[40px] md:text-[72px]"
          style={{
            textAlign: "center",
            fontFamily: 'var(--Heading, "Armin Soft")',
            fontWeight: 600,
            lineHeight: "100%",
            letterSpacing: "-1.44px",
            textTransform: "uppercase",
            color: "#000",
          }}
        >
          LOCTA MÉDIA<br />INDÉPENDANT LYONNAIS
        </h1>
        <Link
          href="/media/contact"
          style={{
            fontFamily: 'var(--Text, "Armin Soft")',
            fontSize: "var(--Text-Small, 14px)",
            fontWeight: 600,
            lineHeight: "normal",
            textDecoration: "underline",
            color: "#000",
          }}
        >
          Nous contacter
        </Link>
      </section>

      {/* Video with logo overlay */}
      <section className="w-full px-4 pb-4 md:px-10 md:pb-10">
        <div className="relative w-full overflow-hidden h-[360px] md:h-[550px]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/video/ski.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Logo overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 289"
              fill="none"
              style={{ width: "clamp(100px, 15vw, 300px)", height: "auto" }}
            >
              <path
                d="M299.996 195.546V195.937C283.425 220.107 263.156 242.518 239.722 260.211C229.899 267.622 212.552 279.358 200.269 280.606C188.853 281.764 170.869 273.284 160.22 268.677C139.538 259.735 119.506 249.086 98.4018 241.113C77.2974 233.14 65.9304 229.05 46.4961 242.644C29.4186 254.585 16.4085 272.449 3.86981 288.812H3.09315L0 286.68C25.9349 248.821 50.6532 210.074 77.0011 172.502C84.0763 162.415 91.2682 152.431 99.0662 142.877C99.2548 142.123 98.8642 142.406 98.5903 142.213C83.0617 131.156 65.6925 122.684 50.716 110.823C28.2738 93.0546 21.8586 77.5035 35.5376 50.5989C48.4893 25.1084 75.0393 1.64268 104.7 0.0669212C140.988 -1.86349 166.963 38.4822 195.34 54.8009C216.997 67.2543 230.846 48.7717 244.624 34.2847C248.534 30.1769 252.256 25.8223 256.076 21.6202L256.853 21.6337L259.511 23.9771C238.967 50.2622 215.6 82.2532 179.385 85.2386L178.801 85.8223L178.756 222.154C191.591 238.464 205.98 251.376 228.292 249.553C245.993 248.107 267.143 226.675 278.824 214.204C285.033 207.578 290.716 200.435 296.893 193.773L297.419 193.634L300 195.546H299.996ZM164.759 209.921V82.6573C138.379 68.3318 117.531 30.9536 86.0157 26.9446C59.165 23.5282 39.991 47.6225 61.5713 68.875C79.8923 86.9132 111.313 98.5001 132.633 113.23L134.052 114.904L70.716 204.866C74.2312 203.402 77.468 201.306 80.9473 199.748C99.2413 191.564 117.67 191.663 136.691 197.382C146.536 200.341 155.906 204.776 164.763 209.921H164.759Z"
                fill="white"
                style={{ mixBlendMode: "difference" }}
              />
            </svg>
          </div>
        </div>
      </section>

      <ScrollGallery />

      {/* Talents section */}
      <section className="flex flex-col items-end justify-center px-4 py-20 gap-3 md:px-[70px] md:py-[40px] md:h-[641px]">
        <div className="flex flex-col items-start gap-3 w-full md:max-w-[900px]">
          <p
            className="text-[20px] md:text-[32px]"
            style={{
              fontFamily: 'var(--Heading, "Armin Soft")',
              fontWeight: 600,
              lineHeight: "100%",
              textTransform: "uppercase",
              color: "#000",
              alignSelf: "stretch",
            }}
          >
            Dans la continuité des valeurs de Locta, nous mettons en avant des artistes émergent de la culture lyonnaise.
          </p>
          <Link
            href="#"
            style={{
              fontFamily: 'var(--Text, "Armin Soft")',
              fontSize: "var(--Text-Small, 14px)",
              fontWeight: 600,
              lineHeight: "normal",
              textDecoration: "underline",
              color: "#000",
            }}
          >
            Tous les talents
          </Link>
        </div>
      </section>

      {/* Articles section */}
      <section className="flex flex-col md:flex-row px-4 md:px-6 pb-8 md:items-end md:gap-2">
        {/* Mobile: "Derniers articles" header above cards */}
        <div className="md:hidden flex flex-col gap-3 pb-8">
          <p
            style={{
              fontFamily: 'var(--Heading, "Armin Soft")',
              fontSize: "32px",
              fontWeight: 600,
              lineHeight: "100%",
              textTransform: "uppercase",
              color: "#000",
            }}
          >
            Derniers articles
          </p>
          <Link
            href="#"
            style={{
              fontFamily: 'var(--Text, "Armin Soft")',
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "underline",
              color: "#000",
            }}
          >
            Tous les articles
          </Link>
        </div>

        {/* Card 1 */}
        <div
          className="w-full mb-2 md:mb-0 md:flex-1"
          style={{
            aspectRatio: "300/380",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(51, 51, 51, 0.00) 50%, rgba(0, 0, 0, 0.30) 100%), url(/images/134f8f4eb69029543e7dce8d7ab181d3b98565d6.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span style={{ display: "inline-flex", padding: "4px 8px", border: "1px solid #fff", fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "12px", fontWeight: 600, color: "#fff", textTransform: "uppercase" }}>
            Mode
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "20px", fontWeight: 600, color: "#fff", textTransform: "uppercase", lineHeight: "100%" }}>
              Les sorties sapes
            </p>
            <p style={{ fontFamily: 'var(--Text, "Armin Soft")', fontSize: "14px", fontWeight: 300, color: "#fff", lineHeight: "normal" }}>
              Le point sur les sorties dans le monde de la mode cette semaine
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="w-full mb-2 md:mb-0 md:flex-1"
          style={{
            aspectRatio: "300/380",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(51, 51, 51, 0.00) 50%, rgba(0, 0, 0, 0.30) 100%), url(/images/source_imgi_69_442171572_983153753516259_113050789989027832_n.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span style={{ display: "inline-flex", padding: "4px 8px", border: "1px solid #fff", fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "12px", fontWeight: 600, color: "#fff", textTransform: "uppercase" }}>
            Musique
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "20px", fontWeight: 600, color: "#fff", textTransform: "uppercase", lineHeight: "100%" }}>
              Drink more water
            </p>
            <p style={{ fontFamily: 'var(--Text, "Armin Soft")', fontSize: "14px", fontWeight: 300, color: "#fff", lineHeight: "normal" }}>
              Rayaane et Brownelims ont présenté leur projet Drink More Water
            </p>
          </div>
        </div>

        {/* Desktop: "Derniers articles" column */}
        <div
          className="hidden md:flex md:flex-1 flex-col items-center justify-center gap-3 py-10 self-stretch"
        >
          <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "64px", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#000", textAlign: "center" }}>
            Derniers articles
          </p>
          <Link
            href="#"
            style={{ fontFamily: 'var(--Text, "Armin Soft")', fontSize: "var(--Text-Small, 14px)", fontWeight: 600, lineHeight: "normal", textDecoration: "underline", color: "#000" }}
          >
            Tous les articles
          </Link>
        </div>
      </section>

      {/* Event card / full-width photo */}
      <div className="px-4 md:px-6 pb-4 md:pb-0">
        <div
          className="relative w-full flex flex-col items-start justify-between p-5"
          style={{
            height: "420px",
            backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(51, 51, 51, 0.00) 50%, rgba(0, 0, 0, 0.30) 100%), url(/images/134f8f4eb69029543e7dce8d7ab181d3b98565d6.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Mobile: event info overlay */}
          <div className="md:hidden flex gap-2 items-center">
            <span style={{ display: "inline-flex", padding: "2px 6px", border: "1px solid #fff", fontFamily: 'var(--Text, "Armin Soft")', fontSize: "12px", fontWeight: 300, color: "#fff" }}>
              THÈME
            </span>
            <span style={{ fontFamily: 'var(--Text, "Armin Soft")', fontSize: "12px", fontWeight: 300, color: "#fff" }}>
              16 avril 2026
            </span>
          </div>
          <div className="md:hidden flex flex-col gap-2">
            <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "20px", fontWeight: 600, color: "#fff", textTransform: "uppercase", lineHeight: "100%" }}>
              Soirée Locta 2026
            </p>
            <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "16px", fontWeight: 600, color: "#fff", textTransform: "uppercase", lineHeight: "100%" }}>
              Lieu
            </p>
          </div>

          {/* Desktop: empty (just background) */}
          <div className="hidden md:block" />
        </div>
      </div>

      {/* À propos section */}
      <div className="flex flex-col md:flex-row px-4 md:px-6 py-8 md:py-8 gap-2 md:items-end">
        {/* Text block */}
        <div className="flex flex-col items-start gap-5 md:flex-1 md:max-w-[458px] py-10 md:px-8">
          <p
            className="text-[32px] md:text-[56px]"
            style={{
              fontFamily: 'var(--Heading, "Armin Soft")',
              fontWeight: 600,
              lineHeight: "100%",
              textTransform: "uppercase",
              alignSelf: "stretch",
              color: "#000",
            }}
          >
            À propos du média
          </p>
          <p style={{ fontFamily: 'var(--Text, "Armin Soft")', fontSize: "var(--Text-Small, 14px)", fontWeight: 300, lineHeight: "normal", alignSelf: "stretch", color: "#000" }}>
            Locta est un média développé au sein d&apos;une association culturelle lyonnaise, dédié à la mise en avant de la scène urbaine locale à travers des productions vidéo, photographiques et éditoriales. Actif principalement en ligne et sur les réseaux sociaux, Locta propose des contenus réguliers qui explorent la musique, la mode, le streetwear et l&apos;art.
          </p>
          <Link
            href="#"
            style={{ fontFamily: 'var(--Text, "Armin Soft")', fontSize: "var(--Text-Small, 14px)", fontWeight: 600, lineHeight: "normal", textDecoration: "underline", color: "#000" }}
          >
            En savoir plus
          </Link>
        </div>

        {/* Photo */}
        <div className="md:flex-1">
          <div
            className="w-full h-[300px] md:h-[616px]"
            style={{
              background: "url(/images/img-21.png) lightgray 50% / cover no-repeat",
            }}
          />
        </div>
      </div>

      <SocialSection />
    </div>
  );
}
