"use client";

import { LoaderCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "No se pudo enviar el mensaje.");
      }

      form.reset();
      setStatus("success");
      setMessage("Mensaje enviado. Gracias por contactar conmigo.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "No se pudo enviar el mensaje.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          Nombre
          <input name="name" autoComplete="name" required placeholder="Tu nombre" />
        </label>
        <label>
          Correo profesional
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="nombre@empresa.com"
          />
        </label>
      </div>
      <label>
        Empresa <span>(opcional)</span>
        <input name="company" autoComplete="organization" placeholder="Nombre de la empresa" />
      </label>
      <label className="honeypot" aria-hidden="true">
        Sitio web
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        Mensaje
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Cuéntame cómo puedo ayudarte o sobre qué te gustaría hablar."
        />
      </label>
      <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <LoaderCircle size={18} className="spin" /> : <Send size={18} />}
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
      {message && (
        <p className={`form-message ${status === "success" ? "is-success" : "is-error"}`} aria-live="polite">
          {message}
        </p>
      )}
    </form>
  );
}
