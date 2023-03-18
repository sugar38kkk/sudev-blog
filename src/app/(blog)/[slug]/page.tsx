import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { primaryFormatDate } from "../../../utils/formatDate";
import { getPost } from "@/utils/post";
import readingTime from "reading-time";
import { notFound } from "next/navigation";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";

interface IBlogDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: IBlogDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getPost(slug);
  if (!post) notFound();
  return { 
    title: post.title,
    description: post.description,
   }
}

export default async function BlogDetailPage({ params }: IBlogDetailPageProps) {
  const { slug } = params;
  const post = await getPost(slug);
  if (!post) notFound();
  const stats = readingTime(post.mdContent as string);

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="container mx-auto mt-28 max-w-7xl">
          <div className="flex flex-col items-center gap-6">
            <LargeHeading size={"sm"}>{post.title}</LargeHeading>
            <Paragraph>
              {primaryFormatDate(post.publishedDate)} .{" "}
              {Math.ceil(stats.minutes)} phút đọc
            </Paragraph>
            {/* <div className='w-full prose dark:prose-invert prose-slate '
                dangerouslySetInnerHTML={{
                  __html: post.htmlContent as string,
                }}
              /> */}
              <div className='w-full prose dark:prose-invert prose-slate '>
              <Markdown>{post.mdContent || ''}</Markdown>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
