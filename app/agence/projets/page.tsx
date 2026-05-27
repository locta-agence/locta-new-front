"use client";
import Link from "next/link";
import { useState } from "react";
import SocialSection from "../../components/SocialSection";
import ChiffresSection from "../../components/ChiffresSection";

const img1 = "https://www.figma.com/api/mcp/asset/d4db4cd7-86ae-4e25-8d0d-0ce7bd5038aa";
const img2 = "https://www.figma.com/api/mcp/asset/a10f70eb-abe2-4da2-bd0f-0a1d7baf3b6c";
const img3 = "https://www.figma.com/api/mcp/asset/61767fe7-d320-4088-82a3-de5e2d557855";
const img4 = "https://www.figma.com/api/mcp/asset/b4e50717-7f92-4c71-91cc-a260f504d97c";
const img5 = "https://www.figma.com/api/mcp/asset/2d9c99c6-cf4c-401b-b95c-7d824441b380";
const img6 = "https://www.figma.com/api/mcp/asset/bc244157-b99a-4bfc-b536-397d4af62a16";

const h: React.CSSProperties = { fontFamily: 'var(--Heading, "Armin Soft")' };
const t: React.CSSProperties = { fontFamily: 'var(--Text, "Armin Soft")' };

const filters = ["Tout voir", "Web", "Direction artistique", "Captation photo et vidéo", "Communication", "Reportage évènement"];

type Project = { img: string; label: string; category: string; tall?: boolean };

const projects: Project[] = [
  { img: img1, label: "Nom du talent", category: "Web", tall: true },
  { img: img2, label: "Nom du talent", category: "Direction artistique", tall: true },
  { img: img3, label: "Nom du talent", category: "Captation photo et vidéo" },
  { img: img4, label: "Nom du talent", category: "Communication" },
  { img: img5, label: "Nom du talent", category: "Reportage évènement" },
  { img: img6, label: "Nom du talent", category: "Web" },
  { img: img1, label: "Nom du talent", category: "Direction artistique", tall: true },
  { img: img2, label: "Nom du talent", category: "Captation photo et vidéo" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: "1 0 280px", minWidth: 0 }}>
      <Link
        href={`/agence/projets/${project.label.toLowerCase().replace(/\s+/g, "-")}`}
        style={{ textDecoration: "none", display: "block", position: "relative", overflow: "hidden", height: project.tall ? "617px" : "303px" }}
      >
        <img src={project.img} alt={project.label} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%)" }} />
        <div style={{ position: "absolute", top: "20px", left: "20px", border: "1px solid #fff", padding: "2px 6px" }}>
          <span style={{ ...t, fontSize: "12px", fontWeight: 300, color: "#fff", textTransform: "uppercase" }}>{project.category}</span>
        </div>
      </Link>
      <p style={{ ...t, fontSize: "12px", fontWeight: 300, color: "#fff" }}>{project.label}</p>
    </div>
  );
}

export default function ProjetsPage() {
  const [active, setActive] = useState("Tout voir");

  const filtered = active === "Tout voir"
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(active.toLowerCase().split(" ")[0]));

  return (
    <div style={{ background: "#000", color: "#fff" }}>
      {/* ── Header ── */}
      <section style={{ padding: "60px 24px 40px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
            <h1 style={{ ...h, fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#fff" }}>
              Nos projets
            </h1>
            <p style={{ ...t, fontSize: "14px", fontWeight: 300, lineHeight: "normal", color: "#fff", maxWidth: "420px" }}>
              Lorem ipsum dolor sit amet consectetur. Id sit tellus ultrices magna. Sagittis volutpat non nec senectus odio.
            </p>
          </div>
          {/* Filters */}
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  ...h,
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "100%",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: "none",
                  border: "none",
                  borderBottom: active === f ? "1px solid #fff" : "none",
                  cursor: "pointer",
                  paddingBottom: "2px",
                  opacity: active === f ? 1 : 0.5,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects grid ── */}
      <section style={{ padding: "0 24px 32px" }}>
        {/* Row 1 — 2 tall cards */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "flex-end", flexWrap: "wrap" }}>
          {filtered.slice(0, 2).map((p, i) => (
            <ProjectCard key={i} project={{ ...p, tall: true }} />
          ))}
        </div>
        {/* Row 2 — mixed */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "1 0 280px" }} /> {/* spacer */}
          {filtered.slice(2, 3).map((p, i) => <ProjectCard key={i} project={p} />)}
          <div style={{ flex: "1 0 280px" }} />
          {filtered.slice(3, 4).map((p, i) => <ProjectCard key={i} project={p} />)}
          <div style={{ flex: "1 0 280px" }} />
        </div>
        {/* Row 3 — 2 tall + 2 */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "flex-end", flexWrap: "wrap" }}>
          {filtered.slice(4, 6).map((p, i) => (
            <ProjectCard key={i} project={{ ...p, tall: true }} />
          ))}
        </div>
        {/* Row 4 */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "1 0 280px" }} />
          {filtered.slice(6, 7).map((p, i) => <ProjectCard key={i} project={p} />)}
          <div style={{ flex: "1 0 280px" }} />
          {filtered.slice(7, 8).map((p, i) => <ProjectCard key={i} project={p} />)}
          <div style={{ flex: "1 0 280px" }} />
        </div>
      </section>

      {/* ── Pagination ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", padding: "40px 90px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {[1, 2, 3, 4, "...", 8].map((n, i) => (
            <div key={i} style={{ width: "30px", borderBottom: "1px solid #fff", paddingBottom: "4px", textAlign: "center", opacity: i === 0 ? 1 : 0.3 }}>
              <span style={{ ...h, fontSize: "16px", fontWeight: i === 0 ? 600 : 300, color: "#fff" }}>{n}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <span style={{ ...h, fontSize: "18px", fontWeight: 600, color: "#fff", textTransform: "uppercase", opacity: 0.4 }}>Précédent</span>
          <div style={{ borderBottom: "1px solid #fff", paddingBottom: "2px" }}>
            <span style={{ ...h, fontSize: "18px", fontWeight: 600, color: "#fff", textTransform: "uppercase" }}>Suivant</span>
          </div>
        </div>
      </div>

      <SocialSection variant="dark" />
      <ChiffresSection variant="dark" />
    </div>
  );
}
