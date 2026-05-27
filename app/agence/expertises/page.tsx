"use client";
import Link from "next/link";
import { useState } from "react";
import SocialSection from "../../components/SocialSection";
import ChiffresSection from "../../components/ChiffresSection";

const expertiseImg = "https://www.figma.com/api/mcp/asset/827c59c2-de32-4cca-a829-35507e3506ef";
const scrollImg1 = "https://www.figma.com/api/mcp/asset/ed3d7bb8-a12c-4db7-9c34-9fed62011195";
const scrollImg2 = "https://www.figma.com/api/mcp/asset/8c03369d-cb7f-489a-82f8-66f410456bf9";
const scrollImg3 = "https://www.figma.com/api/mcp/asset/ebe05967-cc2d-4a6d-8a7b-c1382aec063a";
const scrollImg4 = "https://www.figma.com/api/mcp/asset/0c273c1c-7c6e-4bbd-96a4-4319b9f114d5";

const h: React.CSSProperties = { fontFamily: 'var(--Heading, "Armin Soft")' };
const t: React.CSSProperties = { fontFamily: 'var(--Text, "Armin Soft")' };

const services = [
  { title: "Création de sites web", desc: "Lorem ipsum - Lorem ipsum - Lorem ipsum - Lorem ipsum" },
  { title: "Direction artistique", desc: "Lorem ipsum - Lorem ipsum - Lorem ipsum - Lorem ipsum" },
  { title: "Captation photo et vidéo", desc: "Lorem ipsum - Lorem ipsum - Lorem ipsum - Lorem ipsum" },
  { title: "Communication", desc: "Lorem ipsum - Lorem ipsum - Lorem ipsum - Lorem ipsum" },
  { title: "Organisation et/ou Reportage évènement", desc: "Lorem ipsum - Lorem ipsum - Lorem ipsum - Lorem ipsum" },
];

const talents = ["GHOWST3", "KIMANI", "KIWAVE", "ELI", "SIM&ON", "AROBAZZE", "TOM JACOMELLI"];
const scrollImgs = [scrollImg1, scrollImg2, scrollImg3, scrollImg4, scrollImg1, scrollImg2, scrollImg3];

type FormState = { prenom: string; nom: string; email: string; telephone: string; projet: string };

