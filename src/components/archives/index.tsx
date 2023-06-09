import { notFound } from "next/navigation";
import MoreStories from "@/components/archives/MoreStories";
import SectionSeparator from "@/components/archives/SectionSeparator";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";
import Title from "../global/Title";
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
  console.log(post);

  return (
    <main>
      <div className="max-w-7xl mx-auto px-4">
        {preview && !post ? (
          <Title>Loading…</Title>
        ) : (
          <>
            <article>
              <PostHeader
                coverImage={post.coverImage}
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
