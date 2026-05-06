
import Link from "next/link";

import SocialSection from "@/app/components/SocialSection";
import PartnersGrid from "@/app/components/PartnersGrid";


export default function Page(){
    return (
    <main>
      <div className="p-[40px]">
      <div className="text-center flex flex-col gap-4 md:gap-6">
        <h1 className="text-4xl lg:text-6xl font-semibold uppercase leading-tight break-words">Les partenaires Locta</h1>
        <p className="text-base">Envie de devenir partenaire ?</p>
        <Link href="/media/contact" className="inline-block w-fit self-center font-bold underline text-sm md:text-base">Nous contacter</Link>
      </div>

      <section className="w-full pb-[24px] pt-[24px]">
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
      </div>
      <SocialSection />
    </main>
    );
}