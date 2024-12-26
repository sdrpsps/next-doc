import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./search-input";
import { UserButton } from "@clerk/clerk-react";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6">
        <Link href="/">
          <Image
            className="w-12 h-auto"
            src="/logo.svg"
            alt="logo"
            width={0}
            height={0}
          />
        </Link>
        <h3 className="text-lg font-semibold">Docs</h3>
      </div>
      <SearchInput />
      <UserButton />
    </nav>
  );
};
