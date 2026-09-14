import type { Locale } from "./locales";

type ContactCopy = {
  labels: {
    name: string;
    email: string;
    company: string;
    optional: string;
    website: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    company: string;
    message: string;
  };
  send: string;
  sending: string;
  success: string;
  errors: Record<string, string>;
};

export const contactCopy: Record<Locale, ContactCopy> = {
  es: {
    labels: {
      name: "Nombre",
      email: "Correo profesional",
      company: "Empresa",
      optional: "opcional",
      website: "Sitio web",
      message: "Mensaje",
    },
    placeholders: {
      name: "Tu nombre",
      email: "nombre@empresa.com",
      company: "Nombre de la empresa",
      message: "Cuéntame cómo puedo ayudarte o sobre qué te gustaría hablar.",
    },
    send: "Enviar mensaje",
    sending: "Enviando...",
    success: "Mensaje enviado. Gracias por contactar conmigo.",
    errors: {
      invalid: "Completa tu nombre, correo y mensaje con datos válidos.",
      notConfigured: "El formulario aún no está conectado al correo. Escríbeme directamente a gonzalo.pachecoagredano@gmail.com.",
      sendFailed: "No se pudo enviar el mensaje. Prueba de nuevo o escríbeme por correo.",
      processing: "No se pudo procesar el formulario. Inténtalo de nuevo más tarde.",
      unknown: "No se pudo enviar el mensaje.",
    },
  },
  en: {
    labels: {
      name: "Name",
      email: "Professional email",
      company: "Company",
      optional: "optional",
      website: "Website",
      message: "Message",
    },
    placeholders: {
      name: "Your name",
      email: "name@company.com",
      company: "Company name",
      message: "Tell me how I can help or what you would like to discuss.",
    },
    send: "Send message",
    sending: "Sending...",
    success: "Message sent. Thank you for getting in touch.",
    errors: {
      invalid: "Please provide a valid name, email address, and message.",
      notConfigured: "The form is not connected to email yet. Please write directly to gonzalo.pachecoagredano@gmail.com.",
      sendFailed: "The message could not be sent. Please try again or contact me by email.",
      processing: "The form could not be processed. Please try again later.",
      unknown: "The message could not be sent.",
    },
  },
  fr: {
    labels: {
      name: "Nom",
      email: "E-mail professionnel",
      company: "Entreprise",
      optional: "facultatif",
      website: "Site web",
      message: "Message",
    },
    placeholders: {
      name: "Votre nom",
      email: "nom@entreprise.com",
      company: "Nom de l'entreprise",
      message: "Expliquez-moi comment je peux vous aider ou ce dont vous souhaitez parler.",
    },
    send: "Envoyer le message",
    sending: "Envoi en cours...",
    success: "Message envoyé. Merci de m'avoir contacté.",
    errors: {
      invalid: "Veuillez renseigner un nom, une adresse e-mail et un message valides.",
      notConfigured: "Le formulaire n'est pas encore relié à une adresse e-mail. Écrivez-moi directement à gonzalo.pachecoagredano@gmail.com.",
      sendFailed: "Le message n'a pas pu être envoyé. Réessayez ou contactez-moi par e-mail.",
      processing: "Le formulaire n'a pas pu être traité. Veuillez réessayer plus tard.",
      unknown: "Le message n'a pas pu être envoyé.",
    },
  },
  de: {
    labels: {
      name: "Name",
      email: "Geschäftliche E-Mail-Adresse",
      company: "Unternehmen",
      optional: "optional",
      website: "Website",
      message: "Nachricht",
    },
    placeholders: {
      name: "Ihr Name",
      email: "name@unternehmen.com",
      company: "Name des Unternehmens",
      message: "Erzählen Sie mir, wie ich helfen kann oder worüber Sie sprechen möchten.",
    },
    send: "Nachricht senden",
    sending: "Wird gesendet...",
    success: "Nachricht gesendet. Vielen Dank für Ihre Kontaktaufnahme.",
    errors: {
      invalid: "Bitte geben Sie einen gültigen Namen, eine E-Mail-Adresse und eine Nachricht ein.",
      notConfigured: "Das Formular ist noch nicht mit einer E-Mail-Adresse verbunden. Schreiben Sie mir bitte direkt an gonzalo.pachecoagredano@gmail.com.",
      sendFailed: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich per E-Mail.",
      processing: "Das Formular konnte nicht verarbeitet werden. Bitte versuchen Sie es später erneut.",
      unknown: "Die Nachricht konnte nicht gesendet werden.",
    },
  },
};
