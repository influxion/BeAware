import { urlForImage } from "@/lib/sanity/image";
import { Post } from "@/lib/sanity/queries";
import Image from "next/image";
import Link from "next/link";

export default function ArchivePreview({ post }: { post: Post }) {
  return (
    <Link
      href={`/archives/${post.slug}`}
      key={post._id}
      className="border border-gray-200 rounded flex flex-col relative hover:scale-[101%] transition-all duration-300 ease-in-out focus:scale-[101%]"
    >
      <Image
        className="object-fill rounded !h-fit max-h-[400px] select-none pointer-events-none !relative"
        fill
        alt={`Cover Image for ${post.title}`}
        src={urlForImage(post.coverImage).url()}
      />
      <div className="p-6 flex flex-col gap-1">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="dark:text-white/50 text-black/50">
          {new Date(post.date as string).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className="dark:text-white/75 text-black/75">{post.excerpt}</p>
        {post?.category ? (
          <p className="text-sm dark:text-white/50 text-black/50">
            Posted in:{" "}
            <span className="font-bold">{post?.category?.title}</span>
          </p>
        ) : null}
      </div>
    </Link>
  );
}
