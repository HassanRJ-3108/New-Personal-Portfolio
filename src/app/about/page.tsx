import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Hassan Rajput - Full Stack Developer",
  description:
    "Discover Hassan Rajput, an innovative Full Stack Developer and Student Leader at GIAIC. Expert in Next.js and React, building user-centric web solutions with AI integration.",
  keywords:
    "Hassan Rajput, Hassan RJ, Full Stack Developer, Next.js Developer, React Developer, AI integration, Web Development Portfolio, Student Leader, GIAIC, User-Centric Web Experiences",
  robots: "index, follow",
  openGraph: {
    title: "About | Hassan Rajput - Full Stack Developer",
    description:
      "Explore Hassan Rajput's journey as a Full Stack Developer, specializing in modern web technologies like Next.js and React.",
    url: "https://hassanrj.vercel.app/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Hassan Rajput - Full Stack Developer",
    description:
      "Learn about Hassan Rajput's expertise in web development, focusing on Next.js, React, and AI-driven solutions.",
  },
};


export default function AboutPage() {

  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
