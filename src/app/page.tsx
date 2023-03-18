import ListBlog from "@/components/ListBlog";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { getBlogs } from "@/server/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SuDev Blog | Home",
  description: "Free & open-source text similarity API",
};

export default async function Home() {
  
  
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <div className="container mx-auto mt-28 max-w-7xl">
        <div className="flex flex-col items-center gap-6">
          <LargeHeading>SuDev Blog</LargeHeading>
          <Paragraph>
            Không có gì ngoài các bài viết chất lượng, chuyên sâu.
          </Paragraph>
          <ListBlog />
        </div>
      </div>
    </div>
  );
}
