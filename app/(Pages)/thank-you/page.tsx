import { Link } from "@mui/material";
import { Check } from "lucide-react";
import React from "react";

const Page = () => {
    return (
        <div className="w-full bg-gray-50">

            <main className="flex items-center justify-center px-6 py-20">
                <section className="max-w-2xl text-center bg-white p-8 sm:p-12 rounded-2xl shadow-[0_0_40px_0_rgba(0,0,0,0.15)]">
                    {/* Success Icon */}
                    <div className="w-20 h-20 mx-auto mb-8 bg-[#3DBE84] flex justify-center items-center rounded-full">
                        <Check size={40} color="white" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-[#1A4CA3] text-3xl sm:text-4xl font-bold mb-6">
                        Thank You!
                    </h1>

                    {/* Subtext */}
                    <p className="text-[#4A4A4A] text-base sm:text-lg mb-8">
                        Your appointment request has been successfully submitted. We will
                        contact you within 24 hours to confirm your consultation slot.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/">
                            <button className="bg-blue-700 hover:bg-blue-800 text-white font-montserrat font-medium text-lg px-3 py-2.5 rounded-lg transition-colors">
                                Back to Home
                            </button>
                        </Link>

                        <Link href={`https://wa.me/8618352089`} className="mt-6 block text-center">
                            <button className="bg-green-500 hover:bg-green-600 text-white text-lg px-3 py-2.5 rounded-lg transition-colors w-full font-montserrat font-medium">
                                WhatsApp Chat
                            </button>
                        </Link>
                    </div>

                    {/* Footer Note */}
                    <p className="text-[#4A4A4A] text-xs sm:text-sm mt-8">
                        Need immediate assistance? Contact us at <Link href={`tel:+918618352089`} className="text-[#1A4CA3] font-bold">+91 8618352089</Link>
                    </p>
                </section>
            </main>

        </div>
    );
};

export default Page;
