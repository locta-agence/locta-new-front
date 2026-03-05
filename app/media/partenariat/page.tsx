import Image from "next/image";
import { partners } from "@/data/partners";


export default function Page(){
    return (
    <main className="p-8">
      <div className="text-center">
        <h1 className="text-7xl font-semibold uppercase">Les partenaires Locta (TODO)</h1>
        <p>Envie de devenir partenaire ?</p>
        <p className="font-bold underline">Nous contacter</p>
      </div>

      <section className="w-full px-10 pb-10">
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "550px" }}
        >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/ski.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partners) => (
                <article
                  key={partners.id}
                  className="overflow-hidden border border-black/10 bg-white"
                >
                  <div className="relative h-48 w-full display-flex ">
                    <Image
                      src={partners.image}
                      alt={partners.name}
                      fill
                      className="object-cover"
                    />
                  </div>
      
                  <div className="p-4 display-flex">
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