export default function ExpertisesPage() {
  const [form, setForm] = useState<FormState>({ prenom: "", nom: "", email: "", telephone: "", projet: "" });

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <div style={{ background: "#000", color: "#fff" }}>
      {/* ── Hero ── */}
      <section style={{ padding: "60px 24px 40px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
          <h1 style={{ ...h, fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>
            Expertises<br />et services
          </h1>
          <p style={{ ...t, fontSize: "14px", fontWeight: 300, lineHeight: "normal", color: "#fff", maxWidth: "420px" }}>
            Lorem ipsum dolor sit amet consectetur. Id sit tellus ultrices magna. Sagittis volutpat non nec senectus odio. Arcu suspendisse blandit mauris pretium.
          </p>
        </div>
      </section>

      {/* ── Services + image ── */}
      <section style={{ display: "flex", gap: "8px", padding: "0 24px 32px", alignItems: "flex-start", flexWrap: "wrap" }}>
        {/* Image */}
        <div style={{ flex: "1 0 280px", aspectRatio: "692/811", position: "relative", overflow: "hidden" }}>
          <img src={expertiseImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        {/* Services list */}
        <div style={{ flex: "1 0 280px", display: "flex", flexDirection: "column", gap: "40px", padding: "0 60px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {services.map((s, i) => (
              <div key={i} style={{ borderBottom: "1px solid #fff", display: "flex", flexDirection: "column", gap: "12px", padding: "40px 0" }}>
                <h3 style={{ ...h, fontSize: "clamp(18px, 2.5vw, 32px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>
                  {s.title}
                </h3>
                <p style={{ ...t, fontSize: "16px", fontWeight: 300, lineHeight: "normal", color: "#fff" }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/agence/contact" style={{ ...h, fontSize: "14px", fontWeight: 600, color: "#fff", borderBottom: "1px solid #fff", textDecoration: "none", alignSelf: "flex-start" }}>
            Nous contacter
          </Link>
        </div>
      </section>

      {/* ── Talents scrolling section ── */}
      <section style={{ position: "relative", height: "925px", overflow: "hidden", width: "100%" }}>
        {/* Left text block */}
        <div style={{ position: "absolute", left: "40px", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "24px", maxWidth: "400px", zIndex: 2 }}>
          <h2 style={{ ...h, fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>
            LOCTA Agence
          </h2>
          <p style={{ ...t, fontSize: "14px", fontWeight: 300, lineHeight: "normal", color: "#fff" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{"\n\n"}Sed do eiusmod tempor niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Scrolling talents column */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "570px", height: "925px", overflow: "hidden" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", animation: "scrollUp 18s linear infinite" }}
          >
            {[...scrollImgs, ...scrollImgs].map((img, i) => (
              <div key={i} style={{ width: i % 2 === 0 ? "380px" : "220px", height: i % 2 === 0 ? "484px" : "280px", flexShrink: 0, position: "relative", overflow: "hidden" }}>
                <img src={img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Talents labels */}
        <div style={{ position: "absolute", right: "40px", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "50px", overflow: "hidden", height: "46px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
            {talents.map((talent) => (
              <div key={talent} style={{ display: "flex", flexDirection: "column", gap: "8px", width: "143px" }}>
                <p style={{ ...h, fontSize: "18px", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>{talent}</p>
                <Link href={`/agence/projets/${talent.toLowerCase().replace(/[&\s]+/g, "-")}`} style={{ ...h, fontSize: "14px", fontWeight: 600, color: "#fff", borderBottom: "1px solid #fff", textDecoration: "none", display: "inline-flex" }}>
                  En savoir plus
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <p style={{ position: "absolute", bottom: "60px", left: "40px", ...h, fontSize: "18px", fontWeight: 600, color: "#fff", textTransform: "uppercase" }}>
          Scroll →
        </p>

        <style>{`
          @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
        `}</style>
      </section>

      {/* ── Image pleine largeur ── */}
      <section style={{ padding: "24px" }}>
        <div style={{ height: "clamp(300px, 38vw, 550px)", background: "#111", position: "relative", overflow: "hidden" }}>
          <img src={scrollImg4} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>

      {/* ── Contact + Formulaire ── */}
      <section style={{ display: "flex", gap: "70px", padding: "60px 24px 80px", alignItems: "flex-start", flexWrap: "wrap" }}>
        {/* Left: CTA text */}
        <div style={{ flex: "1 0 280px", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "center" }}>
          <h2 style={{ ...h, fontSize: "clamp(28px, 4vw, 72px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>
            Un projet ?{"\n"}Un évènement ?{"\n"}Contactez-nous
          </h2>
          <p style={{ ...t, fontSize: "16px", fontWeight: 300, lineHeight: "normal", color: "#fff" }}>
            Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.
          </p>
          <Link href="/agence/contact" style={{ ...h, fontSize: "14px", fontWeight: 600, color: "#fff", borderBottom: "1px solid #fff", textDecoration: "none", alignSelf: "flex-start" }}>
            Nous découvrir
          </Link>
        </div>

        {/* Right: Contact form */}
        <div style={{ flex: "1 0 280px", display: "flex", flexDirection: "column", gap: "32px", padding: "0 60px" }}>
          <h3 style={{ ...h, fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff", textAlign: "center" }}>
            Parlez nous de votre projet
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Prénom + Nom */}
            <div style={{ display: "flex", gap: "8px" }}>
              {(["prenom", "nom"] as const).map((k) => (
                <div key={k} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ ...t, fontSize: "16px", fontWeight: 300, color: "#fff", textAlign: "center", textTransform: "capitalize" }}>
                    {k === "prenom" ? "Prénom*" : "Nom*"}
                  </label>
                  <input
                    type="text"
                    placeholder={k === "prenom" ? "Prénom" : "Nom"}
                    value={form[k]}
                    onChange={set(k)}
                    style={{ border: "1px solid #fff", background: "none", color: "#fff", padding: "12px 16px", ...t, fontSize: "12px", outline: "none" }}
                  />
                </div>
              ))}
            </div>
            {/* Email + Téléphone */}
            <div style={{ display: "flex", gap: "8px" }}>
              {(["email", "telephone"] as const).map((k) => (
                <div key={k} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ ...t, fontSize: "16px", fontWeight: 300, color: "#fff", textAlign: "center" }}>
                    {k === "email" ? "Email*" : "Téléphone"}
                  </label>
                  <input
                    type={k === "email" ? "email" : "tel"}
                    placeholder={k === "email" ? "Email" : "Téléphone"}
                    value={form[k]}
                    onChange={set(k)}
                    style={{ border: "1px solid #fff", background: "none", color: "#fff", padding: "12px 16px", ...t, fontSize: "12px", outline: "none" }}
                  />
                </div>
              ))}
            </div>
            {/* Message */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ ...t, fontSize: "16px", fontWeight: 300, color: "#fff", textAlign: "center" }}>Votre projet*</label>
              <textarea
                placeholder="Votre projet"
                value={form.projet}
                onChange={set("projet")}
                rows={5}
                style={{ border: "1px solid #fff", background: "none", color: "#fff", padding: "12px 16px", ...t, fontSize: "12px", outline: "none", resize: "vertical", height: "150px" }}
              />
            </div>
          </div>
          <button style={{ ...h, fontSize: "14px", fontWeight: 600, color: "#fff", background: "none", border: "none", borderBottom: "1px solid #fff", cursor: "pointer", alignSelf: "flex-start", paddingBottom: "2px" }}>
            Envoyer votre message
          </button>
        </div>
      </section>

      <SocialSection variant="dark" />
      <ChiffresSection variant="dark" />
    </div>
  );
}
