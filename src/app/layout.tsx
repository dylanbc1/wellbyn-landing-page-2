import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // regular, medium, bold
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wellbyn - Transformando la experiencia médica",
  description: "Wellbyn es la plataforma médica que conecta pacientes y clínicas en un solo lugar — citas, historial, documentación y comunicación automatizada con IA.",
  keywords: ["medicina", "salud", "clínicas", "pacientes", "IA médica", "telemedicina", "Wellbyn"],
  authors: [{ name: "Wellbyn" }],
  creator: "Wellbyn",
  publisher: "Wellbyn",
  robots: "index, follow",
  openGraph: {
    title: "Wellbyn - Transformando la experiencia médica",
    description: "Plataforma médica que conecta pacientes y clínicas con IA",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellbyn - Transformando la experiencia médica",
    description: "Plataforma médica que conecta pacientes y clínicas con IA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
