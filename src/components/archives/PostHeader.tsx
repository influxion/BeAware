import { parseISO, format } from "date-fns";
import Title from "../global/Title";
import type { Post } from "@/lib/sanity/queries";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";

export default function PostHeader(
  props: Pick<Post, "title" | "date" | "author" | "coverImage">
) {
  const { title, date, author, coverImage } = props;
  const parsedDate = parseISO(date as string);
  return (
    <>
      <div className="relative mb-8">
        <Title className="md:absolute bottom-0 md:p-8 md:mb-0 mb-8 mt-4 p-2 z-10">
          {title} Lorem ipsum dolor sit, amet consectetur adipisicing elitatque
          repellat, a pariatur?
        </Title>
        <Image
          className="rounded-md object-fill !h-fit max-h-fit select-none pointer-events-none !relative"
          fill
          alt={`Cover Image for ${title}`}
          src={urlForImage(coverImage).url()}
        />
        <div className="md:absolute md:block hidden bottom-0 h-2/3 w-full bg-gradient-to-t from-black"></div>
      </div>
      <div className="mx-auto max-w-2xl mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="block">
            <p className="lg:text-xl text-base">{author?.name}</p>
          </div>
          <div className="lg:text-xl text-base">
            {format(parsedDate, "LLLL	d, yyyy")}
          </div>
        </div>
        <div className="border border-gray-200/50 rounded-full"></div>
      </div>
    </>
  );
}
