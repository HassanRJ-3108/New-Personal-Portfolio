import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Hassan Rajput - Full Stack Developer & Student Leader",
  description:
    "Get in touch with Hassan Rajput, Full Stack Developer and Student Leader at GIAIC. Reach out for collaborations, project inquiries, or any tech-related discussions.",
  keywords:
    "Contact, Hassan RJ , Hassan Rajput, Full Stack Developer, Web Development, Next.js, React, Tech Collaborations, Student Leader, Developer Contact",
  robots: "index, follow", 
  openGraph: {
    title: "Contact | Hassan Rajput - Full Stack Developer & Student Leader",
    description:
      "Reach out to Hassan Rajput for collaboration, project inquiries, or discussions about web development, Next.js, React, and more.",
    url: "https://hassanrj.vercel.app/contact", 
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact | Hassan Rajput",
    description:
      "Get in touch with Hassan Rajput for collaborations, inquiries, or discussions about Full Stack Development and tech innovations.",
  },
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or fill up this contact form. I will get back
        to you ASAP - I promise.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
