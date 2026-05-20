import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marginalia - spoiler-safe TV recaps",
  description:
    "A spoiler-safe TV recap prototype for viewers returning to a long series after a gap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
