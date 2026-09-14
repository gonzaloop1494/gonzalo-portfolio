import { Resend } from "resend";

export const runtime = "nodejs";

const recipient = process.env.CONTACT_TO_EMAIL ?? "gonzalo.pachecoagredano@gmail.com";

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const company = clean(body.company, 120);
    const message = clean(body.message, 5000);
    const website = clean(body.website, 240);

    // Honeypot: bots get an apparently successful response without sending mail.
    if (website) {
      return Response.json({ ok: true });
    }

    if (!name || !email || !message || !email.includes("@")) {
      return Response.json(
        { errorCode: "invalid" },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
      return Response.json(
        {
          errorCode: "notConfigured",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: recipient,
      replyTo: email,
      subject: `Nuevo mensaje de ${name}${company ? ` - ${company}` : ""}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Empresa: ${company || "No indicada"}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      return Response.json(
        { errorCode: "sendFailed" },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { errorCode: "processing" },
      { status: 500 },
    );
  }
}
