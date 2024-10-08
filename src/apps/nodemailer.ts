var nodemailer = require("nodemailer");

// Configuración del transporte SMTP de Towebs
const transporter = nodemailer.createTransport({
  host: "mail.postcosechasrl.com.ar", // Servidor SMTP de Towebs
  port: 465, // Puerto SMTP (puedes usar 465 si es SSL)
  secure: true, // true si usas el puerto 465 con SSL
  auth: {
    user: process.env.POSTCOSECHA_EMAIL, // Tu correo electrónico en Towebs
    pass: process.env.POSTCOSECHA_PASS, // La contraseña de tu correo en Towebs
  },
  tls: {
    rejectUnauthorized: false, // Para evitar errores con certificados autofirmados
  },
});

export { transporter };
