import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - Wellbyn",
  description: "Panel de administración de Wellbyn",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
