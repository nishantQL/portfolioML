import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Krishan Kant | ML Engineer & Full-Stack AI Developer",
  description: "Portfolio of Krishan Kant, building intelligent systems and full-stack web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} font-sans antialiased bg-[#0A0A0F] text-[#E8E8F0] selection:bg-[#6B3FA0]/30`}>
        {children}
      </body>
    </html>
  );
}
