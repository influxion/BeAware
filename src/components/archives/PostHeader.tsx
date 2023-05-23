import { parseISO, format } from "date-fns";
import PostTitle from "./PostTitle";
import type { Post } from "@/lib/sanity/queries";

export default function PostHeader(
  props: Pick<Post, "title" | "date" | "author">
) {
  const { title, date, author } = props;
  const parsedDate = parseISO(date as string);
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="mx-auto max-w-2xl mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="block">
            <p className="lg:text-xl text-base">{author?.name}</p>
          </div>
          <div className="lg:text-xl text-base">
            {format(parsedDate, "LLLL	d, yyyy")}
          </div>
        </div>
        <div className="border-b rounded-full"></div>
      </div>
    </>
  );
}
