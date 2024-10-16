import type { Metadata } from "next";
import "/styles/embla.css";
import "/styles/global.css";
import "photoswipe/style.css";
import Footer from "@/presentation/components/ui/footer/page";
import localFont from "next/font/local";

// const assetPrefix = process.env.NODE_ENV === "production" ? "./" : "/";

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-VariableItalic.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
});

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
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        {/* Open Graph for social media */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cosecha Products - Quality After Harvest"
        />
        <meta
          property="og:description"
          content="Explore our premium post-harvest products to enhance crop quality and sustainability."
        />
        {/* <meta property="og:image" content={`./images/og-image.jpg`} />
        <meta property="og:url" content="https://yourwebsite.com/products" />
        <meta property="og:site_name" content="Cosecha Products" /> */}
      </head>
      <body
        className={`${generalSans.variable} min-h-screen font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
