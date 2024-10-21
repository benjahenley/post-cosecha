import type { Metadata } from "next";
import "../styles/embla.css";
import "../styles/global.css";
import "photoswipe/style.css";
import Footer from "@/presentation/components/ui/footer/page";

export const metadata: Metadata = {
  title: "Post Cosecha SRL - Productos para tu cosecha",
  description:
    "Explora una amplia gama de productos premium diseñados para mejorar tus procesos post-cosecha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>
      <body className={` min-h-screen font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
