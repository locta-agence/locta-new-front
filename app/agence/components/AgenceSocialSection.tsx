"use client";
import { useRef, useState } from "react";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ width: 16, height: 16, flexShrink: 0 }}>
      <path d="M8 1.44C10.14 1.44 10.39 1.45 11.24 1.49C12.01 1.52 12.44 1.65 12.72 1.76C13.1 1.9 13.36 2.08 13.64 2.36C13.92 2.64 14.1 2.91 14.24 3.28C14.35 3.56 14.48 3.99 14.52 4.77C14.56 5.62 14.56 5.87 14.56 8C14.56 10.14 14.56 10.4 14.52 11.24C14.48 12.02 14.35 12.45 14.24 12.73C14.1 13.1 13.92 13.37 13.64 13.65C13.36 13.93 13.1 14.1 12.72 14.25C12.44 14.36 12.02 14.49 11.24 14.52C10.39 14.56 10.14 14.57 8 14.57C5.86 14.57 5.61 14.56 4.76 14.52C3.99 14.49 3.56 14.36 3.28 14.25C2.9 14.11 2.64 13.93 2.36 13.65C2.08 13.37 1.9 13.1 1.76 12.73C1.65 12.45 1.52 12.03 1.48 11.24C1.44 10.4 1.44 10.14 1.44 8C1.44 5.87 1.44 5.62 1.48 4.77C1.52 3.99 1.65 3.56 1.76 3.28C1.9 2.91 2.08 2.64 2.36 2.36C2.64 2.08 2.9 1.91 3.28 1.76C3.56 1.65 3.98 1.52 4.76 1.49C5.61 1.45 5.86 1.44 8 1.44ZM8 0C5.83 0 5.56 0.01 4.7 0.05C3.85 0.09 3.27 0.22 2.76 0.42C2.23 0.62 1.78 0.9 1.34 1.34C0.89 1.78 0.62 2.23 0.42 2.76C0.22 3.27 0.09 3.85 0.05 4.7C0.01 5.56 0 5.83 0 8C0 10.17 0.01 10.45 0.05 11.3C0.09 12.15 0.22 12.73 0.42 13.24C0.62 13.77 0.9 14.22 1.34 14.66C1.78 15.11 2.23 15.38 2.76 15.58C3.27 15.78 3.85 15.91 4.7 15.95C5.56 15.99 5.83 16 8 16C10.17 16 10.45 15.99 11.3 15.95C12.15 15.91 12.73 15.78 13.24 15.58C13.77 15.38 14.22 15.1 14.66 14.66C15.11 14.22 15.38 13.77 15.58 13.24C15.78 12.73 15.91 12.15 15.95 11.3C15.99 10.45 16 10.17 16 8C16 5.83 15.99 5.56 15.95 4.7C15.91 3.85 15.78 3.27 15.58 2.76C15.38 2.23 15.1 1.78 14.66 1.34C14.22 0.89 13.77 0.62 13.24 0.42C12.73 0.22 12.15 0.09 11.3 0.05C10.45 0.01 10.17 0 8 0Z" fill="white"/>
      <path d="M8 3.89C5.73 3.89 3.89 5.74 3.89 8C3.89 10.28 5.73 12.12 8 12.12C10.27 12.12 12.11 10.28 12.11 8C12.11 5.74 10.27 3.89 8 3.89ZM8 10.68C6.52 10.68 5.33 9.48 5.33 8C5.33 6.53 6.52 5.34 8 5.34C9.48 5.34 10.67 6.53 10.67 8C10.67 9.48 9.48 10.68 8 10.68Z" fill="white"/>
      <path d="M12.27 4.69C12.8 4.69 13.23 4.26 13.23 3.73C13.23 3.2 12.8 2.77 12.27 2.77C11.74 2.77 11.31 3.2 11.31 3.73C11.31 4.26 11.74 4.69 12.27 4.69Z" fill="white"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" style={{ width: 14, height: 16, flexShrink: 0 }}>
      <path d="M13.69 6.44C13.57 6.45 13.43 6.45 13.31 6.44C11.86 6.44 10.52 5.72 9.73 4.51V11.14C9.73 13.82 7.55 16 4.86 16C2.18 16 0 13.82 0 11.14C0 8.45 2.18 6.27 4.86 6.27H5.19V8.7C3.84 8.48 2.56 9.4 2.35 10.76C2.13 12.11 3.05 13.38 4.41 13.6C4.51 13.61 4.6 13.63 4.7 13.63H4.9C6.27 13.63 7.4 12.54 7.45 11.17L7.49 0H9.78C10 2.05 11.66 3.65 13.72 3.8L13.69 3.78V6.44Z" fill="white"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ width: 16, height: 16, flexShrink: 0 }}>
      <path d="M3.58 16H0.26V5.31H3.58V16ZM1.92 3.85C0.86 3.85 0 2.99 0 1.93C0 0.86 0.86 0 1.92 0C2.99 0 3.85 0.86 3.85 1.93C3.85 2.99 2.98 3.85 1.92 3.85ZM16 16H12.69V10.8C12.69 9.56 12.67 7.97 10.96 7.97C9.25 7.97 8.97 9.32 8.97 10.71V16H5.66V5.31H8.84V6.77H8.88C9.32 5.94 10.4 5.05 12.02 5.05C15.38 5.05 16 7.27 16 10.14V16Z" fill="white"/>
    </svg>
  );
}

