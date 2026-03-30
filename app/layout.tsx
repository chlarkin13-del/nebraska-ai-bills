import type { Metadata } from "next";
import { Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nebraska AI Safety — 2026 Legislative Session",
  description:
    "Nebraska lawmakers are taking action on AI safety in 2026. Learn about the bills that protect kids and families from unregulated AI chatbots.",
  openGraph: {
    title: "Nebraska AI Safety — 2026 Legislative Session",
    description:
      "Nebraska lawmakers are taking action on AI safety in 2026. Learn about the bills that protect kids and families from unregulated AI chatbots.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
