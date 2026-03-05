"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";

const bannerMessages = [
  "Agence créative",
  "Made in Lyon",
  "Média indépendant",
];

const bannerStyle: React.CSSProperties = {
  fontFamily: 'var(--Text, "Armin Soft")',
  fontSize: "var(--Text-Tiny, 12px)",
  fontWeight: 300,
  lineHeight: "normal",
};

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--Heading, "Armin Soft")',
  fontSize: "14px",
  fontWeight: 300,
  lineHeight: "normal",
  padding: "3px 6px",
};

export default function Header() {
  const pathname = usePathname() || "/";
  const isAgence = pathname.startsWith("/agence");

  const mediaRef = useRef<HTMLAnchorElement>(null);
  const agenceRef = useRef<HTMLAnchorElement>(null);
  const [pill, setPill] = useState({ left: 4, width: 0 });

  useEffect(() => {
    const el = isAgence ? agenceRef.current : mediaRef.current;
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [isAgence]);

  const [msgIndex, setMsgIndex] = useState(0);
  const [animClass, setAnimClass] = useState("banner-enter");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimClass("banner-exit");
      setTimeout(() => {
        setMsgIndex((i) => (i + 1) % bannerMessages.length);
        setAnimClass("banner-enter");
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const mediaMenu = [
    { label: "Évènements", href: "/media/evenement" },
    { label: "Patenariats", href: "/media/evenement" },
    { label: "Local talent", href: "/media/local-talent" },
    { label: "Articles", href: "/media/articles" },
    { label: "À propos", href: "/media/a-propos" },
    { label: "Contact", href: "/media/contact" },
  ];

  const agenceMenu = [
    { label: "Offres", href: "/agence/offres" },
    { label: "Équipe", href: "/agence/equipe" },
    { label: "Projets", href: "/agence/projets" },
    { label: "Contact", href: "/agence/contact" },
  ];

  const activeMenu = isAgence ? agenceMenu : mediaMenu;

  return (
    <header className="sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-black flex items-center justify-center overflow-hidden" style={{ height: "45px" }}>
        <span key={msgIndex} className={animClass} style={bannerStyle}>
          {bannerMessages[msgIndex]}
        </span>
      </div>

      {/* Main nav */}
      <nav className="bg-white w-full px-10 flex items-center justify-between" style={{ height: "70px" }}>
        {/* Left: logo + section pills */}
        <div className="flex items-center gap-3">
          <Link href="/" style={{ color: "var(--text, #000)", fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "20px", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase" }}>
            LOCTA
          </Link>
          <div className="relative flex items-center bg-black ml-1" style={{ padding: "4px", gap: "0px", borderRadius: "30px" }}>
            {/* Sliding white pill */}
            <div
              className="absolute bg-white transition-all duration-300 ease-in-out"
              style={{
                borderRadius: "30px",
                top: "4px",
                bottom: "4px",
                left: pill.left,
                width: pill.width,
              }}
            />
            <Link
              ref={mediaRef}
              href="/media"
              className={`relative z-10 transition-colors duration-300 ${isAgence ? "text-white" : "text-black"}`}
              style={linkStyle}
            >
              MEDIA
            </Link>
            <Link
              ref={agenceRef}
              href="/agence"
              className={`relative z-10 transition-colors duration-300 ${isAgence ? "text-black" : "text-white"}`}
              style={linkStyle}
            >
              AGENCE
            </Link>
          </div>
        </div>

        {/* Right: nav links */}
        <ul className="flex gap-7 text-sm text-neutral-800 items-center">
          {activeMenu.map((item) => (
            <li key={`${item.href}-${item.label}`}>
              <Link
                href={item.href}
                className={`hover:text-black transition ${
                  item.label === "Contact" ? "font-bold" : "font-normal"
                } ${pathname === item.href ? "underline underline-offset-4" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
