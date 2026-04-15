import { NextResponse } from "next/server";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  project?: string;
};

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { message: "La cle Web3Forms est absente." },
      { status: 500 },
    );
  }

  try {
    const payload = (await request.json()) as ContactPayload;
    const firstName = payload.firstName?.trim() ?? "";
    const lastName = payload.lastName?.trim() ?? "";
    const email = payload.email?.trim() ?? "";
    const phone = payload.phone?.trim() ?? "";
    const project = payload.project?.trim() ?? "";

    if (!firstName || !lastName || !email || !project) {
      return NextResponse.json(
        { message: "Les champs obligatoires sont incomplets." },
        { status: 400 },
      );
    }

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("subject", "Nouveau message depuis le formulaire Locta");
    formData.append("from_name", "Site Locta");
    formData.append("name", `${firstName} ${lastName}`.trim());
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("project", project);
    formData.append("message", project);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);

    const web3formsResponse = await fetch(WEB3FORMS_URL, {
      method: "POST",
      body: formData,
    });

    const result = (await web3formsResponse.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!web3formsResponse.ok || !result.success) {
      return NextResponse.json(
        { message: result.message ?? "Echec de l'envoi du message." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Votre message a bien ete envoye.",
    });
  } catch {
    return NextResponse.json(
      { message: "Une erreur est survenue pendant l'envoi." },
      { status: 500 },
    );
  }
}
