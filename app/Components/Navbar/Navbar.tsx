"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocationsOpenDesktop, setIsLocationsOpenDesktop] = useState(false);
  const [isLocationsOpenMobile, setIsLocationsOpenMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Refs for smooth dropdowns
  const desktopRef = useRef<HTMLDivElement>(null);
  const desktopContentRef = useRef<HTMLDivElement>(null);
  const [desktopHeight, setDesktopHeight] = useState(0);

  const mobileRef = useRef<HTMLDivElement>(null);
  const mobileContentRef = useRef<HTMLDivElement>(null);
  const [mobileHeight, setMobileHeight] = useState(0);

  const navItems = [
    { label: "Joint- Replacement", href: "/joint-replacement" },
    { label: "Patient Resources", href: "/patient-resources" },
    { label: "Patient Stories", href: "/patient-stories" },
    { label: "Blog", href: "/blog" },
  ];

  const locationsDropdown = [
    { label: "Apollo", href: "/locations/apollo" },
    { label: "Channapatna", href: "/locations/channapatna" },
    { label: "Vydehi", href: "/locations/vydehi" },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsLocationsOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsLocationsOpenDesktop(false);
    setIsLocationsOpenMobile(false);
  }, [pathname]);

  // Measure heights dynamically
  useEffect(() => {
    if (desktopContentRef.current) {
      setDesktopHeight(desktopContentRef.current.scrollHeight);
    }
  }, [isLocationsOpenDesktop]);

  useEffect(() => {
    if (mobileContentRef.current) {
      setMobileHeight(mobileContentRef.current.scrollHeight);
    }
  }, [isLocationsOpenMobile]);

  return (
    <header className="bg-white w-full z-100 font-montserrat shadow-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto">
        {/* Logo */}
        <Link href="/" passHref>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3918405b6a78d82918b0c234d51615bcae88a442"
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

          {/* Desktop Locations Dropdown with smooth animation */}
          <div
            className="relative px-2 py-1 hover:text-blue-600 cursor-pointer"
            onMouseEnter={() => setIsLocationsOpenDesktop(true)}
            onMouseLeave={() => setIsLocationsOpenDesktop(false)}
          >
            <Link href='/locations'>
              Locations
            </Link>
            <div
              ref={desktopRef}
              style={{
                height: isLocationsOpenDesktop ? `${desktopHeight}px` : "0px",
                overflow: "hidden",
                transition:
                  "height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.3s ease",
                opacity: isLocationsOpenDesktop ? 1 : 0,
                zIndex: 9999
              }}
              className="absolute top-full left-0 bg-white shadow-md rounded-md text-black w-48"
            >
              <div ref={desktopContentRef} className="py-2">
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
            </div>
          </div>

          <Link
            href="/book-consultation"
            className="bg-blue-700 text-white px-5 py-2 rounded-[10px] hover:bg-blue-800"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-black"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          ref={menuRef}
          className="md:hidden bg-white px-6 py-4 space-y-4 text-lg font-semibold text-black"
        >
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="block"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Mobile Locations - Smooth Inline Expansion */}
          <div>
            <button
              onClick={() => setIsLocationsOpenMobile((prev) => !prev)}
              className="w-full text-left"
            >
              Locations
            </button>
            <div
              className="relative p-3 rounded-2xl"
              ref={mobileRef}
              style={{
                height: isLocationsOpenMobile ? `${mobileHeight + 20}px` : "0px",
                overflow: "hidden",
                transition:
                  "height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.3s ease",
                opacity: isLocationsOpenMobile ? 1 : 0,
                boxShadow: isLocationsOpenMobile
                  ? "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                  : "none",
              }}
            >
              <div ref={mobileContentRef} className=" space-y-2">
                {locationsDropdown.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block text-base font-semibold hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/book-consultation"
            className="block bg-blue-700 text-white px-5 py-2 rounded-[10px] text-center hover:bg-blue-800"
            onClick={() => setIsOpen(false)}
          >
            Book Consultation
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
