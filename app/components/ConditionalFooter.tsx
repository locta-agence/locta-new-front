"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import AgenceFooter from "../agence/components/AgenceFooter";

export default function ConditionalFooter() {
  const pathname = usePathname() || "/";

  // Pages sans footer global
  const isEventDetail =
    pathname.startsWith("/media/evenement/") && pathname !== "/media/evenement";

  if (isEventDetail) return null;

  // Footer noir Agence pour toutes les routes /agence/*
  if (pathname.startsWith("/agence")) {
    return <AgenceFooter />;
  }

  return <Footer />;
}
