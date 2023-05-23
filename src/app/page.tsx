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

  console.log("featuredPost", featuredPost);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="relative mt-72 mb-48 md:w-1/2 flex flex-col gap-2 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <h1 className="font-bold text-4xl md:text-6xl">Be Aware!</h1>
        <p className="dark:text-white/75 text-black/75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          odio natus laudantium corporis quia alias molestiae nostrum nesciunt
          obcaecati ad? Neque laudantium voluptate deleniti eveniet, praesentium
          amet ipsam tenetur cum.
        </p>
        <Link
          href="/archives"
          className="py-2 px-4 w-fit mt-2 rounded-md dark:bg-white dark:text-black text-white bg-black z-10"
        >
          View all posts
        </Link>
      </div>
      <div className="w-full mb-48">
        <h4 className="text-center text-2xl md:text-3xl font-light underline mb-8">
          Featured
        </h4>
        <Link
          href={`/archives/${featuredPost.slug}`}
          className="flex md:flex-row flex-col gap-4 items-center border p-4 rounded-md hover:scale-105 transition-all duration-300 ease-in-out focus:scale-105"
        >
          <Image
            className="object-contain rounded !max-h-[200px] !w-1/2 select-none pointer-events-none !relative"
            fill
            alt={`Cover Image for ${featuredPost.title}`}
            src={urlForImage(featuredPost.coverImage).url()}
          />
          <div className="flex flex-col gap-1 w-full">
            <h3 className="md:text-2xl text-xl font-semibold">
              {featuredPost.title}
            </h3>
            <p className="dark:text-white/50 text-black/50">
              {new Date(featuredPost.date as string).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }
              )}
            </p>
            <p className="dark:text-white/75 text-black/75">
              {featuredPost.excerpt}
            </p>
          </div>
        </Link>
      </div>
      <div className="border-t py-24 flex flex-col gap-4">
        {posts
          .filter((post) => post.slug !== featuredPost.slug)
          .map((post) => (
            <Link
              href={`/archives/${post.slug}`}
              className="flex md:flex-row flex-col gap-4 items-center border p-4 rounded-md hover:scale-105 transition-all duration-300 ease-in-out focus:scale-105"
            >
              <Image
                className="object-contain rounded !max-h-[200px] !w-1/2 select-none pointer-events-none !relative"
                fill
                alt={`Cover Image for ${post.title}`}
                src={urlForImage(post.coverImage).url()}
              />
              <div className="flex flex-col gap-1 w-full">
                <h3 className="md:text-2xl text-xl font-semibold">
                  {post.title}
                </h3>
                <p className="dark:text-white/50 text-black/50">
                  {new Date(post.date as string).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p className="dark:text-white/75 text-black/75">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
