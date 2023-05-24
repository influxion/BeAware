import Link from "next/link";
import Search from "./search";

export default function Footer() {
  return (
    <footer className="max-w-7xl p-4 mx-auto">
      <div className="flex justify-between items-center whitespace-nowrap md:text-xl text-base">
        <div className=" before:absolute before:h-[30px] before:w-[48px] before:duration-300 hover:before:translate-x-1/3 after:duration-300 hover:after:-translate-x-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-lg before:content-[''] before:-z-20 after:absolute after:-z-20 after:h-[36px] after:-translate-x-2/3 after:w-[24px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-lg after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-75 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-75 before:lg:h-[36px]">
          <Link href="/" className="font-bold">
            Be Aware!
          </Link>
        </div>
        <div className="flex md:gap-4 gap-2 items-center text-xs md:text-sm">
          <p>
            Made by <span className="font-bold">Jordon Nichols</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
