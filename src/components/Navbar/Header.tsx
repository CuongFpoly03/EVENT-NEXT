import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navitem from "./navitem";
import { Button } from "../ui/button";
import Navmobile from "./Navmobile";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wapper flex items-center justify-between">
        <Link href="/" className="pl-[12%] py-4 ">
          <Image src="/icons/logo.svg" alt="logo" width={128} height={38} />
        </Link>

        <SignedIn>
          <nav className="md:flex-between text-center hidden w-full max-w-xs">
            <Navitem />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end pr-[12%] py-4 gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <Navmobile />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
