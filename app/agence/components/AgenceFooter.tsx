"use client";
import Link from "next/link";
import { useState } from "react";

const h: React.CSSProperties = { fontFamily: 'var(--Heading, "Armin Soft")' };
const t: React.CSSProperties = { fontFamily: 'var(--Text, "Armin Soft")' };

const stats = [
  { n: "2023", l: "Création de l'agence" },
  { n: "2", l: "Membres de l'agence" },
  { n: "4", l: "Projets réalisés" },
  { n: "1200", l: "Personnes qui nous suivent" },
];

const aProposLinks = ["Qui sommes-nous ?", "Nos évènements", "Local talent", "Partenariat", "Nous suivre"];
const infosLinks = ["Articles", "Contact", "Nos services", "Le manifeste", "Confidentialité"];

export default function AgenceFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ background: "#000", color: "#fff" }}>
      {/* Stats bar */}
      <div style={{
        borderTop: "1px solid #fff",
        borderBottom: "1px solid #fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px 90px",
        flexWrap: "wrap",
        gap: "24px",
      }}>
        {stats.map(({ n, l }) => (
          <div key={n} style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
            <span style={{ ...h, fontSize: "32px", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase" }}>{n}</span>
            <span style={{ ...t, fontSize: "16px", fontWeight: 300, lineHeight: "normal" }}>{l}</span>
          </div>
        ))}
      </div>

      {/* Main footer */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px", paddingTop: "40px" }}>
        {/* Logo */}
        <p style={{ ...h, fontSize: "clamp(18px, 4.5vw, 56px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", textAlign: "center", padding: "0 24px" }}>
          LOCTA AGENCE WEB LYONNAISE
        </p>

        {/* 3-column links */}
        <div style={{ display: "flex", width: "100%", padding: "0 40px", gap: "24px", flexWrap: "wrap", alignItems: "flex-start" }}>
          {/* Newsletter */}
          <div style={{ flex: 1, minWidth: "200px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <p style={{ ...h, fontSize: "16px", fontWeight: 600, color: "#fff" }}>Newsletter</p>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}>
              <div style={{ borderBottom: "1px solid #fff", paddingBottom: "6px", paddingLeft: "4px", width: "180px" }}>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ background: "none", border: "none", outline: "none", color: "#fff", ...h, fontSize: "14px", fontWeight: 300, width: "100%" }}
                />
              </div>
              <button style={{ ...h, fontSize: "14px", fontWeight: 600, color: "#fff", background: "none", border: "none", borderBottom: "1px solid #fff", cursor: "pointer", paddingBottom: "6px", whiteSpace: "nowrap" }}>
                M'inscrire
              </button>
            </div>
            <p style={{ ...h, fontSize: "14px", fontWeight: 300, color: "#fff", textAlign: "center" }}>
              Pour ne rien louper de l'actu Lyonnaise
            </p>
          </div>

          {/* À propos */}
          <div style={{ flex: 1, minWidth: "150px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <p style={{ ...h, fontSize: "16px", fontWeight: 600, color: "#fff" }}>À propos</p>
            {aProposLinks.map((l) => (
              <Link key={l} href="#" style={{ ...h, fontSize: "14px", fontWeight: 300, color: "#fff", textDecoration: "none" }}>{l}</Link>
            ))}
          </div>

          {/* Infos */}
          <div style={{ flex: 1, minWidth: "150px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <p style={{ ...h, fontSize: "16px", fontWeight: 600, color: "#fff" }}>Infos</p>
            {infosLinks.map((l) => (
              <Link key={l} href="#" style={{ ...h, fontSize: "14px", fontWeight: 300, color: "#fff", textDecoration: "none" }}>{l}</Link>
            ))}
          </div>
        </div>

        <p style={{ ...h, fontSize: "14px", fontWeight: 300, color: "#fff" }}>©Locta</p>

        {/* Découvrir le média CTA */}
        <Link
          href="/media"
          style={{ display: "flex", width: "100%", background: "#fff", padding: "12px", justifyContent: "center", alignItems: "center", textDecoration: "none" }}
        >
          <span style={{ ...h, fontSize: "14px", fontWeight: 600, color: "#000", borderBottom: "1px solid #000" }}>
            Découvrir le média →
          </span>
        </Link>
      </div>
    </footer>
  );
}
