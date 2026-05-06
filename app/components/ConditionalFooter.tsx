"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

/**
 * Masque le footer global sur les pages détail événement : la maquette inclut un pied de page dédié.
 */
export default function ConditionalFooter() {
  const pathname = usePathname() || "/";
  const isEventDetail =
    pathname.startsWith("/media/evenement/") && pathname !== "/media/evenement";
  const hasPageFooter = pathname === "/media/local-talent";

  if (isEventDetail || hasPageFooter) {
    return null;
  }

  return <Footer />;
}
