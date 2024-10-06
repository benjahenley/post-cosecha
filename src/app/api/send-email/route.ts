import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.OUTLOOK_USER,
      pass: process.env.OUTLOOK_PASS,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  try {
    const mailOptions = {
      from: '"PostCosecha SRL" <info@postcosechasrl.com.ar>',
      to: "your-email@gmail.com",
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
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
    });
  }
}
