import React from "react";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Clinics</h4>
          <p>SAI Hospital, Channapatna (Full-time)</p>
          <p>Vydehi Hospital, Bengaluru (Mon &amp; Sat evenings)</p>
          <p>Apollo 24/7 – Teleconsultant</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Email: info@drkarthikms.com</p>
          <p>Languages Spoken: ಕನ್ನಡ | English</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        &copy; 2025 Dr. Karthik M S. All rights reserved. This website is for
        informational purposes only and does not replace medical advice.
      </div>
    </footer>
  );
};

export default Footer;
