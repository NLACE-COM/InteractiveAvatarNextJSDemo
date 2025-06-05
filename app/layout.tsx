import "@/styles/globals.css";
import { Metadata } from "next";
import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Space_Grotesk as FontGrotesk,
} from "next/font/google";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const fontGrotesk = FontGrotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "HeyGen Interactive Avatar SDK Demo",
    template: `%s - HeyGen Interactive Avatar SDK Demo`,
  },
  icons: {
    icon: "/heygen-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable} ${fontGrotesk.variable} font-sans`}
      lang="en"
    >
      <head />
      <body className="min-h-screen bg-white text-[#0f1011]">
        <main className="flex flex-col min-h-screen w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
