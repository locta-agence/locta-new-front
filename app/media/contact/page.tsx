import Link from "next/link";

import SocialSection from "@/app/components/SocialSection";

export default function Page() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col justify-start">
        <h1 className="uppercase font-bold text-4xl lg:text-7xl mb-6 leading-tight break-words">Un projet ? <br/>Un évènement ?<br/> Contactez-nous</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.</p>
        <Link href="/media/" className="font-semibold underline w-fit">Nous découvrir</Link>
      </div>
      <div>
        <h2 className="font-bold uppercase mb-8 lg:text-4xl">Parlez nous de votre projet</h2>
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Prénom*</label>
              <input type="text" placeholder="Prénom" className="border border-black-300 px-4 py-2 focus:outline-none focus:border-black-500"></input>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Nom*</label>
              <input type="text" placeholder="Nom" className="border border-black-300 px-4 py-2 focus:outline-none focus:border-black-500"></input>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Email*</label>
              <input type="email" placeholder="Email" className="border border-black-300 px-4 py-2 focus:outline-none focus:border-black-500"></input>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Téléphone</label>
              <input type="tel" placeholder="Téléphone" className="border border-black-300 px-4 py-2 focus:outline-none focus:border-black-500"></input>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Votre projet*</label>
            <textarea placeholder="Votre projet" className="border border-black-300 px-4 py-2 focus:outline-none focus:border-black-500 min-h-32 resize-none"></textarea>
          </div>
          <button type="submit" className="font-semibold underline w-fit mt-4">Envoyer votre message</button>
        </form>
      </div>

      {/* <div className="md:col-span-2 flex justify-center">
        <SocialSection />
      </div> */}
    </main>
  );
}
