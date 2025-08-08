"use client";
import { log } from "node:console";
import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    primaryConcern: "",
    preferredDate: "",
    preferredTime: "Morning (9:30 AM - 12:00 PM)",
    phone: "",
    email: "",
    reports: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConcernChange = (concern: string) => {
    setFormData((prev) => ({ ...prev, primaryConcern: concern }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, reports: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data as JSON
    const data = {
      fullName: formData.fullName,
      age: formData.age,
      primaryConcern: formData.primaryConcern,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      phone: formData.phone,
      email: formData.email,
      reports: formData.reports,
    };

    console.log("Submitting appointment form:", data);

    try {
      const res = await fetch("/api/formsubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // send the JSON string
      });

      const result = await res.json();
      if (res.ok) {
        alert("Appointment booked!");
      } else {
        alert("Error: " + result.error);
      }
    } catch (err) {
      alert("Submission failed.");
    }
  };

  return (
    <section className="container mx-auto w-full py-24 px-4 md:px-6">
      <div
        className="max-w-5xl mx-auto  bg-white px-6 py-10 rounded-2xl"
        style={{
          background: "#FFFFFF",
          boxShadow:
            "-24px 71px 21px 0 rgba(0, 0, 0, 0.00), -15px 45px 19px 0 rgba(0, 0, 0, 0.01), -9px 26px 16px 0 rgba(0, 0, 0, 0.05), -4px 11px 12px 0 rgba(0, 0, 0, 0.09), -1px 3px 7px 0 rgba(0, 0, 0, 0.10)",
        }}
      >
        <h2 className="text-[#1A4CA3] text-4xl font-cormorant_garamond font-bold text-center mb-16 sm:text-3xl">
          Quick-Fill Appointment Form
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-10 mb-12">
            <div className="flex-1">
              <label
                htmlFor="fullName"
                className="text-[#4A4A4A] text-lg font-bold block mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="border h-12 w-full bg-white px-4 rounded-xl border-black text-lg placeholder:text-[#BFBFBF] focus:outline-none focus:ring-2 focus:ring-[#1A4CA3]"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="age"
                className="text-[#4A4A4A] text-lg font-bold block mb-2"
              >
                Age *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Enter your age"
                className="border h-12 w-full bg-white px-4 rounded-xl border-black text-lg placeholder:text-[#BFBFBF] focus:outline-none focus:ring-2 focus:ring-[#1A4CA3]"
                required
              />
            </div>
          </div>

          <div className="mb-12">
            <fieldset>
              <legend className="text-[#4A4A4A] text-lg font-bold mb-4">
                Primary Concern *
              </legend>
              <div className="flex flex-col sm:flex-row gap-4">
                {["Knee pain", "Hip pain", "Second Opinion"].map((concern) => (
                  <label
                    key={concern}
                    className="flex items-center gap-3 border h-12 px-4 rounded-xl border-black cursor-pointer hover:bg-gray-50 w-full sm:w-auto"
                  >
                    <input
                      type="radio"
                      name="primaryConcern"
                      value={concern}
                      checked={formData.primaryConcern === concern}
                      onChange={() => handleConcernChange(concern)}
                      className="w-5 h-5 text-[#1A4CA3] focus:ring-[#1A4CA3]"
                      required
                    />
                    <span className="text-black text-base">{concern}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="flex flex-col md:flex-row gap-10 mb-12">
            <div className="flex-1">
              <label
                htmlFor="preferredDate"
                className="text-[#4A4A4A] text-lg font-bold block mb-2"
              >
                Preferred Date *
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="border h-12 w-full bg-white px-4 rounded-xl border-black text-lg focus:outline-none focus:ring-2 focus:ring-[#1A4CA3]"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="preferredTime"
                className="text-[#4A4A4A] text-lg font-bold block mb-2"
              >
                Preferred Time*
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="border h-12 w-full bg-white px-4 rounded-xl border-black text-lg focus:outline-none focus:ring-2 focus:ring-[#1A4CA3] appearance-none"
                required
              >
                <option value="Morning (9:30 AM - 12:00 PM)">
                  Morning (9:30 AM - 12:00 PM)
                </option>
                <option value="Afternoon (12:00 PM - 5:00 PM)">
                  Afternoon (12:00 PM - 5:00 PM)
                </option>
                <option value="Evening (5:00 PM - 9:00 PM)">
                  Evening (5:00 PM - 9:00 PM)
                </option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 mb-12">
            <div className="flex-1">
              <label
                htmlFor="phone"
                className="text-[#4A4A4A] text-lg font-bold block mb-2"
              >
                Phone (WhatsApp) *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 9xxxx xxxxx"
                className="border h-12 w-full bg-white px-4 rounded-xl border-black text-lg placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#1A4CA3]"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="email"
                className="text-[#4A4A4A] text-lg font-bold block mb-2"
              >
                Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                className="border h-12 w-full bg-white px-4 rounded-xl border-black text-lg placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#1A4CA3]"
              />
            </div>
          </div>

          <div className="mb-12">
            <label
              htmlFor="reports"
              className="text-[#4A4A4A] text-lg font-bold block mb-2"
            >
              Upload Reports (PDF/X-ray photo, max 10 MB)
            </label>
            <div className="text-center h-60 flex flex-col items-center justify-center gap-6 p-8 rounded border-2 border-dashed border-[#4A4A4A] relative">
              <p className="text-black text-base">
                Click to upload or drag and drop
                <br />
                PDF, JPG, PNG up to 10MB
              </p>
              <input
                type="file"
                id="reports"
                name="reports"
                onChange={handleFileUpload}
                accept=".pdf,.jpg,.jpeg,.png"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-center cursor-pointer bg-[#1A4CA3] mt-10 py-5 rounded-lg hover:bg-[#1A4CA3]/90 transition-colors"
          >
            <span className="text-white text-xl font-bold">
              Book Appointment
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
