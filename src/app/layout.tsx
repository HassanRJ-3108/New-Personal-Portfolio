import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { ConditionalFooter, ConditionalSidebar } from "./ConditionalSidebar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hassan RJ - Full Stack Developer & Tech Enthusiast",
  description:
    "Hassan RJ is a passionate Full Stack Developer, student leader at GIAIC, and tech enthusiast. Specializing in Next.js, React, and AI integration, he creates scalable, user-centric, and visually stunning web applications.",
  keywords: [
    "Hassan RJ",
    "Full Stack Developer",
    "Next.js Developer",
    "React Specialist",
    "GIAIC Student",
    "Hassan Rajput",
    "Governor House Student",
    "Student Leader",
  ],
  authors: [{ name: "Hassan RJ" }],
  openGraph: {
    title: "Hassan RJ - Full Stack Developer & Tech Enthusiast",
    description:
      "Explore the world of Hassan RJ, a Full Stack Developer and GIAIC student leader. Crafting innovative, scalable, and visually stunning web applications.",
    url: "https://hassanrj.vercel.app",
    siteName: "Hassan RJ Portfolio",
    images: [
      {
        url: "https://hassanrj.vercel.app/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Hassan RJ Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", 
    title: "Hassan RJ - Full Stack Developer & Tech Enthusiast",
    description:
      "Discover Hassan RJ's journey in Full Stack Development, AI integration, and user-centric design.",
    images: "https://hassanrj.vercel.app/images/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
     
        <ConditionalSidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            <ConditionalFooter />
          </div>
        </div>
      </body>
    </html>
  );
}