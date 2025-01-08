import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { client } from "@/sanity/lib/client"; // Update this import path if necessary

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const project = await client.fetch(`
    *[_type == "project" && slug.current == $slug][0]{
      title,
      description,
      stack
    }
  `, { slug });

  if (project) {
    return {
      title: `${project.title} | Hassan Rajput`,
      description: project.description || `${project.title} - A detailed look at the project.`,
      keywords: `${project.stack.join(', ')},Hassan RJ, Hassan Rajout, Full Stack Developer, Hassan Rajput, Web Development, Next.js, React, Tech Projects`,
      openGraph: {
        title: `${project.title} | Hassan Rajput`,
        description: project.description || `${project.title} - A detailed exploration of the project.`,
        url: `https://hassanrj.vercel.app/projects/${slug}`,
        images: project.thumbnail || 'https://hassanrj.vercel.app/images/pic.jpg', // Fallback image
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${project.title} | Hassan Rajput`,
        description: project.description || `${project.title} - A detailed exploration of the project.`,
        images: project.thumbnail || 'https://hassanrj.vercel.app/images/pic.jpg',
      },
    };
  } else {
    return {
      title: "Projects | Hassan Rajput",
      description: "Explore the latest projects and web applications developed by Hassan Rajput, a Full Stack Developer and Student Leader.",
      keywords: "Projects, Hassan Rajput,Hassan RJ, Full Stack Developer, Web Development, Tech, Next.js, React",
      openGraph: {
        title: "Projects | Hassan Rajput",
        description: "Browse Hassan Rajput's latest web development projects, including dynamic applications built with modern technologies like Next.js, React, and more.",
        url: "https://hassanrj.vercel.app/projects",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Projects | Hassan Rajput",
        description: "Explore Hassan Rajput's portfolio of innovative projects in web development and Full Stack Development.",
      },
    };
  }
}

export default async function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const project = await client.fetch(`
    *[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      href,
      description,
      "thumbnail": thumbnail.asset->url,
      "images": images[].asset->url,
      stack,
      content
    }
  `, { slug });

  if (!project) {
    redirect("/projects");
  }

  return (
    <Container>
      <SingleProduct product={project} />
    </Container>
  );
}
