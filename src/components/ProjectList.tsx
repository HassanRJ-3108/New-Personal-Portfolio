import { Suspense } from 'react';
import { Products } from "@/components/Products";
import { client } from "@/sanity/lib/client";
import Loader from './Loader';

async function ProjectLoader() {
  const products = await client.fetch(`
    *[_type == "project"]{
      _id,
      title,
      slug,
      href,
      description,
      "thumbnail": thumbnail.asset->url,
      stack
    }
  `);
  return <Products products={products} />;
}

export function ProjectList() {
  return (
    <Suspense fallback={<div><Loader/></div>}>
      <ProjectLoader />
    </Suspense>
  );
}

