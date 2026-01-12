import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oliver D'Angelo Magallanes - Escritor & Desarrollador",
  description: "Sitio personal de Oliver D'Angelo Magallanes Espinoza. Estudiante de ASIR, escritor de poemas y poesías.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
