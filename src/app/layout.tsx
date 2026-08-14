import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "10xAISchool — Learn AI. Launch Fast. Earn Faster.",
  description:
    "Master practical AI development. Build real-world AI applications and launch your AI startup.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-body">{children}</body>
    </html>
  );
}
