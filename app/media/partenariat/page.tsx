import Image from "next/image";
import { partners } from "@/data/partners";


export default function Page(){
    return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Les partenaires Locta</h1>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partners) => (
                <article
                  key={partners.id}
                  className="overflow-hidden rounded-lg border border-black/10 bg-white"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={partners.image}
                      alt={partners.name}
                      fill
                      className="object-cover"
                    />
                  </div>
      
                  <div className="p-4">
                    <p className="text-sm uppercase tracking-wide text-black/60">
                      {partners.name}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold">{partners.name}</h2>
                    <p className="mt-2 text-sm text-black/80">{partners.description}</p>
                  </div>
                </article>
              ))}
            </section>

    </main>
    );
}