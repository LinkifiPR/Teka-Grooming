import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Teka Grooming | อาบน้ำตัดขนสุนัข",
    template: "%s | Teka Grooming"
  },
  description:
    "Teka Grooming ร้านอาบน้ำตัดขนสุนัข ดูแลครบทั้งอาบน้ำ ตัดแต่งขน ตัดเล็บ และดูแลสุขอนามัยโดยทีมมืออาชีพ",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Teka Grooming",
    description: "Premium dog grooming studio with Thai-first bilingual experience.",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
