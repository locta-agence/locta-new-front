import Image from "next/image";
import { events } from "@/data/events";

export default function Page() {
  return (
    <main className="px-8 py-10">
      <h1 className="text-3xl font-bold mb-8">Evenements (TODO)</h1>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <article
            key={event.id}
            className="overflow-hidden rounded-lg border border-black/10 bg-white"
          >
            <div className="relative h-48 w-full">
              <Image
                src={event.image}
                alt={event.titre}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <p className="text-sm uppercase tracking-wide text-black/60">
                {event.type} - {event.date}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{event.titre}</h2>
              <p className="mt-2 text-sm text-black/80">{event.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
