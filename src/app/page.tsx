import Title from "@/components/global/Title";
import { getAllPosts } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { Post } from "@/lib/sanity/queries";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts: Post[] = await getAllPosts();
  const featuredPost = posts.reduce((recent, post) =>
    new Date(recent.date as string) > new Date(post.date as string)
      ? recent
      : post
  );

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="relative md:mt-72 mt-48 md:mb-48 mb-24 md:w-1/2 flex flex-col gap-2 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Title className="!m-0">Be Aware!</Title>
        <p className="text-xs">
          By: <span className="font-bold">Jordon Nichols</span>
        </p>
        <p className="dark:text-white/75 text-black/75">
          The vastness of cybersecurity can be overwhelming. Here you will find
          core resources to help protect youself or your business from web
          vunerabilites, physical vunerabilites, active scams, and more.
        </p>
        <Link
          href="/archives"
          className="py-2 px-4 w-fit mt-4 rounded-md dark:bg-white dark:text-black text-white bg-black z-10 hover:scale-105 transition-all duration-300 ease-in-out focus:scale-105 mx-auto md:mx-0"
        >
          All Archives
        </Link>
      </div>
      <div className="w-full mb-24">
        <h4 className="text-center text-3xl lg:text-5xl font-bold mb-8">
          Featured
        </h4>
        <HomePageArchivePreview key={featuredPost._id} post={featuredPost} />
      </div>
      {posts.length > 1 ? (
        <div className="border-t py-24">
          <h4 className="text-center text-3xl lg:text-5xl font-bold mb-8">
            More Archives
          </h4>
          <div className="flex flex-col gap-4">
            {posts
              .filter((post, i) => post.slug !== featuredPost.slug && i < 6)
              .map((post) => (
                <HomePageArchivePreview key={post._id} post={post} />
              ))}
            {posts.length > 6 ? (
              <Link
                href="/archives"
                className="flex md:flex-row flex-col gap-4 items-center border p-4 rounded-md hover:scale-[101%] transition-all duration-300 ease-in-out focus:scale-[101%] justify-center hover:outline focus:outline outline-1"
              >
                <p>Browse all archives</p>
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function HomePageArchivePreview({ post }: { post: Post }) {
  return (
    <Link
      href={`/archives/${post.slug}`}
      className="flex md:flex-row flex-col gap-4 items-center border border-gray-200/50 rounded-md hover:scale-[101%] transition-all duration-300 ease-in-out focus:scale-[101%] hover:outline focus:outline outline-1"
    >
      <div className="w-1/3">
        <Image
          className="object-fit rounded-md-l  !w-full mr-auto select-none pointer-events-none !relative"
          fill
          alt={`Cover Image for ${post.title}`}
          src={urlForImage(post.coverImage).url()}
        />
      </div>
      <div className="flex flex-col gap-1 w-2/3 p-6">
        <h3 className="md:text-2xl text-xl font-semibold">{post.title}</h3>
        <p className="dark:text-white/50 text-black/50">
          {new Date(post.date as string).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className="dark:text-white/75 text-black/75">{post.excerpt}</p>
      </div>
    </Link>
  );
}
