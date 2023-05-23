import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue } = searchParams as { [key: string]: string };
  // const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  // const products = await getProducts({ sortKey, reverse, query: searchValue });
  // const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <Suspense>
      <p>{searchValue}</p>
    </Suspense>
  );
}
