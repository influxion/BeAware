import { Post } from "@/lib/sanity/queries";
import ArchivePreview from "./ArchivePreview";
import Link from "next/link";

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter lg:text-7xl">
        More Archives
      </h2>
      <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-12 md:mb-24">
        {posts
          .filter((_, i) => i < 5)
          .map((post) => (
            <ArchivePreview key={post._id} post={post} />
          ))}
        <Link
          href="/archives"
          className="border border-gray-200/50 rounded-md flex flex-col relative hover:scale-[101%] transition-all duration-300 ease-in-out focus:scale-[101%] h-full justify-center items-center p-6 hover:outline focus:outline outline-1"
        >
          <p className="px-4 py-2 dark:bg-white dark:text-black rounded-md">
            Browse all archives
          </p>
        </Link>
      </div>
    </section>
  );
}
