import { FC } from "react";
import Blog from "@/components/Blog";
import { Post } from "@/interfaces/post";

interface IListBlogProps {
  blogs: Post[];
}

const ListBlog: FC<IListBlogProps> = ({ blogs }) => {
  return (
    <div className="w-full max-w-2xl space-y-16">
      {blogs &&
        blogs.length > 0 &&
        blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
    </div>
  );
};

export default ListBlog;
