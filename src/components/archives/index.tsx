import { notFound } from "next/navigation";
import MoreStories from "@/components/archives/MoreStories";
import SectionSeparator from "@/components/archives/SectionSeparator";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";
import PostTitle from "./PostTitle";
import type { Post, Settings } from "@/lib/sanity/queries";

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  morePosts: Post[];
  settings: Settings;
}

const NO_POSTS: Post[] = [];

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props;

  const slug = post?.slug;

  if (!slug && !preview) {
    notFound();
  }

  return (
    <main>
      <div className="max-w-7xl mx-auto px-4">
        {preview && !post ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </div>
    </main>
  );
}
