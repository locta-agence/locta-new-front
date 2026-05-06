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
  fontSize: "12px",
  fontWeight: 300,
  lineHeight: "normal",
};

const toggleLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--Heading, "Armin Soft")',
  fontSize: "13px",
  fontWeight: 400,
  lineHeight: "normal",
  padding: "4px 14px",
  whiteSpace: "nowrap",
};

const navLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--Heading, "Armin Soft")',
  fontSize: "14px",
  fontWeight: 300,
  lineHeight: "normal",
};

const mediaMenu = [
  { label: "Évènements", href: "/media/evenement" },
//  { label: "Partenariats", href: "/media/partenariat" },
  { label: "Local talent", href: "/media/local-talent" },
//  { label: "Articles", href: "/media/articles" },
  { label: "À propos", href: "/media/a-propos" },
  { label: "Contact", href: "/media/contact" },
];

const agenceMenu = [
  { label: "Nos projets", href: "/agence/projets" },
  { label: "Expertises", href: "/agence/expertises" },
  { label: "À propos", href: "/agence/a-propos" },
  { label: "Contact", href: "/agence/contact" },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const isAgence = pathname.startsWith("/agence");

  // Refs for mobile fixed toggle
  const mediaRef = useRef<HTMLAnchorElement>(null);
  const agenceRef = useRef<HTMLAnchorElement>(null);
  const [pill, setPill] = useState({ left: 4, width: 0 });

  // Refs for desktop nav toggle
  const mediaRefDt = useRef<HTMLAnchorElement>(null);
  const agenceRefDt = useRef<HTMLAnchorElement>(null);
  const [pillDt, setPillDt] = useState({ left: 4, width: 0 });

  useEffect(() => {
    const el = isAgence ? agenceRef.current : mediaRef.current;
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [isAgence]);

  useEffect(() => {
    const el = isAgence ? agenceRefDt.current : mediaRefDt.current;
    if (el) setPillDt({ left: el.offsetLeft, width: el.offsetWidth });
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

  const [menuOpen, setMenuOpen] = useState(false);

  const activeMenu = isAgence ? agenceMenu : mediaMenu;
  const contactItem = activeMenu.find((i) => i.label === "Contact");
  const navItems = activeMenu.filter((i) => i.label !== "Contact");

  // MEDIA : banner noir / nav blanc  — AGENCE : banner blanc / nav noir
  const bannerBg = isAgence ? "#fff" : "#000";
  const bannerFg = isAgence ? "#000" : "#fff";
  const navBg = isAgence ? "#000" : "#fff";
  const navFg = isAgence ? "#fff" : "#000";

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Banner row */}
        <div
          className="flex items-center justify-center overflow-hidden"
          style={{ height: "30px", background: bannerBg }}
        >
          <span key={msgIndex} className={animClass} style={{ ...bannerStyle, color: bannerFg }}>
            {bannerMessages[msgIndex]}
          </span>
        </div>

        {/* Nav row */}
        <nav
          className="relative flex items-center px-6 md:px-10"
          style={{ height: "60px", background: navBg }}
        >
          {/* Mobile: Menu button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            style={{ ...navLinkStyle, color: navFg, background: "none", border: "none", cursor: "pointer" }}
          >
            Menu
          </button>

          {/* Desktop: LOCTA + toggle on left */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/"
              style={{
                fontFamily: 'var(--Heading, "Armin Soft")',
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "100%",
                textTransform: "uppercase",
                color: navFg,
              }}
            >
              LOCTA
            </Link>
            <div className="relative flex items-center" style={{ background: isAgence ? "#fff" : "#000", border: "none", borderRadius: "30px", padding: "4px" }}>
              <div
                className="absolute transition-all duration-300 ease-in-out"
                style={{ background: isAgence ? "#000" : "#fff", borderRadius: "30px", top: "4px", bottom: "4px", left: pillDt.left, width: pillDt.width }}
              />
              <Link ref={mediaRefDt} href="/media" className="relative z-10 transition-colors duration-300" style={{ ...toggleLinkStyle, color: "#000" }}>MEDIA</Link>
              <Link ref={agenceRefDt} href="/agence" className="relative z-10 transition-colors duration-300" style={{ ...toggleLinkStyle, color: "#fff" }}>AGENCE</Link>
            </div>
          </div>

          {/* Desktop: nav links right */}
          <ul className="hidden md:flex items-center gap-7 ml-auto">
            {activeMenu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    ...navLinkStyle,
                    color: navFg,
                    fontWeight: item.label === "Contact" ? 600 : 300,
                    textDecoration: pathname === item.href ? "underline" : "none",
                    textUnderlineOffset: "4px",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile: LOCTA centered */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 md:hidden"
            style={{
              fontFamily: 'var(--Heading, "Armin Soft")',
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "100%",
              textTransform: "uppercase",
              color: navFg,
            }}
          >
            LOCTA
          </Link>

          {/* Mobile: Contact right */}
          {contactItem && (
            <div className="md:hidden ml-auto">
              <Link
                href={contactItem.href}
                style={{
                  ...navLinkStyle,
                  fontWeight: 600,
                  color: navFg,
                  textDecoration: pathname === contactItem.href ? "underline" : "none",
                  textUnderlineOffset: "4px",
                }}
              >
                Contact
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Toggle — fixed at bottom, mobile only */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div
          className="relative flex items-center"
          style={{
            background: isAgence ? "#fff" : "#000",
            border: "none",
            borderRadius: "30px",
            padding: "4px",
          }}
        >
          <div
            className="absolute transition-all duration-300 ease-in-out"
            style={{
              background: isAgence ? "#000" : "#fff",
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
            className="relative z-10 transition-colors duration-300"
            style={{ ...toggleLinkStyle, color: "#000" }}
          >
            MEDIA
          </Link>
          <Link
            ref={agenceRef}
            href="/agence"
            className="relative z-10 transition-colors duration-300"
            style={{ ...toggleLinkStyle, color: "#fff" }}
          >
            AGENCE
          </Link>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ background: navBg }}
        >
          {/* Overlay top bar */}
          <div
            className="relative flex items-center px-6"
            style={{ height: "60px", borderBottom: `1px solid ${isAgence ? "#333" : "#e5e5e5"}` }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{ ...navLinkStyle, color: navFg, background: "none", border: "none", cursor: "pointer" }}
            >
              Fermer
            </button>
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--Heading, "Armin Soft")',
                fontSize: "20px",
                fontWeight: 600,
                textTransform: "uppercase",
                color: navFg,
              }}
            >
              LOCTA
            </Link>
            {contactItem && (
              <div className="ml-auto">
                <Link
                  href={contactItem.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ ...navLinkStyle, fontWeight: 600, color: navFg }}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>

          {/* Overlay menu items */}
          <ul className="flex flex-col px-8 pt-12 gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--Heading, "Armin Soft")',
                    fontSize: "32px",
                    fontWeight: 300,
                    color: navFg,
                    textDecoration: pathname === item.href ? "underline" : "none",
                    textUnderlineOffset: "6px",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
