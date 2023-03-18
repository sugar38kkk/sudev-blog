"use client"
import { FC } from "react";
import Blog from "@/components/Blog";
import { BlogPost } from "@/types/blog";
import { getBlogs } from "@/server/blog";

interface IListBlogProps {
}

export default async function ListBlog(){
  const blogs = await getBlogs();
  return (
    <div className="w-full max-w-2xl space-y-16">
      {
        blogs && blogs.length > 0 && blogs.map((blog) => <Blog key={blog.id} blog={blog} />)
      }
    </div>
  );
};

