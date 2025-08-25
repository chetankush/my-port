import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chetan Kushwah - Portfolio",
  description:
    "Full Stack Developer & UI/UX Enthusiast - Building digital experiences that inspire and transform ideas into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-['Poppins']">{children}</body>
    </html>
  );
}
