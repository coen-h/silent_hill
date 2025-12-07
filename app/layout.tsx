import type { Metadata } from "next";
import { Saira } from "next/font/google";
import LenisProvider from "./lenis-provider";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: "Silent Hill",
  description: "Fanmade Silent Hill Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saira.variable} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
