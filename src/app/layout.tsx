import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandMenu } from "@/components/cmdk/CommandMenu";
import { BackgroundEffects } from "@/components/ui/background-effects";

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Cao Minh Quang | Full-Stack Engineer",
  description: "Personal portfolio of Cao Minh Quang, a Full-Stack Engineer specializing in backend architecture, Next.js, and C# .NET. Co-founder of Presist.",
  keywords: ["Full-Stack Engineer", "Backend Architecture", ".NET", "C#", "Next.js", "React", "Software Developer", "Vietnam"],
  authors: [{ name: "Cao Minh Quang" }],
  creator: "Cao Minh Quang",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kwaqtech.github.io",
    title: "Cao Minh Quang | Full-Stack Engineer",
    description: "Full-Stack Software Engineer building scalable, production-grade applications. Co-founder of Presist.",
    siteName: "Kwaq Tech Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cao Minh Quang | Full-Stack Engineer",
    description: "Full-Stack Software Engineer building scalable, production-grade applications.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark h-full antialiased"
    >
      <body className={`min-h-[100dvh] flex flex-col font-sans ${sans.variable} ${mono.variable} bg-background text-foreground selection:bg-accent/30 selection:text-accent-foreground`}>
        <BackgroundEffects />
        <Header />
        <div className="flex-1">
          {children}
        </div>

        <CommandMenu />
        <Footer />
      </body>
    </html>
  );
}
