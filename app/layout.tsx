import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import ConditionalFooter from "./components/ConditionalFooter";

export const metadata: Metadata = {
  title: "Locta",
  description: "Locta agency website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
