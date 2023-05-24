"use client";

import { useRouter, useSearchParams } from "next/navigation";

import SearchIcon from "@/components/icons/search";
import { useRef, useState } from "react";

export default function Search() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  function onSubmit(e: any) {
    e.preventDefault();

    const search = inputRef.current;

    if (search && search.value) {
      router.push(`/search?q=${search.value}`);
    } else {
      router.push(`/search`);
    }
    if (search) {
      search.value = "";
      search.blur();
    }
    setSearchBarOpen(false);
  }

  function onClick() {
    if (searchBarOpen && inputRef?.current?.value) {
      onSubmit(new Event("submit", { bubbles: true, cancelable: true }));
    } else {
      setSearchBarOpen(!searchBarOpen);
      if (!searchBarOpen && inputRef.current) {
        inputRef.current.focus();
      }
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative m-0 flex w-full items-center justify-end bg-transparent p-0"
    >
      <label
        htmlFor="search"
        className="relative flex h-full w-full items-center duration-200 justify-end"
      >
        <input
          ref={inputRef}
          type="text"
          name="search"
          placeholder="Search archives..."
          autoComplete="off"
          className={`w-0 duration-200 placeholder:invisible dark:border-black rounded-md border py-2 border-gray-200 text-black dark:bg-black dark:text-gray-100 ${
            searchBarOpen
              ? "!w-full !border-gray-500 placeholder:!visible px-4"
              : ""
          }`}
        />
        <button
          onClick={onClick}
          type="button"
          className="absolute h-6 w-6 mr-1 left-auto right-0"
        >
          <SearchIcon className="h-full w-full" />
        </button>
      </label>
    </form>
  );
}