const slides = [
  { icon: <InstagramIcon />, handle: "@LO.CTA", bg: "url(/images/img-21.png) lightgray center/cover no-repeat" },
  { icon: <LinkedInIcon />, handle: "LOCTA", bg: "url(/images/source_imgi_69_442171572_983153753516259_113050789989027832_n.jpg) lightgray center/cover no-repeat" },
  { icon: <TikTokIcon />, handle: "LO.CTA", bg: "url(/images/134f8f4eb69029543e7dce8d7ab181d3b98565d6.jpg) lightgray center/cover no-repeat" },
];

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--Heading, "Armin Soft")',
  fontSize: "var(--Heading-H4, 18px)",
  fontWeight: 600,
  lineHeight: "100%",
  textTransform: "uppercase",
  color: "#fff",
  textAlign: "center",
};

export default function AgenceSocialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current.children[0] as HTMLElement;
    if (!el) return;
    const idx = Math.round(scrollRef.current.scrollLeft / (el.offsetWidth + 12));
    setActiveIndex(Math.min(Math.max(idx, 0), slides.length - 1));
  };

  const scrollTo = (i: number) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current.children[0] as HTMLElement;
    if (!el) return;
    scrollRef.current.scrollTo({ left: i * (el.offsetWidth + 12), behavior: "smooth" });
  };

  const bgImages = [
    "url(/images/beeb9bba61fc7e58eeabf6a446cdc5f64b22af7b.png) center/cover no-repeat",
    "url(/images/img-21.png) center/cover no-repeat",
    "url(/images/1bf71634184186caa805f3c32ce4e9bbc631740c.jpg) center/cover no-repeat",
    "url(/images/134f8f4eb69029543e7dce8d7ab181d3b98565d6-1.jpg) center/cover no-repeat",
    "url(/images/source_imgi_69_442171572_983153753516259_113050789989027832_n.jpg) center/cover no-repeat",
    "url(/images/134f8f4eb69029543e7dce8d7ab181d3b98565d6.jpg) center/cover no-repeat",
    "url(/images/img-21.png) center/cover no-repeat",
  ];

  return (
    <>
      {/* Mobile carousel */}
      <div className="md:hidden" style={{ padding: "64px 0 40px", background: "#000" }}>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", gap: "12px", padding: "0 12%", scrollPaddingLeft: "12%" }}
        >
          {slides.map((s, i) => (
            <div key={i} style={{ flex: "0 0 76%", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", height: "25px", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                {s.icon}
                <span style={labelStyle}>{s.handle}</span>
              </div>
              <div style={{ width: "100%", aspectRatio: "169/225", background: s.bg }} />
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "20px" }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => scrollTo(i)} style={{ width: "20px", height: "3px", borderRadius: "2px", border: "none", cursor: "pointer", background: i === activeIndex ? "#fff" : "#444", padding: 0 }} />
          ))}
        </div>
      </div>

      {/* Desktop full layout */}
      <div
        className="hidden md:flex"
        style={{ background: "#000", width: "100%", padding: "120px 40px", flexDirection: "column", justifyContent: "flex-end", alignItems: "stretch", gap: "20px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", alignSelf: "stretch" }}>
          {/* img 1 */}
          <div style={{ flex: "1 0 0", aspectRatio: "270/360", background: bgImages[0] }} />

          {/* Instagram group */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "16px", height: "266px", flexShrink: 0 }}>
            <div style={{ display: "flex", height: "25px", justifyContent: "center", alignItems: "center", gap: "8px" }}>
              <InstagramIcon />
              <span style={labelStyle}>@LO.CTA</span>
            </div>
            <div style={{ width: "200px", height: "266px", background: bgImages[1], flexShrink: 0 }} />
          </div>

          {/* img 2 + 3 */}
          <div style={{ flex: "1 0 0", aspectRatio: "270/360", background: bgImages[2] }} />
          <div style={{ flex: "1 0 0", aspectRatio: "270/360", background: bgImages[3] }} />

          {/* LinkedIn group */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "16px", height: "266px", flexShrink: 0 }}>
            <div style={{ display: "flex", height: "25px", justifyContent: "center", alignItems: "center", gap: "8px" }}>
              <LinkedInIcon />
              <span style={labelStyle}>LOCTA</span>
            </div>
            <div style={{ width: "200px", height: "266px", background: bgImages[4], flexShrink: 0 }} />
          </div>

          {/* img 4 */}
          <div style={{ flex: "1 0 0", aspectRatio: "270/360", background: bgImages[5] }} />

          {/* TikTok group */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "16px", height: "266px", flexShrink: 0 }}>
            <div style={{ display: "flex", height: "25px", justifyContent: "center", alignItems: "center", gap: "8px" }}>
              <TikTokIcon />
              <span style={labelStyle}>LO.CTA</span>
            </div>
            <div style={{ width: "200px", height: "266px", background: bgImages[6], flexShrink: 0 }} />
          </div>

          {/* img 5 + 6 */}
          <div style={{ flex: "1 0 0", aspectRatio: "270/360", background: bgImages[0] }} />
          <div style={{ flex: "1 0 0", aspectRatio: "270/360", background: bgImages[1] }} />
        </div>
      </div>
    </>
  );
}
