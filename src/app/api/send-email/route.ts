import { transporter } from "@/apps/nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const mailOptions = {
      from: email,
      to: process.env.POSTCOSECHA_EMAIL,
      subject: `New message from ${name}`,
      text: message,
      html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
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
