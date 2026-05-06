import Link from "next/link";
import AgenceSocialSection from "../../components/AgenceSocialSection";

const articleImg = "https://www.figma.com/api/mcp/asset/94fedd3c-066f-4ab8-9922-cc346d359486";
const talent1 = "https://www.figma.com/api/mcp/asset/47f4c5e0-0d35-4a63-8719-a8c05a577451";
const talent2 = "https://www.figma.com/api/mcp/asset/a20257ee-8305-4134-907e-b2fceda8e592";
const talent3 = "https://www.figma.com/api/mcp/asset/6af51310-caaa-49fd-97d8-74294e32cea3";

const h: React.CSSProperties = { fontFamily: 'var(--Heading, "Armin Soft")' };
const t: React.CSSProperties = { fontFamily: 'var(--Text, "Armin Soft")' };

const otherTalents = [
  { img: talent1, label: "Nom du talent" },
  { img: talent2, label: "Nom du talent" },
  { img: talent3, label: "Nom du talent" },
];

export default async function ProjetDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div style={{ background: "#000", color: "#fff" }}>
      {/* ── Fil d'ariane ── */}
      <nav style={{ display: "flex", gap: "12px", alignItems: "center", padding: "20px 24px", ...t, fontSize: "16px", fontWeight: 300, color: "#fff" }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Accueil</Link>
        <span>/</span>
        <Link href="/agence/projets" style={{ color: "#fff", textDecoration: "none" }}>Nos projets</Link>
        <span>/</span>
        <span>{title}</span>
      </nav>

      {/* ── Hero ── */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px", padding: "60px 24px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", width: "100%" }}>
          <h1 style={{ ...h, fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 600, lineHeight: "100%", letterSpacing: "-1.44px", textTransform: "uppercase", color: "#fff", textAlign: "center" }}>
            {title}
          </h1>
          <p style={{ ...t, fontSize: "14px", fontWeight: 300, lineHeight: "normal", color: "#fff", textAlign: "center", maxWidth: "810px" }}>
            Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac. Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor.
          </p>
        </div>
        {/* Hero image */}
        <div style={{ width: "100%", height: "clamp(300px, 38vw, 550px)", background: "#111", position: "relative", overflow: "hidden" }}>
          <img src={articleImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>

      {/* ── Content block 1: texte gauche + image droite ── */}
      <section style={{ display: "flex", gap: "8px", padding: "0 24px 24px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 0 280px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "24px", padding: "80px", background: "#000" }}>
          <h2 style={{ ...h, fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>
            Titre H2
          </h2>
          <div style={{ ...t, fontSize: "16px", fontWeight: 300, lineHeight: "normal", color: "#fff" }}>
            <p style={{ marginBottom: "16px" }}>
              Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac. Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac. Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.
            </p>
          </div>
        </div>
        <div style={{ flex: "1 0 320px", minHeight: "570px", position: "relative", overflow: "hidden" }}>
          <img src={articleImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(51,51,51,0) 50%, rgba(0,0,0,0.3) 100%)" }} />
          <p style={{ position: "absolute", bottom: "20px", left: "20px", ...t, fontSize: "12px", fontWeight: 300, color: "#000" }}>
            © Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </section>

      {/* ── Quote centrale ── */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px", background: "#000" }}>
        <h3 style={{ ...h, fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff", textAlign: "center", maxWidth: "810px", marginBottom: "24px" }}>
          Titre H3
        </h3>
        <p style={{ ...t, fontSize: "16px", fontWeight: 300, lineHeight: "normal", color: "#fff", textAlign: "center", maxWidth: "810px" }}>
          Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac. Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor.
        </p>
      </section>

      {/* ── Content block 2: image gauche + texte droite ── */}
      <section style={{ display: "flex", gap: "8px", padding: "0 24px 24px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 0 320px", minHeight: "570px", position: "relative", overflow: "hidden" }}>
          <img src={articleImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(51,51,51,0) 50%, rgba(0,0,0,0.3) 100%)" }} />
          <p style={{ position: "absolute", bottom: "20px", left: "20px", ...t, fontSize: "12px", fontWeight: 300, color: "#000" }}>
            © Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div style={{ flex: "1 0 280px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "24px", padding: "80px", background: "#000" }}>
          <h2 style={{ ...h, fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>
            Titre H2
          </h2>
          <div style={{ ...t, fontSize: "16px", fontWeight: 300, lineHeight: "normal", color: "#fff" }}>
            <p style={{ marginBottom: "16px" }}>
              Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </section>

      {/* ── D'autres talents ── */}
      <section style={{ padding: "60px 24px 32px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
          <h2 style={{ ...h, fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>
            D'autres talents
          </h2>
          <Link href="/agence/projets" style={{ ...h, fontSize: "18px", fontWeight: 600, color: "#fff", borderBottom: "1px solid #fff", textDecoration: "none", textTransform: "uppercase", paddingBottom: "2px" }}>
            Tout voir
          </Link>
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", flexWrap: "wrap" }}>
          {otherTalents.map((talent, i) => (
            <Link key={i} href={`/agence/projets/${talent.label.toLowerCase().replace(/\s+/g, "-")}-${i}`} style={{ flex: "1 0 240px", display: "flex", flexDirection: "column", gap: "8px", textDecoration: "none", ...(i === 1 ? { maxWidth: "225px" } : {}) }}>
              <div style={{ aspectRatio: "342/460", position: "relative", overflow: "hidden" }}>
                <img src={talent.img} alt={talent.label} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <p style={{ ...t, fontSize: "12px", fontWeight: 300, color: "#fff" }}>{talent.label}</p>
            </Link>
          ))}
        </div>
      </section>

      <AgenceSocialSection />
    </div>
  );
}
