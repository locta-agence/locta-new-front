import Image from "next/image";
import { talents } from "@/data/talents";

export default function Page() {
  return (
    <main className="px-8 py-10">
      <h1 className="mb-8 text-3xl font-bold">Local Talent (TODO)</h1>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {talents.map((talent) => (
          <article
            key={talent.id}
            className="overflow-hidden rounded-lg border border-black/10 bg-white"
          >
            <div className="relative h-56 w-full">
              <Image
                src={talent.image}
                alt={talent.nomComplet}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <p className="text-sm uppercase tracking-wide text-black/60">
                {talent.type}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{talent.nomComplet}</h2>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
