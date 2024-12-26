import { ReactElement } from "react";

import type { Metadata } from "next";

import ExportComponent from "@/components/export/export.component";

import "@/styles/pattern.css";
import "@/styles/button.css";
import "@/styles/palette.css";
import "@/styles/typography.css";

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
      <body>
        {children}
        <ExportComponent />
      </body>
    </html>
  );
}
