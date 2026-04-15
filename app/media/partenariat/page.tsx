import Image from "next/image";
import Link from "next/link";

import SocialSection from "@/app/components/SocialSection";
import PartnersGrid from "@/app/components/PartnersGrid";


export default function Page(){
    return (
    <main className="p-[40px]">
      <div className="text-center px-2 py-12 flex flex-col gap-4 md:gap-6">
        <h1 className="text-4xl lg:text-6xl font-semibold uppercase leading-tight break-words">Les partenaires Locta</h1>
        <p className="text-base">Envie de devenir partenaire ?</p>
        <Link href="/media/contact" className="inline-block w-fit self-center font-bold underline text-sm md:text-base">Nous contacter</Link>
      </div>

      <section className="w-full px-2 pb-2 pt-2">
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "500px", maxHeight: "550px" }}
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

      <section className="flex flex-col">
        <PartnersGrid />
      </section>
      <SocialSection />

    </main>
    );
}