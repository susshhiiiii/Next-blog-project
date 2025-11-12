"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./dark-mode-toggle";

const data = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    title: "About",
    link: "/about",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    link: "/dashboard",
  },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex py-5 justify-between">
      <div>
        <Link className="font-bold" href={"/"}>
          lamania
        </Link>
      </div>
      <div className="flex md:flex-row flex-col">
        <DarkModeToggle/>
        {data.map((link) => {
          const isActive=pathname===link.link;
          return (<Link key={link.id} className={`${isActive?"text-green-300":""} ms-2`} href={link.link}>
            {link.title}
          </Link>);
        })}
        <button className="ms-2">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
