import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ykonos del Mar · Departamento 208",
    template: "%s · Ykonos del Mar 208"
  },
  description: "Guía del Departamento 208 en Ykonos del Mar, Pinamar.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  },
  openGraph: {
    title: "Ykonos del Mar · Departamento 208",
    description: "Guía del Departamento 208 en Ykonos del Mar, Pinamar.",
    url: "/",
    siteName: "Ykonos del Mar · Departamento 208",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Ykonos del Mar en Pinamar"
      },
      {
        url: "/og-square.jpg",
        width: 1200,
        height: 1200,
        type: "image/jpeg",
        alt: "Ykonos del Mar"
      }
    ],
    locale: "es_AR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ykonos del Mar · Departamento 208",
    description: "Guía del Departamento 208 en Ykonos del Mar, Pinamar.",
    images: ["/og.jpg"]
  },
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
