import { Suspense } from 'react';
import { getAllBlogs } from "../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import Loader from './Loader';

async function BlogLoader() {
  const blogs = await getAllBlogs();
  return <Blogs blogs={blogs} />;
}

export function BlogList() {
  return (
    <Suspense fallback={<div><Loader/></div>}>
      <BlogLoader />
    </Suspense>
  );
}

