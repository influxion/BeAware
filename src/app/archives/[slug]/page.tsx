// import NotFound from "./components/NotFound";
import PostPage from "../../../components/archives/index";
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from "@/lib/sanity/client";

async function getProps(params: any) {
  const [settings, { post, morePosts }] = await Promise.all([
    getSettings(),
    getPostAndMoreStories(params.slug),
  ]);

  return {
    post,
    morePosts,
    settings,
  };
}

export default async function PostsSlugPage({ params }: { params: any }) {
  const { settings, post, morePosts } = await getProps(params);

  return <PostPage post={post!} morePosts={morePosts} settings={settings} />;
}

export async function generateStaticParams() {
  const slugs = await getAllPostsSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/archives/${slug}`) || [],
    fallback: "blocking",
  };
}
