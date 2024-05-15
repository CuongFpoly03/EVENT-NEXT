"use client";


import { HeaderLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navitem = () => {
    let pathname = usePathname();
  return (
    <ul className="md:flex-betwen md:flex-row flex flex-col items-start w-full gap-5 ">
      {HeaderLinks.map((link) => {
        const isActive = pathname = link.route;
        return (
          <li
          key={link.route}
          className={`${
            isActive && 'text-primary-500'
          } flex-center p-medium-16 whitespace-nowrap`}
        >
          <Link href={link.route}>{link.label}</Link>
        </li>
        );
      })}
    </ul>
  );
};

export default Navitem;
