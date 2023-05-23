import ArchivePreview from "@/components/archives/ArchivePreview";
import { getAllPosts } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { Post } from "@/lib/sanity/queries";
import Image from "next/image";
import Link from "next/link";

export default async function ArchivesPage() {
  const posts: Post[] = await getAllPosts();

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="lg:text-8xl md:text-6xl text-4xl text-center font-bold my-12 md:my-24">
        Archives
      </h1>
      <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-12 md:mb-24">
        {posts.map((post) => (
          <ArchivePreview post={post} />
        ))}
      </div>
    </div>
  );
}
