import { transporter } from "@/apps/nodemailer";

export async function POST(req: Request) {
  const { nombre, email, mensaje, telefono, asunto } = await req.json();

  try {
    const mailOptions = {
      from: email,
      to: process.env.POSTCOSECHA_EMAIL,
      subject: `Nuevo mensaje de ${nombre}`,
      text: mensaje,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #0056b3;">Nuevo mensaje de ${nombre}</h2>
          <p><strong>Asunto:</strong> ${asunto}</p>
          <p><strong>Correo electrónico:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 16px;">${mensaje}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <footer style="font-size: 12px; color: #888;">
            <p>Este correo fue enviado desde el formulario de contacto en el sitio web de Post Cosecha.</p>
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
    });
  }
}
