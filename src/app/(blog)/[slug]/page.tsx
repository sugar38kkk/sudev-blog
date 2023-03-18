

import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { primaryFormatDate } from "../../../utils/formatDate";
import { getPost } from "@/utils/post";
import readingTime from "reading-time";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import Code from "@/ui/Code";
import SimpleBar from 'simplebar-react'
interface IBlogDetailPageProps {
  params: {
    slug: string;
  };
}
import {type Language } from 'prism-react-renderer'

export async function generateMetadata({
  params,
}: IBlogDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getPost(slug);
  if (!post) notFound();
  return {
    title: post.title,
    description: post.description,
  };
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
            <div className="w-full prose dark:prose-invert prose-slate ">
              {/* <Markdown>{post.mdContent || ''}</Markdown> */}
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <div className="p-6 mt-2 border rounded-md border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-900">
                      <Code
                        animated
                        language={match[1] as Language}
                        show
                        code={String(children).replace(/\n$/, "")}
                      />
                      </div>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {post.mdContent || ""}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
