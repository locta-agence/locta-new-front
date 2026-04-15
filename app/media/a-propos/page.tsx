
import TeamGrid from "@/app/components/TeamGrid";
import SocialSection from "@/app/components/SocialSection";
import StatsSection from "@/app/components/StatsSection";
import Link from "next/link";

import Image from "next/image";

export default function Page() {
  return (
    <main>
     <div className="p-[40px]"> 
      <div className="text-center">
        <h1 className="font-bold text-6xl uppercase">à propos de nous</h1>
        <p className="mt-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="mb-[40px]"/>
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
      </div>

      <div className="text-center mt-[60px]">
        <h2 className="font-bold text-4xl uppercase">notre team</h2>
        <p className="mt-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div> 

      <TeamGrid /> 

      <section className="mt-[24px] flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="flex-1 relative aspect-[9/12] overflow-hidden">
          <Image
            src="/images/team/team_1.png"
            alt="Team Member"
            fill
            className="object-cover"
          />
        </div>

        {/* Contenu */}
        <div className="flex-1">
          <div className="p-[60px]">
            <h2 className="font-bold text-4xl-center lg:text-6xl uppercase mb-6">Titre H2</h2>
            <div className="self-stretch text-sm font-light">
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.</p>
              <p>Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac. Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[24px] grid gap-[24px]" style={{ gridTemplateColumns: '2fr 1fr' }}>
        {/* Image 1 - 2/3 largeur */}
        <div className="relative aspect-[9/12] overflow-hidden">
          <Image
            src="/images/team/team_1.png"
            alt="Team"
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
          </div>
        </div>

        {/* Image 2 - 1/3 largeur, moitié moins haute */}
        <div className="relative aspect-[9/12] overflow-hidden">
          <Image
            src="/images/team/team_1.png"
            alt="Team"
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
          </div>
        </div>
      </section> 

      <section className="mt-[24px] flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Image */}
        <div className="flex-1 relative aspect-[9/12] overflow-hidden">
          <Image
            src="/images/team/team_1.png"
            alt="Team Member"
            fill
            className="object-cover"
          />
        </div>

        {/* Contenu */}
        <div className="flex-1">
          <div className="p-[60px]">
            <h2 className="font-bold text-4xl-center lg:text-6xl uppercase mb-6">Titre H2</h2>
            <div className="self-stretch text-sm font-light">
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.</p>
              <p>Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac. Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[40px] p-[70px] grid gap-8" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <div></div>
        <div className="flex flex-col justify-between">
          <p className="font-bold text-5xl uppercase">Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.</p>
          <Link href={"/media/local-talent"} className="inline-block w-fit font-bold underline text-sm md:text-base mt-[24px]">Tous les talents</Link>
        </div>       
      </div>

      <div className="mt-[60px] grid grid-cols-2 gap-[24px]">
        {/* Image 1 */}
        <div className="relative aspect-[9/12] overflow-hidden">
          <Image
            src="/images/team/team_1.png"
            alt="Team"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="relative aspect-[9/12] overflow-hidden">
          <Image
            src="/images/team/team_1.png"
            alt="Team"
            fill
            className="object-cover"
          />
        </div>
      </div>
      </div> 
      <SocialSection />   
      <StatsSection />
    </main>
  );
}
