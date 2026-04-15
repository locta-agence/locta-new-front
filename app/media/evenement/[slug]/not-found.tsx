import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-6 py-24 text-center">
      <h1 className="text-2xl font-semibold uppercase tracking-tight" style={{ fontFamily: 'var(--Heading, "Armin Soft")' }}>
        Événement introuvable
      </h1>
      <p className="mt-4 text-sm text-black/60">
        Ce contenu n’existe pas ou a été déplacé.
      </p>
      <Link
        href="/media/evenement"
        className="mt-8 inline-block text-sm font-semibold uppercase underline underline-offset-4"
        style={{ fontFamily: 'var(--Heading, "Armin Soft")' }}
      >
        Retour aux événements
      </Link>
    </div>
  );
}
