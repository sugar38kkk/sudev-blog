import ListBlog from "@/components/ListBlog";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { getPostList } from "@/utils/post";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SuDev Blog | Home",
  description: "Free & open-source text similarity API",
};

export default async function Home() {
  const postList = await getPostList()
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <div className="container mx-auto mt-24 max-w-7xl">
        <div className="flex flex-col items-center gap-6">
          <LargeHeading>SuDev Blog</LargeHeading>
          <Paragraph>
            Không có gì ngoài các bài viết chất lượng, chuyên sâu.
          </Paragraph>
          <ListBlog blogs={postList} />
        </div>
      </div>
    </div>
  );
}
