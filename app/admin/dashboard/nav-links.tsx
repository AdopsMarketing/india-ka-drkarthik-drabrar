import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    href: "/admin/dashboard",
    text: "Post Blogs",
    // icon: (
    //   <AccountDetailsIcon />
    // ),
  },
];

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string | string[]) =>
    Array.isArray(path) ? path.includes(pathname) : pathname === path;

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex h-[48px] gap-5 grow items-center justify-center rounded-md !p-3 text-base font-medium hover:bg-green-400 md:flex-none md:justify-start md:p-2 md:px-3 ${isActive(link.href) ? 'bg-green-400' : ''}`}
        >
          {/* {link.icon} */}
          <p className="hidden md:block">{link.text}</p>
        </Link>
      ))}
    </>
  );
};


export default NavLinks;