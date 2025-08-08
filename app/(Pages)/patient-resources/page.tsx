"use client";
import React, { useState } from "react";
import VideoTestimonial from "./VideoTestimonial";
import FAQ from "@/app/Components/FAQ/FAQ";

const Page: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "kn">("en");

  const rehabVideos = [
    {
      title: "Week 1-2",
      description: "Initial Mobility",
      duration: "15 min",
    },
    {
      title: "Week 3-4",
      description: "Strengthening Phase",
      duration: "20 min",
    },
    {
      title: "Week 5-6",
      description: "Advanced Movement",
      duration: "25 min",
    },
    {
      title: "Week 7-8",
      description: "Return to Activity",
      duration: "30 min",
    },
  ];

  const faqItems = [
    {
      question:
        "How soon will I be able to walk after knee-replacement surgery?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    },
    {
      question: "Will the operation be very painful?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.",
    },
    {
      question: "How long do modern knee or hip implants last?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      question:
        "Can I sit cross-legged on the floor or use an Indian-style toilet after surgery?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sem at nibh elementum imperdiet.",
    },
  ]
  ;
  const preOpTranslations = {
    en: {
      title: "Pre-Op Checklist",
      description:
        "Follow this comprehensive checklist to ensure you're fully prepared for your surgery.",
      items: [
        "Complete all pre-operative tests 48 hours before surgery",
        "Stop blood thinners as advised by your doctor",
        "Arrange transportation to and from the hospital",
        "Prepare your home for post-surgery recovery",
        "Follow fasting instructions (no food/water 8 hours before)",
        "Wear comfortable, loose-fitting clothes",
        "Bring all required documents and insurance cards",
      ],
    },
    kn: {
      title: "ಆಪರೇಷನ್ ಪೂರ್ವ ಪರಿಶೀಲನೆ",
      description:
        "ನೀವು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಸಿದ್ಧರಾಗಿರುವುದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಈ ಸಮಗ್ರ ಪರಿಶೀಲನೆ ಅನುಸರಿಸಿ.",
      items: [
        "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ 48 ಗಂಟೆಗಳ ಮುಂಚಿತವಾಗಿ ಎಲ್ಲಾ ಪೂರ್ವ ಪರೀಕ್ಷೆಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ",
        "ನಿಮ್ಮ ಡಾಕ್ಟರ್ ಸಲಹೆ ಮಾಡಿದಂತೆ ರಕ್ತ ಹಚ್ಚುವ ಔಷಧಿಗಳನ್ನು ನಿಲ್ಲಿಸಿ",
        "ಆಸ್ಪತ್ರೆಗೆ ಹೋಗುವ ಮತ್ತು ಬರುವ ಸಾರಿಗೆ ವ್ಯವಸ್ಥೆ ಮಾಡಿ",
        "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರದ ಗುಣಮುಖತೆಗೆ ನಿಮ್ಮ ಮನೆಯನ್ನೂ ಸಿದ್ಧಪಡಿಸಿ",
        "ಉಪವಾಸದ ಸೂಚನೆಗಳನ್ನು ಅನುಸರಿಸಿ (8 ಗಂಟೆಗಳ ಮೊದಲು ಆಹಾರ/ನೀರು ಸೇವಿಸಬೇಡಿ)",
        "ಆರಾಮದಾಯಕ, ಢಿಲಾದ ಉಡುಪುಗಳನ್ನು ಧರಿಸಿ",
        "ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳು ಮತ್ತು ಇನ್ಶುರೆನ್ಸ್ ಕಾರ್ಡ್‌ಗಳನ್ನು ತರಿರಿ",
      ],
    },
  };

  const t = preOpTranslations[language];

  return (
    <div className="w-full min-h-screen bg-gray-50 font-poppins">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-[#1A4CA3] text-4xl sm:text-5xl font-bold mb-4 font-cormorant_garamond">
            Patient Resources
          </h1>
          <p className="text-black text-xl sm:text-xl max-w-3xl mx-auto font-poppins">
            Pre-surgery checklists, rehab tools, and recovery guidance —
            explained step by step.
          </p>
        </section>

        {/* 🔁 Translatable Pre-Op Checklist */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-black text-xl md:text-4xl font-bold">
              {t.title}
            </h2>
            <div className="text-right">
              <span className="text-gray-600 text-sm">
                {language === "en" ? "In Kannada" : "In English"}
              </span>
              <div className="flex gap-2 mt-1">
                <label className="text-sm text-black">
                  <input
                    type="radio"
                    value="en"
                    checked={language === "en"}
                    onChange={() => setLanguage("en")}
                    className="mr-1"
                  />
                  English
                </label>
                <label className="text-sm text-black">
                  <input
                    type="radio"
                    value="kn"
                    checked={language === "kn"}
                    onChange={() => setLanguage("kn")}
                    className="mr-1"
                  />
                  Kannada
                </label>
              </div>
            </div>
          </div>
          <p className="text-black text-base sm:text-xl mb-4">
            {t.description}
          </p>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <ul className="space-y-3 list-disc list-inside text-black">
              {t.items.map((item, index) => (
                <li className="text-base md:text-xl" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-black text-4xl sm:text-2xl font-bold mb-2">
            Rehab Video Series
          </h2>
          <p className="text-gray-600 font-medium text-xl sm:text-lg mb-6">
            Guided exercises, week by week
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rehabVideos.map((video, index) => (
              <VideoTestimonial
                key={index}
                title={video.title}
                description={video.description}
                duration={video.duration}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-black text-xl sm:text-4xl font-bold mb-6">
            Insurance & Payments
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 font-medium">
            EMI + cashless options
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-black text-3xl font-bold mb-4">
                Insurance Partners
              </h3>
              <ul className="space-y-2 text-black md:font-xl list-disc list-inside">
                <li>Star Health</li>
                <li>HDFC ERGO</li>
                <li>ICICI Lombard</li>
                <li>Bajaj Allianz</li>
                <li>National Insurance</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-black text-3xl font-bold mb-4">
                Cashless Process
              </h3>
              <ul className="space-y-2 text-black md:text-xl list-disc list-inside">
                <li>Pre-authorization within 24 hours</li>
                <li>Direct settlement with hospital</li>
                <li>No advance payment required</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
            <h3 className="text-black text-3xl font-bold mb-4">EMI Options</h3>
            <ul className="space-y-2 text-black list-disc list-inside font-base md:font-xl">
              <li className="text-base md:text-xl">0% interest for 6 months</li>
              <li className="text-base md:text-xl">
                12–24 months tenure available
              </li>
              <li className="text-base md:text-xl">
                Minimum documentation required
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-black text-xl sm:text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQ items={faqItems} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
