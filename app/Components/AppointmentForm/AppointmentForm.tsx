'use client';
import { FileText } from "lucide-react";
import React, { useEffect, useState } from "react";
import { redirect, usePathname } from "next/navigation";
import { useUTM } from "../UTMs/UTMs";
import Link from "next/link";

const AppointmentForm = () => {
  const pathname = usePathname();
  const utm = useUTM();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    primaryConcern: "",
    preferredDate: "",
    preferredTime: "Morning (9:30 AM - 12:00 PM)",
    phone: "",
    email: "",
    location: "",
    file: null as File | null,
    utm_campaign: "",
    utm_source: "",
    utm_medium: "",
    utm_term: "",
    utm_content: "",
  });

  const [filePreview, setFilePreview] = useState({ fileName: "", fileType: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update formData with path and UTM params
  useEffect(() => {
    const parts = pathname.split("/");
    let locationSlug = parts[parts.length - 1];

    if (locationSlug === "book-consultation") {
      locationSlug = formData.location;
    }

    setFormData(prev => ({
      ...prev,
      location: locationSlug,
      utm_campaign: utm.utm_campaign,
      utm_source: utm.utm_source,
      utm_medium: utm.utm_medium,
      utm_term: utm.utm_term,
      utm_content: utm.utm_content,
    }));
  }, [pathname, utm]);


  console.log(formData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConcernChange = (concern: string) => {
    setFormData(prev => ({ ...prev, primaryConcern: concern }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));

    if (file) {
      if (file.type === "application/pdf") {
        setFilePreview({ fileName: file.name, fileType: "pdf" });
      } else if (file.type.startsWith("image/")) {
        setFilePreview({ fileName: file.name, fileType: "image" });
      }
    } else {
      setFilePreview({ fileName: "", fileType: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append("fullName", formData.fullName);
    form.append("age", formData.age);
    form.append("primaryConcern", formData.primaryConcern);
    form.append("preferredDate", formData.preferredDate);
    form.append("preferredTime", formData.preferredTime);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("location", formData.location);
    form.append("utm_campaign", utm.utm_campaign);
    form.append("utm_source", utm.utm_source);
    form.append("utm_medium", utm.utm_medium);
    form.append("utm_term", utm.utm_term);
    form.append("utm_content", utm.utm_content);
    if (formData.file) {
      form.append("file", formData.file);
    }

    try {
      const res = await fetch("/api/formsubmission", {
        method: "POST",
        body: form,
      });

      const result = await res.json();
      if (res.ok) {
        redirect("/thank-you");
      } else {
        alert("Error: " + result.error);
      }

      setIsSubmitting(false);
      setFormData({
        fullName: "",
        age: "",
        primaryConcern: "",
        preferredDate: "",
        preferredTime: "Morning (9:30 AM - 12:00 PM)",
        phone: "",
        email: "",
        location: "",
        file: null,
        utm_campaign: "",
        utm_source: "",
        utm_medium: "",
        utm_term: "",
        utm_content: "",
      });
    } catch (err) {
      alert("Submission failed.");
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`container mx-auto w-full  ${pathname === "/locations" 
        ? "py-0 px-0"
        : "py-24 px-4 md:px-6"
        }`}
    >
      <div
        className="max-w-5xl mx-auto bg-white px-6 py-10 rounded-2xl"
        style={{
          background: "#FFFFFF",
          boxShadow:
            "-24px 71px 21px 0 rgba(0, 0, 0, 0.00), -15px 45px 19px 0 rgba(0, 0, 0, 0.01), -9px 26px 16px 0 rgba(0, 0, 0, 0.05), -4px 11px 12px 0 rgba(0, 0, 0, 0.09), -1px 3px 7px 0 rgba(0, 0, 0, 0.10)",
        }}
      >
        <h2 className="text-[#1A4CA3] text-4xl font-cormorant_garamond font-bold text-center mb-16 sm:text-3xl">
          Quick-Fill Appointment Form
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Full Name & Age */}
          <div className="flex flex-col md:flex-row gap-10 mb-12">
            <div className="flex-1">
              <label htmlFor="fullName" className="text-[#4A4A4A] text-lg font-bold block mb-2">
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
              <label htmlFor="age" className="text-[#4A4A4A] text-lg font-bold block mb-2">
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

          {/* Location */}
          { (pathname === "/locations" || pathname === "/book-consultation") && (
            <div className="mb-12">
              <label htmlFor="location" className="text-[#4A4A4A] text-lg font-bold block mb-2">
                Location *
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="border h-12 w-full bg-white px-4 rounded-xl border-black text-lg placeholder:text-[#BFBFBF] focus:outline-none focus:ring-2 focus:ring-[#1A4CA3]"
                required
              >
                <option value="">Select your location</option>
                <option value="Apollo">Apollo</option>
                <option value="Channapatna">Channapatna</option>
                <option value="Vydehi">Vydehi</option>
              </select>
            </div>
          )}

          {/* Primary Concern */}
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

          {/* Date & Time */}
          <div className="flex flex-col md:flex-row gap-10 mb-12">
            <div className="flex-1">
              <label htmlFor="preferredDate" className="text-[#4A4A4A] text-lg font-bold block mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="border h-12 w-full bg-white px-4 rounded-xl border-black text-lg placeholder:text-[#BFBFBF] focus:outline-none focus:ring-2 focus:ring-[#1A4CA3]"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="preferredTime" className="text-[#4A4A4A] text-lg font-bold block mb-2">
                Preferred Time *
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="border h-12 w-full bg-white px-4 rounded-xl border-black text-lg placeholder:text-[#BFBFBF] focus:outline-none focus:ring-2 focus:ring-[#1A4CA3]"
                required
              >
                <option value="Morning (9:30 AM - 12:00 PM)">Morning (9:30 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 5:00 PM)">Afternoon (12:00 PM - 5:00 PM)</option>
                <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Phone & Email */}
          <div className="flex flex-col md:flex-row gap-10 mb-12">
            <div className="flex-1">
              <label htmlFor="phone" className="text-[#4A4A4A] text-lg font-bold block mb-2">
                Phone (WhatsApp) *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your phone number"
                className="border h-12 w-full bg-white placeholder:text-[#BFBFBF] px-4 rounded-xl border-black text-lg focus:outline-none focus:ring-2 focus:ring-[#1A4CA3]"
                required
                maxLength={10}
                pattern="[0-9]{10}"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="text-[#4A4A4A] text-lg font-bold block mb-2">
                Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                className="border h-12 w-full bg-white placeholder:text-[#BFBFBF] px-4 rounded-xl border-black text-lg focus:outline-none focus:ring-2 focus:ring-[#1A4CA3]"
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-5">
            <label htmlFor="reports" className="text-[#4A4A4A] text-lg font-bold block mb-2">
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
            {filePreview.fileName && filePreview.fileType && (
              <div className="mt-4 flex gap-3 items-center">
                {filePreview.fileType === "pdf" && <FileText />}
                {filePreview.fileType === "image" && formData.file && (
                  <img
                    src={URL.createObjectURL(formData.file)}
                    alt="Uploaded file preview"
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
                <p>{filePreview.fileName}</p>
              </div>
            )}
          </div>

          {/* Hidden UTM inputs */}
          <input type="hidden" name="utm_campaign" value={formData.utm_campaign} />
          <input type="hidden" name="utm_source" value={formData.utm_source} />
          <input type="hidden" name="utm_medium" value={formData.utm_medium} />
          <input type="hidden" name="utm_term" value={formData.utm_term} />
          <input type="hidden" name="utm_content" value={formData.utm_content} />

          {/* Submit button */}
          <button
            type="submit"
            className="w-full text-center cursor-pointer bg-[#1A4CA3] py-5 rounded-lg hover:bg-[#1A4CA3]/90 transition-colors font-montserrat font-medium"
            disabled={isSubmitting}
          >
            <span className="text-white text-xl">
              {isSubmitting ? "Booking..." : "Book Appointment"}
            </span>
          </button>

          {/* WhatsApp button */}
          {pathname === "/locations" && (
            <Link href={`https://wa.me/8618352089`} className="mt-6 block text-center">
              <button className="bg-green-500 hover:bg-green-600 text-white text-xl px-6 py-5 rounded-lg transition-colors w-full font-montserrat font-medium">
                WhatsApp Chat
              </button>
            </Link>
          )}
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
