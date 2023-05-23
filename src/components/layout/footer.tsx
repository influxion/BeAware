import Link from "next/link";
import Search from "./search";

export default function Footer() {
  return (
    <nav className="max-w-7xl p-4 mx-auto">
      <div className="flex justify-between items-center whitespace-nowrap md:text-xl text-base">
        <Link href="/" className="font-bold">
          Be Aware!
        </Link>
        <div className="flex md:gap-4 gap-2 items-center text-xs md:text-sm">
          <p>
            Made by <span className="font-bold">Jordon Nichols</span>
          </p>
        </div>
      </div>
    </nav>
  );
}
