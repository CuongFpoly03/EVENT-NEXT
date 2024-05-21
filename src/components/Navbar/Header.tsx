"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Navitem from "./navitem";
import Navmobile from "./Navmobile";
import { signOut, useSession } from "next-auth/react";
import { InfoPerson } from "./infoPerson";
const Header = () => {
  const { data: session }: any = useSession();
  return (
    <header className="w-full border-b">
      <div className="wapper flex items-center justify-between">
        <Link href="/" className="pl-[12%] py-4 ">
          <Image src="/icons/logo.svg" alt="logo" width={128} height={38} />
        </Link>
        <div className="md:flex-between hidden w-full max-w-xs">
          {!session ? <></> : <Navitem />}
        </div>
        <div className="flex w-32 pr-[6%] justify-end gap-3 ">
          <Navmobile />
          {!session ? (
            <>
              <Button className="rounded-full">
                <Link href="/sign-in">Login</Link>
              </Button>
            </>
          ) : (
            <InfoPerson />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
