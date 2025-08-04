import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="space-x-6 text-sm font-medium">
          <Link href="#">
            <span className="text-blue-600">Joint-Replacement Care</span>
          </Link>
          <Link href="#">Patient Resources</Link>
          <Link href="#">Locations</Link>
          <Link href="#">Patient Stories</Link>
          <Link href="#">Blog</Link>
          <Link href="#">
            <span className="bg-blue-600 text-white px-3 py-1 rounded">
              Book Consultation
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
