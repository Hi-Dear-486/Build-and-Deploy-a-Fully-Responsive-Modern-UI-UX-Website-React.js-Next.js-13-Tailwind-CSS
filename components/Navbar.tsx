import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/contants";
const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"}>
        <Image
          src={"/hilink-logo.svg"}
          alt="logo"
          width={74}
          height={29}
          className="w-auto h-auto"
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <button className="bg-gray-800 text-white hover:bg-gray-400  font-bold py-2 px-4 rounded inline-flex items-center">
          <Image src="/user.svg" alt="login" width={12} height={12} />
          <span className="ml-2">Login</span>
        </button>
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
