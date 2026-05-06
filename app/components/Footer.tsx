"use client";
import Link from "next/link";
import { useState } from "react";
import StatsSection from "./StatsSection";

const apropos = [
  { label: "Qui sommes-nous ?", href: "/media/a-propos" },
  { label: "Nos évènements", href: "/media/evenement" },
  { label: "Local talent", href: "/media/local-talent" },
];

const infos = [
  { label: "Articles", href: "/media/articles" },
  { label: "Contact", href: "/media/contact" },
];

export default function Footer() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (s: string) => setOpen(open === s ? null : s);

  return (
    <footer>
      <StatsSection />
      <div className="bg-white px-6 md:px-10 pt-8 md:pt-12 pb-8 md:pb-10">
        <p
          className="font-semibold uppercase text-black leading-none mb-8 md:mb-12 w-full whitespace-nowrap text-center"
          style={{ fontSize: "calc((100vw - 5rem) / 18.5)" }}
        >
          LOCTA MÉDIA INDÉPENDANT LYONNAIS
        </p>

        <div className="md:hidden flex flex-col">
          <div className="border-b border-black pb-6">
            <p className="text-base font-semibold text-black mb-4">Newsletter</p>
            <div className="flex items-end gap-4 mb-3">
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor="newsletter-mobile" className="text-sm font-light text-black">E-mail</label>
                <input id="newsletter-mobile" type="email" className="border-b border-black outline-none bg-transparent text-sm font-light text-black w-full py-0.5" />
              </div>
              <button className="text-sm font-semibold text-black hover:underline underline-offset-4 bg-transparent border-none cursor-pointer whitespace-nowrap p-0 pb-0.5">M&apos;inscrire</button>
            </div>
            <p className="text-sm font-light text-black">Pour ne rien louper de l&apos;actu Lyonnaise</p>
          </div>

          {[
            { key: "apropos", title: "À propos", links: apropos },
            { key: "infos", title: "Infos", links: infos },
          ].map(({ key, title, links }) => (
            <div key={key} className="border-b border-black">
              <button onClick={() => toggle(key)} className="w-full flex justify-between items-center py-4 bg-transparent border-none cursor-pointer">
                <span className="text-base font-semibold text-black">{title}</span>
                <span className="text-xl font-light text-black">{open === key ? "−" : "+"}</span>
              </button>
              {open === key && (
                <ul className="flex flex-col gap-3 pb-4 list-none p-0 m-0">
                  {links.map((l) => (
                    <li key={l.href}><Link href={l.href} className="text-sm font-light text-black no-underline visited:text-black">{l.label}</Link></li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <p className="text-sm font-light text-black text-center mt-8 mb-2">©Locta</p>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold uppercase text-black">Newsletter</p>
            <div className="flex items-end gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="newsletter" className="text-sm font-light text-black">E-mail</label>
                <input id="newsletter" type="email" className="border-b border-black outline-none bg-transparent text-sm font-light text-black w-44 py-0.5" />
              </div>
              <button className="text-sm font-semibold text-black hover:underline underline-offset-4 bg-transparent border-none cursor-pointer whitespace-nowrap p-0">M&apos;inscrire</button>
            </div>
            <p className="text-[13px] font-light text-black text-center">Pour ne rien louper de l&apos;actu Lyonnaise</p>
          </div>

          {[
            { title: "À propos", links: apropos },
            { title: "Infos", links: infos },
          ].map(({ title, links }) => (
            <div key={title} className="flex flex-col items-center gap-4">
              <p className="text-sm font-semibold uppercase text-black">{title}</p>
              <ul className="flex flex-col items-center gap-2.5 list-none p-0 m-0">
                {links.map((l) => (
                  <li key={l.href}><Link href={l.href} className="text-sm font-light text-black no-underline visited:text-black">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="hidden md:block text-sm font-light text-black text-center">©Locta</p>
      </div>

      <div className="bg-black py-5 px-10 flex justify-center items-center">
        <Link href="/agence" className="text-sm font-semibold text-white hover:underline underline-offset-4 visited:text-white">Découvrir l&apos;agence →</Link>
      </div>
    </footer>
  );
}
