import ArchivePreview from "@/components/archives/ArchivePreview";
import Title from "@/components/global/Title";
import { getAllPosts } from "@/lib/sanity/client";
import { Post } from "@/lib/sanity/queries";

export default async function ArchivesPage() {
  const posts: Post[] = await getAllPosts();

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Title>Archives</Title>
      <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-12 md:mb-24">
        {posts.map((post) => (
          <ArchivePreview post={post} />
        ))}
      </div>
    </div>
  );
}
