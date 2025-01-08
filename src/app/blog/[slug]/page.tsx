import { client } from '@/sanity/lib/client'
import { BlogLayout } from '@/components/BlogLayout'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// Fetch blog post data based on slug
async function getBlogPost(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    title,
    description,
    date,
    "slug": slug.current,
    image,
    tags,
    content
  }`

  const post = await client.fetch(query, { slug })
  if (post) {
    return {
      ...post,
      image: post.image, 
    }
  }
  return null
}

// Static params for generating the list of slugs
export async function generateStaticParams() {
  const query = `*[_type == "blog"]{ "slug": slug.current }`
  const slugs = await client.fetch(query)
  return slugs.map((slug: any) => ({ slug: slug.slug }))
}

// Dynamic SEO metadata generation based on post content
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The blog post you are looking for does not exist.",
    }
  }

  return {
    title: `${post.title} | Hassan Rajput`,
    description: post.description || `${post.title} - A detailed exploration of the topic.`,
    keywords: post.tags.join(', ') || 'tech, development, programming',
    openGraph: {
      title: `${post.title} | Hassan Rajput`,
      description: post.description || `${post.title} - A detailed exploration of the topic.`,
      url: `https://hassanrj.vercel.app/blog/${post.slug}`,
      images: post.image || 'https://hassanrj.vercel.app/images/pic.jpg', // Provide a fallback image
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Hassan Rajput`,
      description: post.description || `${post.title} - A detailed exploration of the topic.`,
      images: post.image || 'https://hassanrj.vercel.app/images/pic.jpg',
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogLayout blog={post} />
}
