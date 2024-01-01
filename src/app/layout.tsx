import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";

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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
