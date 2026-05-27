import Link from "next/link";
import SocialSection from "../components/SocialSection";
import ChiffresSection from "../components/ChiffresSection";

const heroImg = "https://www.figma.com/api/mcp/asset/9b1bb99e-01fd-43f1-b605-3fafa08f3204";
const parallaxImg = "https://www.figma.com/api/mcp/asset/001f1ce0-3776-4654-ad15-6e1baec7c464";
const proj1 = "https://www.figma.com/api/mcp/asset/5261cc20-4cb9-44fb-b597-ebf245f6dea1";
const proj2 = "https://www.figma.com/api/mcp/asset/63f4a0b9-854f-4766-a779-348843328e89";
const proj3 = "https://www.figma.com/api/mcp/asset/ff6b10db-84e1-4a29-adab-b27c228f3cc0";
const proj4 = "https://www.figma.com/api/mcp/asset/945da69c-d7c6-45e9-8787-9df9412a8522";
const proj5 = "https://www.figma.com/api/mcp/asset/0ce451a8-9a70-4a4d-948e-92b4a5f65906";

const h: React.CSSProperties = { fontFamily: 'var(--Heading, "Armin Soft")' };
const t: React.CSSProperties = { fontFamily: 'var(--Text, "Armin Soft")' };

const services = [
  { title: "Création de sites web", desc: "Conception et développement de sites sur mesure, modernes et performants." },
  { title: "Direction artistique", desc: "Identité visuelle, branding et direction créative pour vos projets." },
  { title: "Captation photo et vidéo", desc: "Shooting photo professionnel et production vidéo pour valoriser vos contenus." },
  { title: "Communication", desc: "Stratégie de communication digitale et community management." },
  { title: "Organisation et/ou Reportage évènement", desc: "Conception, organisation et couverture photo/vidéo de vos évènements." },
];

const projectRows: { img: string; label: string; size?: "large" | "small" }[][] = [
  [
    { img: proj2, label: "Nom du talent", size: "small" },
    { img: proj1, label: "Nom du talent", size: "large" },
  ],
  [
    { img: proj3, label: "Nom du talent", size: "large" },
    { img: proj4, label: "Nom du talent", size: "small" },
    { img: proj5, label: "Nom du talent", size: "large" },
  ],
];

export default function AgencePage() {
  return (
    <div style={{ background: "#000", color: "#fff" }}>
      {/* ── Hero ── */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px 80px", gap: "40px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
          <h1 style={{ ...h, fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 600, lineHeight: "100%", letterSpacing: "-1.44px", textTransform: "uppercase", color: "#fff", textAlign: "center" }}>
            Locta agence<br />web lyonnaise
          </h1>
          <Link href="/agence/contact" style={{ ...h, fontSize: "14px", fontWeight: 600, color: "#fff", borderBottom: "1px solid #fff", textDecoration: "none" }}>
            Nous contacter
          </Link>
        </div>
        <div style={{ width: "100%", height: "clamp(260px, 35vw, 440px)", position: "relative", overflow: "hidden" }}>
          <img src={heroImg} alt="Locta agence" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ display: "flex", gap: "8px", padding: "0 24px 32px", alignItems: "flex-start", flexWrap: "wrap" }}>
        {/* Sticky left */}
        <div style={{ flex: "1 0 280px", position: "sticky", top: "90px", display: "flex", flexDirection: "column", gap: "12px", padding: "40px 0" }}>
          <h2 style={{ ...h, fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>
            Nos services
          </h2>
          <p style={{ ...t, fontSize: "16px", fontWeight: 300, lineHeight: "normal", color: "#fff", maxWidth: "580px" }}>
            Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.
          </p>
          <Link href="/agence/contact" style={{ ...h, fontSize: "14px", fontWeight: 600, color: "#fff", borderBottom: "1px solid #fff", textDecoration: "none", alignSelf: "flex-start" }}>
            Nous contacter
          </Link>
        </div>
        {/* Services list */}
        <div style={{ flex: "1 0 280px", display: "flex", flexDirection: "column" }}>
          {services.map((s, i) => (
            <div key={i} style={{ borderBottom: "1px solid #fff", display: "flex", flexDirection: "column", gap: "12px", padding: "40px 0" }}>
              <h3 style={{ ...h, fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>
                {s.title}
              </h3>
              <p style={{ ...t, fontSize: "16px", fontWeight: 300, lineHeight: "normal", color: "#fff" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Parallax image ── */}
      <section style={{ padding: "0 24px" }}>
        <div style={{ height: "clamp(300px, 52vw, 750px)", position: "relative", overflow: "hidden" }}>
          <img
            src={parallaxImg}
            alt=""
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "232%", maxWidth: "none", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* ── Quote / CTA talents ── */}
      <section className="px-4 py-10 md:px-[70px] md:py-[40px]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", minHeight: "300px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "810px" }}>
          <p style={{ ...h, fontSize: "clamp(20px, 3.5vw, 56px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>
            Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.
          </p>
          <Link href="/agence/projets" style={{ ...h, fontSize: "14px", fontWeight: 600, color: "#fff", borderBottom: "1px solid #fff", textDecoration: "none", alignSelf: "flex-start" }}>
            Tous les talents
          </Link>
        </div>
      </section>

      {/* ── Derniers projets — header ── */}
      <section style={{ padding: "0 24px 32px", display: "flex", gap: "8px", alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: "1 0 260px", display: "flex", flexDirection: "column", gap: "12px", padding: "20px 80px 20px 20px" }}>
          <h2 style={{ ...h, fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>
            Derniers projets by Locta
          </h2>
          <Link href="/agence/projets" style={{ ...h, fontSize: "14px", fontWeight: 600, color: "#fff", borderBottom: "1px solid #fff", textDecoration: "none", alignSelf: "flex-start" }}>
            Tous les projets
          </Link>
        </div>
        {/* Row 1 — 2 cards */}
        <div style={{ flex: "1 0 160px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ aspectRatio: "342/460", position: "relative", overflow: "hidden" }}>
            <img src={proj2} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <p style={{ ...t, fontSize: "12px", fontWeight: 300, color: "#fff" }}>Nom du talent</p>
        </div>
        <div style={{ flex: "1 0 260px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ aspectRatio: "342/460", position: "relative", overflow: "hidden" }}>
            <img src={proj1} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <p style={{ ...t, fontSize: "12px", fontWeight: 300, color: "#fff" }}>Nom du talent</p>
        </div>
      </section>

      {/* ── Derniers projets — row 2 ── */}
      <section style={{ padding: "0 24px 32px", display: "flex", gap: "8px", alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: "1 0 260px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ aspectRatio: "342/460", position: "relative", overflow: "hidden" }}>
            <img src={proj3} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <p style={{ ...t, fontSize: "12px", fontWeight: 300, color: "#fff" }}>Nom du talent</p>
        </div>
        <div style={{ flex: "1 0 160px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ aspectRatio: "342/460", position: "relative", overflow: "hidden" }}>
            <img src={proj4} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <p style={{ ...t, fontSize: "12px", fontWeight: 300, color: "#fff" }}>Nom du talent</p>
        </div>
        <div style={{ flex: "1 0 160px" }} /> {/* spacer */}
        <div style={{ flex: "1 0 260px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ aspectRatio: "342/460", position: "relative", overflow: "hidden" }}>
            <img src={proj5} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <p style={{ ...t, fontSize: "12px", fontWeight: 300, color: "#fff" }}>Nom du talent</p>
        </div>
      </section>

      <SocialSection variant="dark" />
      <ChiffresSection variant="dark" />
    </div>
  );
}
