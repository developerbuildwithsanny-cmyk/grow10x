import type { Metadata } from "next";
import "./globals.css";
import { leagueSpartan, openSans, inter, poppins } from "@/lib/fonts";

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
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${openSans.variable} ${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full font-body" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}


