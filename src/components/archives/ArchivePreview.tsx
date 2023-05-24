import { urlForImage } from "@/lib/sanity/image";
import { Post } from "@/lib/sanity/queries";
import Image from "next/image";
import Link from "next/link";

export default function ArchivePreview({ post }: { post: Post }) {
  return (
    <Link
      href={`/archives/${post.slug}`}
      key={post._id}
      className="border border-gray-200/50 rounded-md flex flex-col relative hover:scale-[101%] transition-all duration-300 ease-in-out focus:scale-[101%] hover:outline focus:outline outline-1"
    >
      <div className="relative">
        <Image
          className="object-fill rounded-md-t !h-fit max-h-[400px] select-none pointer-events-none !relative"
          fill
          alt={`Cover Image for ${post.title}`}
          src={urlForImage(post.coverImage).url()}
        />
        <div className="bg-gradient-to-t absolute -bottom-1 w-full h-2/3 from-black"></div>
        <h2 className="p-6 absolute bottom-0 text-xl font-semibold">
          {post.title}
        </h2>
      </div>
      <div className="p-6 flex flex-col gap-1">
        <p className="dark:text-white/50 text-black/50">
          {new Date(post.date as string).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className="">{post.excerpt}</p>
      </div>
    </Link>
  );
}
