import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chetan Kushwah - Portfolio",
  description:
    "Full Stack Developer & UI/UX Designer - Building digital experiences that inspire and transform startup ideas into working products.",
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: { url: "/favicon.svg", type: "image/svg+xml" },
  },
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
