"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatDate } from "../../lib/formatDate";
import { Prose } from "@/components/Prose";
import { Container } from "./Container";
import { Heading } from "./Heading";
import Link from "next/link";
import { Paragraph } from "./Paragraph";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({ blog }: { blog: any }) {
  let router = useRouter();

  return (
    <Container>
      <article>
        <header className="flex flex-col">
          <Link
            href="/blog"
            aria-label="Go back to articles"
            className="group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700" />
          </Link>

          <Heading className="py-4">{blog.title}</Heading>
          <time
            dateTime={blog.date}
            className="flex items-center text-base text-zinc-400"
          >
            <Paragraph className="text-zinc-700">
              {formatDate(blog.date)}
            </Paragraph>
          </time>
          <div className="w-full mt-4 aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden relative" style={{ height: '400px' }}>
            <Image
              src={urlFor(blog.image).url()}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </header>
        <Prose className="mt-8">
          <PortableText value={blog.content} />
        </Prose>
      </article>
    </Container>
  );
}

