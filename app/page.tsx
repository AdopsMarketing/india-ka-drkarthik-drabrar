// app/page.tsx or pages/index.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans antialiased text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          "Move freely, live fully."
        </h1>
        <p className="text-xl text-gray-600 mb-6">1,500+ 5-star reviews</p>
        <blockquote className="italic text-lg max-w-xl mx-auto">
          "Three months after surgery I walked to my fields without pain." – Mr.
          Ramesh K.
        </blockquote>
      </section>
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Why choose Dr. Karthik, not just the hospital
            </h2>
            <p className="text-lg mb-4">
              For more than a decade, Dr. Karthik has helped farmers, teachers
              and athletes alike return to the lives they love.
              Fellowship-trained in joint replacements and arthroscopy, he has
              performed 1,500+ procedures with a 98% satisfaction rate. Modern
              implants today last 15+ years in over 90% of patients — giving
              confidence that one operation can provide long-term relief.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Personal surgeon contact – from first visit to final rehab
              </li>
              <li>Only full-time specialist within 40 km of Channapatna</li>
              <li>Bilingual care team – Kannada &amp; English</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Dr. Karthik M S</h3>
            <p className="text-gray-600 mb-2">
              Knee &amp; Hip Replacement Surgeon, Orthopaedics
            </p>
            <p className="text-gray-600">Channapatna | Bengaluru</p>
            <div className="mt-4 space-x-4">
              <Link href="#">
                <span className="bg-blue-600 text-white px-4 py-2 rounded">
                  Book Consultation
                </span>
              </Link>
              <Link href="#">
                <span className="bg-green-500 text-white px-4 py-2 rounded">
                  WhatsApp Chat
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto text-center grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-3xl font-bold">1,500+</p>
            <p>Procedures</p>
          </div>
          <div>
            <p className="text-3xl font-bold">98%</p>
            <p>Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl font-bold">15+</p>
            <p>Years Exp</p>
          </div>
          <div>
            <p className="text-lg italic">
              "Personal care that goes beyond surgery."
            </p>
          </div>
        </div>
      </section>
      {/* Patient Journey Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to start your journey?
          </h2>
          <p className="mb-6">
            Book your consultation today and take the first step towards
            pain-free movement. Same-day diagnosis available at our Channapatna
            facility.
          </p>
          <Link href="#">
            <span className="bg-blue-600 text-white px-6 py-3 rounded">
              Book Consultation
            </span>
          </Link>
          <p className="mt-4 text-gray-600">Call Now: 080-xxx-xxx</p>
        </div>
      </section>
      {/* 4-Step Process Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold">1. Same-day diagnosis</h3>
            <p className="text-gray-600">
              Digital X-ray &amp; examination in one visit
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              2. Evidence-based planning
            </h3>
            <p className="text-gray-600">
              Tailored strategy to fit your lifestyle
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">3. Enhanced recovery</h3>
            <p className="text-gray-600">
              Walk next morning with pain management
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">4. Personal rehab plan</h3>
            <p className="text-gray-600">
              Video follow-ups &amp; continuous support
            </p>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Excellence in Orthopedic Surgery
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Education &amp; Training
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>MBBS – Bangalore Medical College</li>
                <li>MS (Orthopedics) – KIMS</li>
                <li>AO-certified Fellowship – Adult Reconstruction</li>
                <li>Presented papers at AAOS and IOACON</li>
                <li>
                  Trains local surgeons in minimally invasive knee techniques
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Surgical Volume</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>1,100+ Total Knee Arthroplasties</li>
                <li>200+ Partial Knee Replacements</li>
                <li>150+ Total Hip Arthroplasties</li>
                <li>75+ Revision Surgeries</li>
              </ul>
              <p className="mt-4">
                <strong>Languages:</strong> Kannada | English
              </p>
              <p className="mt-2 italic">
                "I treat X-rays, but I operate on people."
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
    </main>
  );
}
