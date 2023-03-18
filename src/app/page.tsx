import ListBlog from "@/components/ListBlog";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { getPostList } from "@/utils/post";
import type { Metadata } from "next";
import Logo from './favicon.ico'

export const metadata: Metadata = {
  title: "SuDev Blog | Kiến thức lập trình chuyên sâu",
  description: "Blog về các kỹ thuật lập trình, blockchain, marketing được cập nhật liên tục bởi SuDev Blog",
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
