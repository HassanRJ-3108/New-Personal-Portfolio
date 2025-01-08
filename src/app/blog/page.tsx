import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { BlogList } from "@/components/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Hassan RJ - Full Stack Developer & Tech Enthusiast",
  description:
    "Explore blogs by Hassan RJ, a Full Stack Developer and tech enthusiast. Dive into insights on web development, Next.js, AI integration, and life as a student leader.",
  keywords:
    "Hassan RJ, Hassan Rajput, Blogs, Full Stack Developer, Web Development, Next.js, AI Integration, Tech Enthusiast, Student Leader, Programming Blogs",
  robots: "index, follow",
  openGraph: {
    title: "Blogs | Hassan RJ - Full Stack Developer & Tech Enthusiast",
    description:
      "Discover blogs by Hassan RJ on cutting-edge technologies, web development, and AI-driven solutions. Insights from a passionate developer and student leader.",
    url: "https://hassanrj.vercel.app/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Hassan RJ - Full Stack Developer",
    description:
      "Follow Hassan RJ's journey through blogs on Next.js, React, AI, and modern web technologies.",
  },
};


export default function Blog() {
  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
        fascinated by technology.
      </Paragraph>
      <BlogList />
    </Container>
  );
}

