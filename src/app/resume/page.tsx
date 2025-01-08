import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistorySection } from "@/components/WorkHistorySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Hassan Rajput - Full Stack Developer & Student Leader",
  description:
    "Explore the professional journey and work history of Hassan Rajput, a Full Stack Developer and Student Leader. Learn about the projects and roles that shaped his expertise in web development.",
  keywords:
    "Hassan Rajput,Hassan RJ, Full Stack Developer, Resume, Work History, Web Developer, Student Leader, Next.js, React, Tech Projects, Web Development, Developer Resume",
  robots: "index, follow",
  openGraph: {
    title: "Resume | Hassan Rajput - Full Stack Developer & Student Leader",
    description:
      "Explore the professional journey of Hassan Rajput, a Full Stack Developer and Student Leader, including his work history and impactful projects.",
    url: "https://hassanrj.vercel.app/resume",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Hassan Rajput",
    description:
      "Explore the professional journey and work history of Hassan Rajput, a Full Stack Developer and Student Leader.",
  },
};

export default function Resume() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives.
      </Paragraph>
      <WorkHistorySection />
    </Container>
  );
}
