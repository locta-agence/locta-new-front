"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "d89d12cb-4c48-4660-8464-74ad3a85081c";

type SubmitState =
  | { type: "idle"; message: "" }
  | { type: "submitting"; message: "Envoi en cours..." }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: { message?: string };
};

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Nouveau message depuis le formulaire Locta",
      from_name: "Site Locta",
      firstName: formData.get("firstName")?.toString() ?? "",
      lastName: formData.get("lastName")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      project: formData.get("project")?.toString() ?? "",
      botcheck: "",
    };

    setSubmitState({ type: "submitting", message: "Envoi en cours..." });

    if (!payload.access_key) {
      setSubmitState({ type: "error", message: "La cle Web3Forms est absente." });
      return;
    }

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: payload.access_key,
          subject: payload.subject,
          from_name: payload.from_name,
          name: `${payload.firstName} ${payload.lastName}`.trim(),
          email: payload.email,
          phone: payload.phone,
          project: payload.project,
          message: payload.project,
          first_name: payload.firstName,
          last_name: payload.lastName,
          replyto: payload.email,
          botcheck: payload.botcheck,
        }),
      });

      const result = (await response.json().catch(() => null)) as Web3FormsResponse | null;
      const responseMessage =
        result?.message ?? result?.body?.message ?? "Une erreur est survenue pendant l'envoi.";

      if (!response.ok || !result?.success) throw new Error(responseMessage);

      form.reset();
      setSubmitState({ type: "success", message: "Votre message a bien ete envoye." });
    } catch (error) {
      setSubmitState({
        type: "error",
        message: error instanceof Error ? error.message : "Une erreur est survenue pendant l'envoi.",
      });
    }
  }

  return (
    <div className="grid grid-cols-1 gap-10 p-[40px] md:grid-cols-2 md:gap-12">
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
              <label className="mb-2 text-sm font-medium" htmlFor="firstName">Prenom*</label>
              <input id="firstName" type="text" name="firstName" placeholder="Prenom" autoComplete="given-name" required className="border border-black px-4 py-2 outline-none" />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium" htmlFor="lastName">Nom*</label>
              <input id="lastName" type="text" name="lastName" placeholder="Nom" autoComplete="family-name" required className="border border-black px-4 py-2 outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium" htmlFor="email">Email*</label>
              <input id="email" type="email" name="email" placeholder="Email" autoComplete="email" required className="border border-black px-4 py-2 outline-none" />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium" htmlFor="phone">Telephone</label>
              <input id="phone" type="tel" name="phone" placeholder="Telephone" autoComplete="tel" className="border border-black px-4 py-2 outline-none" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium" htmlFor="project">Votre projet*</label>
            <textarea id="project" name="project" placeholder="Votre projet" required className="min-h-32 resize-none border border-black px-4 py-2 outline-none" />
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <button
              type="submit"
              disabled={submitState.type === "submitting"}
              className="w-fit font-semibold underline disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitState.type === "submitting" ? "Envoi en cours..." : "Envoyer votre message"}
            </button>

            {submitState.type !== "idle" && (
              <p
                aria-live="polite"
                className={
                  submitState.type === "success" ? "text-sm text-green-700"
                  : submitState.type === "error" ? "text-sm text-red-700"
                  : "text-sm text-black/60"
                }
              >
                {submitState.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
