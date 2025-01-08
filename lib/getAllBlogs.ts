import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export async function getAllBlogs() {
  const blogs = await client.fetch(`
    *[_type == "blog"] | order(date desc) {
      title,
      description,
      date,
      "slug": slug.current,
      image,
      tags
    }
  `)

  return blogs.map((blog: any) => ({
    ...blog,
    image: urlFor(blog.image).url(),
  }))
}

