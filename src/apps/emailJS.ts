import { ContactFormProps } from "@/infrastructure/interfaces/contact";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

export async function sendEmail({
  email,
  nombre,
  telefono,
  mensaje,
  asunto,
}: ContactFormProps): Promise<EmailJSResponseStatus | void> {
  const templateParams = {
    email,
    nombre,
    telefono,
    mensaje,
    asunto,
  };

  try {
    const response: EmailJSResponseStatus = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!, // process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!, // process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!
      templateParams as unknown as Record<string, unknown>, // Convert to unknown first, then to Record
      process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY! // process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!
    );

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Error al enviar email " + error.message);
    } else {
      throw new Error("Error desconocido al enviar email: ", error as any);
    }
  }
}
