import { ReactElement } from "react";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "اسلایدباز",
  description: "راحت‌ترین راه تولید اسلایدهای لینکدین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
