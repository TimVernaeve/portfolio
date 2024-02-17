import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Tim Vernaeve",
  description: "Creative Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body>{children}</body>
    </html>
  );
}
