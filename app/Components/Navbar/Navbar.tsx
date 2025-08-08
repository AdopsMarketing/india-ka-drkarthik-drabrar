"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For route changes (if using Next 13+)
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocationsOpenDesktop, setIsLocationsOpenDesktop] = useState(false);
  const [isLocationsOpenMobile, setIsLocationsOpenMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Optional: for Next.js route changes

  const navItems = [
    { label: "Joint- Replacement", href: "/joint-replacement" },
    { label: "Patient Resources", href: "/patient-resources" },
    { label: "Patient Stories", href: "/patient-stories" },
    { label: "Blog", href: "/blog" },
  ];

  const locationsDropdown = [
    { label: "Channapatna", href: "/locations/channapatna" },
    { label: "Vydehi", href: "/locations/vydehi" },
    { label: "Apollo", href: "/locations/apollo" },
  ];

  // Click outside mobile menu (when open)
  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsLocationsOpenMobile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close menus when route changes (optional, for Next.js navigation)
  useEffect(() => {
    setIsOpen(false);
    setIsLocationsOpenDesktop(false);
    setIsLocationsOpenMobile(false);
  }, [pathname]);

  return (
    <header className="bg-white w-full z-100 font-montserrat shadow-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto ">
        {/* Logo */}
        <Link href="/" passHref>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3918405b6a78d82918b0c234d51615bcae88a442?placeholderIfAbsent=true"
            alt="Dr. Karthik M S Logo"
            className="w-20 h-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 lg:gap-6 items-center text-base lg:text-lg font-semibold text-black">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="px-2 py-1 hover:text-blue-600"
            >
              {label}
            </Link>
          ))}

          {/* Locations with dropdown */}
          {/* Desktop Locations Dropdown */}
          <div
            className="relative px-2 py-1 hover:text-blue-600 cursor-pointer"
            onMouseEnter={() => setIsLocationsOpenDesktop(true)}
            onMouseLeave={() => setIsLocationsOpenDesktop(false)}
            style={{ zIndex: 9999 }} // or add 'z-50' to your className in tailwind
          >
            Locations
            {isLocationsOpenDesktop && (
              <div className="absolute top-full left-0 z-50 bg-white shadow-md rounded-md text-black w-48">
                {locationsDropdown.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/book-consultation"
            className="bg-blue-700 text-white px-5 py-2 rounded-[10px] hover:bg-blue-800"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-black"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          ref={menuRef}
          className="md:hidden bg-white px-6 py-4 space-y-4 text-lg font-semibold text-black menu-container"
        >
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="block"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {label}
            </Link>
          ))}

          {/* Locations in mobile menu */}
          <div className="relative">
            <button
              onClick={() => setIsLocationsOpenMobile((prev) => !prev)}
              className="w-full text-left px-4 py-2"
            >
              Locations
            </button>
            {isLocationsOpenMobile && (
              <div className="absolute top-full left-0 bg-white shadow-md mt-2 rounded-md text-black w-full">
                {locationsDropdown.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)} // Close the main menu
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/book-consultation"
            className="block bg-blue-700 text-white px-5 py-2 rounded-[10px] text-center hover:bg-blue-800"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            Book Consultation
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
