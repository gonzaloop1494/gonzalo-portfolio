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
        { error: "Completa tu nombre, correo y mensaje con datos válidos." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
      return Response.json(
        {
          error:
            "El formulario aún no está conectado al correo. Escríbeme directamente a gonzalo.pachecoagredano@gmail.com.",
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
        { error: "No se pudo enviar el mensaje. Prueba de nuevo o escríbeme por correo." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "No se pudo procesar el formulario. Inténtalo de nuevo más tarde." },
      { status: 500 },
    );
  }
}
