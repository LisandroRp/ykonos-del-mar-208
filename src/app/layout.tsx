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
  openGraph: {
    title: "Ykonos del Mar · Departamento 208",
    description: "Guía del Departamento 208 en Ykonos del Mar, Pinamar.",
    images: ["/og.jpg"],
    locale: "es_AR",
    type: "website"
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
