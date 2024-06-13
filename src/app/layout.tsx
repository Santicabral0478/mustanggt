import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ford | Mustang",
  description: "En 2023, el Ford Mustang Mach 1, parte de la icónica familia Mustang, mantiene su legado de potencia y estilo, elevando el rendimiento a nuevos niveles y proporcionando una emocionante experiencia de conducción.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
