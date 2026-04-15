"use client";

import { useState } from "react";

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--Heading, "Armin Soft")',
};

const textStyle: React.CSSProperties = {
  fontFamily: 'var(--Text, "Armin Soft")',
};

const labelClass = "block text-[16px] text-black" ;

const inputClass =
  "w-full border border-black bg-transparent px-[16px] py-[12px] text-[12px] text-black outline-none transition placeholder:text-black/40 focus:ring-1 focus:ring-black";

export default function EventContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form className="flex flex-col gap-[32px]" onSubmit={handleSubmit}>
      {/* Title */}
      <p
        className="text-center text-[32px] uppercase leading-none"
        style={{ ...headingStyle, fontWeight: 600 }}
      >
        Parlez nous de votre projet
      </p>

      <div className="flex flex-col gap-[16px]">
        {/* Prénom + Nom */}
        <div className="flex gap-2">
          <div className="flex flex-1 flex-col gap-[8px]">
            <label className={labelClass} style={textStyle}>
              Prénom*
            </label>
            <input name="firstName" className={inputClass} placeholder="Prénom" required style={textStyle} />
          </div>
          <div className="flex flex-1 flex-col gap-[8px]">
            <label className={labelClass} style={textStyle}>
              Nom*
            </label>
            <input name="lastName" className={inputClass} placeholder="Nom" required style={textStyle} />
          </div>
        </div>

        {/* Email + Téléphone */}
        <div className="flex gap-2">
          <div className="flex flex-1 flex-col gap-[8px]">
            <label className={labelClass} style={textStyle}>
              Email*
            </label>
            <input name="email" type="email" className={inputClass} placeholder="Email" required style={textStyle} />
          </div>
          <div className="flex flex-1 flex-col gap-[8px]">
            <label className={labelClass} style={textStyle}>
              Téléphone
            </label>
            <input name="phone" type="tel" className={inputClass} placeholder="Téléphone" style={textStyle} />
          </div>
        </div>

        {/* Projet */}
        <div className="flex flex-col gap-[8px]">
          <label className={labelClass} style={textStyle}>
            Votre projet*
          </label>
          <textarea
            name="message"
            className={`${inputClass} h-[150px] resize-none`}
            placeholder="Votre projet"
            required
            style={textStyle}
          />
        </div>
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="border-b border-black pb-[2px] text-[14px] font-semibold text-black hover:opacity-60"
          style={headingStyle}
        >
          {sent ? "Message envoyé ✓" : "Envoyer votre message"}
        </button>
      </div>
    </form>
  );
}
