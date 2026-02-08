import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "New Website Project",
    template: "%s | New Website Project"
  },
  description: "A production-ready Next.js App Router starter with CI and Netlify deployment.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
