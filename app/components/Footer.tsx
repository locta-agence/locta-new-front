"use client";
import Link from "next/link";
import { useState } from "react";
import ChiffresSection from "./ChiffresSection";

const apropos = [
  { label: "Qui sommes-nous ?", href: "/media/a-propos" },
  { label: "Nos évènements", href: "/media/evenement" },
  { label: "Local talent", href: "/media/local-talent" },
];

const infos = [
  { label: "Articles", href: "/media/articles" },
  { label: "Contact", href: "/media/contact" },
];

function AccordionRow({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between bg-transparent cursor-pointer"
        style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "16px", fontWeight: 600, color: "#000", border: "none", borderTop: "1px solid #000", paddingTop: "12px", paddingBottom: "12px" }}
      >
        <span>{label}</span>
        <span style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "24px", fontWeight: 300, lineHeight: 1 }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="pb-3 flex flex-col gap-2 pl-1">
          {children}
        </div>
      )}
      <div style={{ height: "1px", background: "#000", width: "100%" }} />
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer>
      <ChiffresSection />
      {/* Mobile footer */}
      <div className="md:hidden bg-white px-4 pt-10 pb-6 flex flex-col gap-8">
        <p
          className="font-semibold uppercase text-black leading-none w-full whitespace-nowrap overflow-hidden"
          style={{ fontSize: "calc((100vw - 2rem) / 18.5)", fontFamily: 'var(--Heading, "Armin Soft")' }}
        >
          LOCTA MÉDIA INDÉPENDANT LYONNAIS
        </p>

        <div className="flex flex-col gap-3 w-full">
          <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "16px", fontWeight: 600, color: "#000" }}>
            Newsletter
          </p>
          <div className="flex items-end gap-3 pb-2 w-full">
            <div className="flex-1 border-b border-black pb-1.5 px-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full bg-transparent outline-none"
                style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "14px", fontWeight: 300, color: "#000" }}
              />
            </div>
            <button
              className="bg-transparent cursor-pointer"
              style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "14px", fontWeight: 600, color: "#000", border: "none", borderBottom: "1px solid #000", paddingBottom: "4px", whiteSpace: "nowrap" }}
            >
              M&apos;inscrire
            </button>
          </div>
          <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "14px", fontWeight: 300, color: "#000" }}>
            Pour ne rien louper de l&apos;actu Lyonnaise
          </p>
        </div>

        <div className="w-full flex flex-col">
          <AccordionRow label="À propos">
            {apropos.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "14px", fontWeight: 300, color: "#000", textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ))}
          </AccordionRow>
          <AccordionRow label="Infos">
            {infos.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "14px", fontWeight: 300, color: "#000", textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ))}
          </AccordionRow>
        </div>

        <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "14px", fontWeight: 300, color: "#000", textAlign: "center" }}>
          ©Locta
        </p>
      </div>

      {/* Desktop footer */}
      <div className="hidden md:block bg-white px-10 pt-12 pb-10">
        <p
          className="font-semibold uppercase text-black leading-none mb-12 w-full whitespace-nowrap"
          style={{ fontSize: "calc((100vw - 5rem) / 18.5)", fontFamily: 'var(--Heading, "Armin Soft")' }}
        >
          LOCTA MÉDIA INDÉPENDANT LYONNAIS
        </p>

        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold uppercase text-black">Newsletter</p>
            <div className="flex items-end gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="newsletter" className="text-sm font-light text-black">E-mail</label>
                <input
                  id="newsletter"
                  type="email"
                  className="border-b border-black outline-none bg-transparent text-sm font-light text-black w-44 py-0.5"
                />
              </div>
              <button className="text-sm font-semibold text-black hover:underline underline-offset-4 bg-transparent border-none cursor-pointer whitespace-nowrap p-0">
                M&apos;inscrire
              </button>
            </div>
            <p className="text-[13px] font-light text-black text-center">Pour ne rien louper de l&apos;actu Lyonnaise</p>
          </div>

          {[
            { title: "À propos", links: apropos },
            { title: "Infos",    links: infos },
          ].map(({ title, links }) => (
            <div key={title} className="flex flex-col items-center gap-4">
              <p className="text-sm font-semibold uppercase text-black">{title}</p>
              <ul className="flex flex-col items-center gap-2.5 list-none p-0 m-0">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm font-light text-black no-underline visited:text-black">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-sm font-light text-black text-center">©Locta</p>
      </div>

      <div className="bg-black py-5 px-10 flex justify-center items-center">
        <Link href="/agence" className="text-sm font-semibold text-white hover:underline underline-offset-4 visited:text-white">
          Découvrir l&apos;agence →
        </Link>
      </div>
    </footer>
  );
}
