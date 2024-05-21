"use client";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function InfoPerson() {
  const { data: session }: any = useSession();
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src="/images/test.jpg"
          className="rounded-full h-10 w-10"
          alt="avatar"
          width={20}
          height={5}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem onCheckedChange={setShowStatusBar}>
          <div className="">
            <li className="list-none font-bold text-sx">
              {" "}
              {session.user?.email}
            </li>
            <ul
              onClick={() => {
                signOut();
              }}
              className="py-4 font-bold list-none "
            >
              Logout
            </ul>
          </div>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
