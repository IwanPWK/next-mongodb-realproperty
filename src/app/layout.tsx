import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I'Wan Properties",
  description: "A one-stop for all your property needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
