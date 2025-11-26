"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoSrc from '../../public/logo-white.svg';

export default function Header() {
  const pathname = usePathname() || "/";
  const isMedia = pathname.startsWith("/media");
  const isAgence = pathname.startsWith("/agence");

  const mediaMenu = [
    { label: "Evenement", href: "/media/evenement" },
    { label: "Local Talent", href: "/media/local-talent" },
    { label: "Articles", href: "/media/articles" },
    { label: "A propos", href: "/media/a-propos" },
    { label: "Contact", href: "/media/contact" },
  ];

  const agenceMenu = [
    { label: "Offres", href: "/agence/offres" },
    { label: "Équipe", href: "/agence/equipe" },
    { label: "Projets", href: "/agence/projets" },
    { label: "Contact", href: "/agence/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-800">
      <nav className="w-full mx-auto px-16 py-4 flex items-center justify-between">
        <ul className="flex gap-4 text-md font-semibold text-neutral-800 justify-center items-center">
          <Link href="/" className="flex items-center">
            <Image className="invert" width={30} alt="logo" src={logoSrc}/>
          </Link>
          <li>
            <Link href="/media" className={`hover:text-black transition ${isMedia ? "underline" : ""}`}>MEDIA</Link>
          </li>
          <li><span className="text-neutral-500">|</span></li>
          <li>
            <Link href="/agence" className={`hover:text-black transition ${isAgence ? "underline" : ""}`}>AGENCE</Link>
          </li>
        </ul>

        <ul className="flex gap-8 text-sm font-medium text-neutral-800">
          {isMedia && mediaMenu.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-black transition">{item.label}</Link>
            </li>
          ))}

          {isAgence && agenceMenu.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-black transition">{item.label}</Link>
            </li>
          ))}

          {/* Si aucune section active, on peut afficher un menu par défaut (facultatif) */}
          {!isMedia && !isAgence && (
            <>
              <li><Link href="/media/evenement" className="hover:text-black transition">Evenement</Link></li>
              <li><Link href="/media/local-talent" className="hover:text-black transition">Local Talent</Link></li>
              <li><Link href="/media/articles" className="hover:text-black transition">Articles</Link></li>
              <li><Link href="/media/a-propos" className="hover:text-black transition">A propos</Link></li>
              <li><Link href="/media/contact" className="hover:text-black transition">Contact</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
