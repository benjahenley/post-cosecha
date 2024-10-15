import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/presentation/components/providers/darkMode";
import "public/css/embla/embla.css";
import "public/css/global.css";
import "photoswipe/style.css";
import Footer from "@/presentation/components/ui/footer/page";

// Import your favicon
import Head from "next/head";

const generalSans = localFont({
  src: [
    {
      path: "../fonts/GeneralSans-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-VariableItalic.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
});

const clashDisplay = localFont({
  src: "../fonts/ClashDisplay-Variable.ttf",
  weight: "100 900",
  style: "normal",
  variable: "--font-clash-display",
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
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/img/logo.jpg" sizes="32x32" />
        <link rel="apple-touch-icon" href="/img/logo.jpg" />
        {/* SEO Tags */}
        <meta name="title" content="Post cosecha - Calidad post cosecha" />
        <meta
          name="description"
          content="Explora una amplia gama de productos premium diseñados para mejorar tus procesos post-cosecha."
        />
        <meta
          name="keywords"
          content="cosecha, post-harvest products, agriculture, farming, quality crops, after harvest, sustainable farming"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Cosecha Products" />
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
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/products" />
        <meta property="og:site_name" content="Cosecha Products" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cosecha Products - Quality After Harvest"
        />
        <meta
          name="twitter:description"
          content="Explore our premium post-harvest products to enhance crop quality."
        />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
      </Head>
      <body
        className={`${generalSans.variable} ${clashDisplay.variable} min-h-screen font-sans antialiased `}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
