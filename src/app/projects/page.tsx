import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { ProjectList } from "@/components/ProjectList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Hassan Rajput - Full Stack Developer & Student Leader",
  description:
    "Explore the projects by Hassan Rajput, a Full Stack Developer and Student Leader at GIAIC. See the innovative web applications and dynamic solutions he has created with Next.js, React, and more.",
  keywords:
    "Projects, Hassan Rajput, Full Stack Developer, Web Development, Next.js, React, Tailwind CSS, Web Applications, Developer Portfolio",
  robots: "index, follow", 
  openGraph: {
    title: "Projects | Hassan Rajput - Full Stack Developer & Student Leader",
    description:
      "Discover the innovative projects by Hassan Rajput, including dynamic web applications and cutting-edge solutions developed with modern technologies like Next.js, React, and more.",
    url: "https://hassanrj.vercel.app/projects",  // Replace with your actual URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Hassan Rajput",
    description:
      "Explore Hassan Rajput's impressive projects in Full Stack Development, featuring web applications built with Next.js, React, and other advanced technologies.",
  },
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        What I&apos;ve been working on
      </Heading>

      <ProjectList />
    </Container>
  );
}
