import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ['300','400','500','700'],
});

export const metadata: Metadata = {
  title: "Next TODO Application",
  description: "Generated with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
