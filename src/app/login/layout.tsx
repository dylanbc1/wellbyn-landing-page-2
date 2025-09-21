import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login - Wellbyn",
  description: "Acceso exclusivo para administradores de Wellbyn",
  robots: "noindex, nofollow",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
