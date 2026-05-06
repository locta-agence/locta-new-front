"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer>
      {/* Main footer body */}
      <div className="bg-white px-10 pt-12 pb-10">
        {/* Big heading */}
        <p
          className="font-semibold uppercase text-black leading-none mb-12 w-full whitespace-nowrap"
          style={{ fontSize: "calc((100vw - 5rem) / 18.5)" }}
        >
          LOCTA MÉDIA INDÉPENDANT LYONNAIS
        </p>

        {/* Three columns */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {/* Newsletter */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold uppercase text-black">Newsletter</p>
            <div className="flex items-end gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="footer-email" className="text-sm font-light text-black">
                  E-mail
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b border-black outline-none bg-transparent text-sm font-light text-black w-44 py-0.5"
                />
              </div>
              <button className="text-sm font-semibold text-black hover:underline underline-offset-4 bg-transparent border-none cursor-pointer whitespace-nowrap p-0">
                M&apos;inscrire
              </button>
            </div>
            <p className="text-[13px] font-light text-black text-center">
              Pour ne rien louper de l&apos;actu Lyonnaise
            </p>
          </div>

          {/* À propos */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold uppercase text-black">À propos</p>
            <ul className="flex flex-col items-center gap-2.5 list-none p-0 m-0">
              {[
                { label: "Qui sommes-nous ?", href: "/media/a-propos" },
                { label: "Nous évènements", href: "/media/evenement" },
                { label: "Local talent", href: "/media/local-talent" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-light text-black no-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold uppercase text-black">Infos</p>
            <ul className="flex flex-col items-center gap-2.5 list-none p-0 m-0">
              {[
                { label: "Articles", href: "/media/articles" },
                { label: "Contact", href: "/media/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-light text-black no-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm font-light text-black text-center">© Locta</p>
      </div>

      {/* Black bar */}
      <div className="bg-black py-5 px-10 flex justify-center items-center">
        <Link href="/agence" className="text-sm font-semibold text-white underline underline-offset-4">
          Découvrir l&apos;agence →
        </Link>
      </div>
    </footer>
  );
}
