import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "../ui/Button";
import Paragraph from "../ui/Paragraph";
import { BlogPost } from "@/types/blog";

interface IBlogProps {
  blog: BlogPost;
}

const Blog: FC<IBlogProps> = ({ blog }) => {
  const createdDate: Date = new Date(blog.createdAt)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return (
    <article className="relative group">
      <div className="absolute -inset-y-2.5 -inset-x-4 group-hover:bg-slate-100 dark:group-hover:bg-slate-800/50 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6" />
      <div className="relative">
        <Paragraph className="font-semibold text-left text-black truncate dark:text-white">
          {blog.title}
        </Paragraph>
        <div className="z-10 mt-2 mb-4 ">
          <Paragraph className="text-left line-clamp-2" size={"sm"}>
            {
              blog.bodyText
            }
          </Paragraph>
        </div>
        <dl className="">
          <dd className="text-sm leading-6 whitespace-nowrap dark:text-slate-400">
            <time dateTime="2022-09-09T16:24:00.000Z">
              {createdDate.toLocaleDateString('en-US', options)} . 7 phút đọc
            </time>
          </dd>
        </dl>
      </div>
      <Link
        href={`/${blog.id}`}
        className={`${buttonVariants({
          variant: "link",
        })} pl-0`}
      >
        <span className="relative ">
          Đọc thêm
        </span>
        <svg
          className="relative mt-px ml-2.5 overflow-visible "
          width={3}
          height={6}
          viewBox="0 0 3 6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0L3 3L0 6" />
        </svg>
      </Link>
    </article>
  );
};

export default Blog;
