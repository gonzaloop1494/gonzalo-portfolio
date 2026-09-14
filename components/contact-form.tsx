"use client";

import { LoaderCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { contactCopy } from "@/lib/contact-copy";
import { useLanguage } from "./language-provider";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { locale } = useLanguage();
  const copy = contactCopy[locale];
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorCode, setErrorCode] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    setStatus("sending");
    setErrorCode(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { errorCode?: string };

      if (!response.ok) {
        throw new Error(data.errorCode ?? "unknown");
      }

      form.reset();
      setStatus("success");
      setErrorCode(null);
    } catch (error) {
      setStatus("error");
      setErrorCode(error instanceof Error ? error.message : "unknown");
    }
  }

  const message = status === "success"
    ? copy.success
    : status === "error"
      ? (copy.errors[errorCode ?? "unknown"] ?? copy.errors.unknown)
      : "";

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          {copy.labels.name}
          <input name="name" autoComplete="name" required placeholder={copy.placeholders.name} />
        </label>
        <label>
          {copy.labels.email}
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={copy.placeholders.email}
          />
        </label>
      </div>
      <label>
        {copy.labels.company} <span>({copy.labels.optional})</span>
        <input name="company" autoComplete="organization" placeholder={copy.placeholders.company} />
      </label>
      <label className="honeypot" aria-hidden="true">
        {copy.labels.website}
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        {copy.labels.message}
        <textarea
          name="message"
          rows={5}
          required
          placeholder={copy.placeholders.message}
        />
      </label>
      <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <LoaderCircle size={18} className="spin" /> : <Send size={18} />}
        {status === "sending" ? copy.sending : copy.send}
      </button>
      {message && (
        <p className={`form-message ${status === "success" ? "is-success" : "is-error"}`} aria-live="polite">
          {message}
        </p>
      )}
    </form>
  );
}
