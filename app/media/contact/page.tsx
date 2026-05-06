import ContactForm from "@/app/components/ContactForm";
import SocialSection from "@/app/components/SocialSection";

export default function Page() {
  return (
    <main>
      <div className="grid grid-cols-1 gap-10 px-4 py-8 md:p-[40px] md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-start">
          <h1 className="mb-6 break-words text-4xl font-bold uppercase leading-tight lg:text-7xl">
            Un projet ? <br />
            Un evenement ?
            <br /> Contactez-nous
          </h1>
          <p className="mb-8 leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida
            quam tortor. Ut elementum vulputate vivamus varius hac. Lorem ipsum
            dolor sit amet consectetur. Felis amet ultricies gravida quam
            tortor. Ut elementum vulputate vivamus varius hac.
          </p>
          <Link href="/media/" className="w-fit font-semibold underline">
            Nous decouvrir
          </Link>
        </div>

        <div>
          <h2 className="mb-8 whitespace-nowrap text-xl font-bold uppercase sm:text-2xl lg:text-4xl">
            Parlez nous de votre projet
          </h2>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="firstName">
                  Prenom*
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Prenom"
                  autoComplete="given-name"
                  required
                  className="border border-black-300 px-4 py-2 focus:border-black-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="lastName">
                  Nom*
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Nom"
                  autoComplete="family-name"
                  required
                  className="border border-black-300 px-4 py-2 focus:border-black-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="email">
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  className="border border-black-300 px-4 py-2 focus:border-black-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="phone">
                  Telephone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Telephone"
                  autoComplete="tel"
                  className="border border-black-300 px-4 py-2 focus:border-black-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium" htmlFor="project">
                Votre projet*
              </label>
              <textarea
                id="project"
                name="project"
                placeholder="Votre projet"
                required
                className="min-h-32 resize-none border border-black-300 px-4 py-2 focus:border-black-500 focus:outline-none"
              />
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <button
                type="submit"
                disabled={submitState.type === "submitting"}
                className="w-fit font-semibold underline disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitState.type === "submitting"
                  ? "Envoi en cours..."
                  : "Envoyer votre message"}
              </button>

              {submitState.type !== "idle" ? (
                <p
                  aria-live="polite"
                  className={
                    submitState.type === "success"
                      ? "text-sm text-green-700"
                      : submitState.type === "error"
                        ? "text-sm text-red-700"
                        : "text-sm text-black/60"
                  }
                >
                  {submitState.message}
                </p>
              ) : null}
            </div>
          </form>
        </div>

        <div className="flex justify-center md:col-span-2" />
      </div>

      <SocialSection />
    </main>
  );
}
