"use client";
import { useEffect, useState } from "react";

const stats = [
  { number: "2023", label: "Création de l'agence" },
  { number: "2",    label: "Membres de l'agence" },
  { number: "4",    label: "Projets réalisés" },
  { number: "1200", label: "Personnes qui nous suivent" },
];

const numberStyle: React.CSSProperties = {
  fontFamily: 'var(--Heading, "Armin Soft")',
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "100%",
  textTransform: "uppercase",
  color: "#000",
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--Text, "Armin Soft")',
  fontSize: "16px",
  fontWeight: 300,
  lineHeight: "normal",
  color: "#000",
};

export default function ChiffresSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % stats.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ borderTop: "1px solid #000", borderBottom: "1px solid #000", width: "100%" }}>

      {/* Mobile : un stat à la fois + dots */}
      <div
        className="md:hidden flex flex-col items-center justify-center"
        style={{ gap: "32px", padding: "40px 75px" }}
      >
        <div style={{ display: "flex", gap: "8px", alignItems: "flex-end", textAlign: "center", whiteSpace: "nowrap" }}>
          <p style={numberStyle}>{stats[active].number}</p>
          <p style={labelStyle}>{stats[active].label}</p>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {stats.map((stat, i) => (
            <button
              key={stat.number}
              onClick={() => setActive(i)}
              style={{
                width: "20px",
                height: "2px",
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: "#000",
                opacity: i === active ? 1 : 0.2,
                transition: "opacity 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Desktop : 4 stats réparties sur toute la largeur */}
      <div
        className="hidden md:flex"
        style={{ alignItems: "center", justifyContent: "space-between", padding: "24px 120px" }}
      >
        {stats.map((stat) => (
          <div key={stat.number} style={{ display: "flex", gap: "8px", alignItems: "flex-end", whiteSpace: "nowrap" }}>
            <p style={numberStyle}>{stat.number}</p>
            <p style={labelStyle}>{stat.label}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
