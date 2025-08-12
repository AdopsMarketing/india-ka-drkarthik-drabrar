import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1d2733] w-full flex flex-col items-center font-poppins px-4 py-6 md:py-10">
      <div className="container mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 py-10">
          {/* Quick Links */}
          <nav className="flex-1 text-white text-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/joint-replacement" className="hover:text-blue-300 transition-colors">Joint-Replacement Care</Link>
              </li>
              <li>
                <Link href="/patient-resources" className="hover:text-blue-300 transition-colors">Patient Resources</Link>
              </li>
              <li>
                <Link href="/book-consultation" className="hover:text-blue-300 transition-colors">Locations & Appointments</Link>
              </li>
              <li>
                <Link href="/patient-stories" className="hover:text-blue-300 transition-colors">Patient Stories</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-300 transition-colors">Blog</Link>
              </li>
              <li>
                <Link
                  href="/book-consultation"
                  className="text-[#5ab8d0] hover:text-blue-300 transition-colors"
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex-1 text-white text-lg">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                Phone:
                <Link href="tel:+91-8618352089" className="hover:text-blue-300 transition-colors">
                  +91-8618352089
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/8618352089" className="text-[#3dbe84] hover:text-green-300 transition-colors">
                  WhatsApp
                </Link>
              </li>
              <li>
                Email:
                <Link href="mailto:drkarthikms1@gmail.com" className="hover:text-blue-300 transition-colors">
                  drkarthikms1@gmail.com
                </Link>
              </li>
              <li className="font-semibold mt-4">Clinics:</li>
              <li>
                <address className="not-italic">
                  SAI Hospital, Channapatna
                  <br />
                  Vydehi Hospital, Bengaluru (Mon & Sat evenings)
                </address>
              </li>
            </ul>
          </div>

          {/* Languages & Disclaimer */}
          <div className="flex-1 text-white text-lg">
            <h3 className="text-xl font-semibold mb-4">Languages & Disclaimer</h3>
            <p className="mb-2">Languages Spoken: ಕನ್ನಡ | English</p>
            <p>
              Disclaimer: This website is for informational purposes only. It
              does not replace medical advice. Consult a qualified physician for
              diagnosis and treatment.
            </p>
          </div>
        </div>

        <div className="h-px bg-white w-full my-4"></div>

        <div className="text-white text-center text-xl font-semibold mt-6">
          © 2025 Dr. Karthik M S. All rights reserved.
        </div>

        <div className="flex justify-center gap-5 text-white text-lg mt-4">
          <a href="#" className="hover:text-blue-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
