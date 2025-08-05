import React from "react";
import Hero from "./Hero";
import TreatmentCard from "./TreatmentCard";
import TreatmentSection from "./TreatmentSection";
import FAQ from "./FAQ";

const Index = () => {
  const treatmentCards = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5d723b8a35b324a51cad7109ab7ea8aef4fda98f?width=858",
      title: "Total Knee Replacement (TKA)",
      description: "Complete joint replacement for severe arthritis",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/fa67d57b2c003aecf545676e97fdfd76c276a90c?width=858",
      title: "Partial Knee Replacement",
      description: "Preserves healthy bone and ligaments",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/7333fa8ce57c90ade44871f0dac24dd95777a1e4?width=858",
      title: "Revision Knee Replacement",
      description: "Specialized surgery for failed implants",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2908dfcaaa8b62fa4b1656eb1f96d0055e2299c5?width=858",
      title: "Hip Replacement (THA)",
      description: "Restore mobility and eliminate pain",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d7a6d2f596fcfd6f429b13585989a2d888343a72?width=858",
      title: "Arthroscopy & Sports Injuries",
      description: "Minimally invasive sports medicine",
    },
  ];

  const faqItems = [
    {
      question: "Will I need to be on bed rest?",
      answer:
        "No, most patients are encouraged to walk with support within 24 hours.",
    },
    {
      question: "Can I kneel or squat after surgery?",
      answer:
        "Most patients can kneel or squat after full recovery, but it may take time to regain comfort.",
    },

    {
      question: "How painful is the recovery?",
      answer:
        "Pain varies, but most patients report manageable discomfort with medication.",
    },

    {
      question: "Will I set off metal detectors?",
      answer:
        "Most implants are made of materials that do not set off metal detectors, but it can depend on the type of implant used.",
    },
  ];

  const totalKneeCards = [
    {
      title: "Overview",
      content:
        "Living with knee arthritis can feel like walking on broken glass. Total Knee Arthroplasty replaces the diseased joint surfaces with medical-grade implants, relieving pain and restoring alignment.",
    },
    {
      title: "Who Benefits",
      content:
        "Severe arthritis in multiple compartments\nNight/rest pain\nFailure of meds, injections, or physio",
    },
    {
      title: "Procedure Snapshot",
      content:
        "60–90 minutes under spinal-epidural\nComputer-guided alignment\nStand within 24 hours",
    },
    {
      title: "Recovery Timeline",
      content:
        "Stairs: 3–4 weeks\nRoutine activity: 6 weeks\nFull strength: up to 12 weeks",
    },
    {
      title: "Longevity & Safety",
      content: "15+ years in 90%+ cases\n•~1% infection risk",
    },
  ];

  const partialKneeCards = [
    {
      title: "Overview",
      content:
        "When arthritis affects just one part of the knee, a partial replacement preserves bone, ligaments, and joint motion.",
    },
    {
      title: "Who Benefits",
      content:
        "Arthritis confined to only one compartment of the knee\nStrong, intact ligaments (especially ACL)\nGood knee motion and alignment",
    },
    {
      title: "Procedure Snapshot",
      content:
        "Duration: 45–60 minutes under spinal or epidural anesthesia\nSmaller incision, less bone and soft-tissue removal",
    },
    {
      title: "Recovery Timeline",
      content:
        "Walk with support: 1–2 days\nReturn to desk work: ~2 weeks\nLow-impact sports: ~6 weeks\nFull recovery: ~8–10 weeks",
    },
    {
      title: "Longevity & Safety",
      content:
        "10–15 years in most patients with moderate activity\nLower blood loss and infection risk vs. total knee\nEasier to revise if needed later",
    },
  ];

  const revisionKneeCards = [
    {
      title: "Overview",
      content:
        "Revision surgery is done when old implants fail due to wear, loosening, or infection. It requires removing the failed parts, rebuilding bone, and using specialized revision implants.",
    },
    {
      title: "Who Benefits",
      content:
        "Loosening or wear of previous implants\nDeep infection of a replaced joint\nInstability or implant breakage\nBone loss around the old prosthesis",
    },
    {
      title: "Procedure Snapshot",
      content:
        "Duration: 90–150 minutes\nRequires removing old implant and cement\nBone grafts or augments may be used",
    },
    {
      title: "Recovery Timeline",
      content:
        "Initial recovery: 3–4 days in hospital\nWalk with support: ~1 week\nReturn to routine: ~8–10 weeks\nFull functional strength: up to 16–20 weeks",
    },
    {
      title: "Longevity & Safety",
      content:
        "Modern revision systems last 10–15 years+ in most cases\nHigher complexity = slightly increased risk\nSuccess improves with early intervention & experienced hands",
    },
  ];

  const hipReplacementCards = [
    {
      title: "Overview",
      content:
        "Hip arthritis can cause groin pain and difficulty sitting or walking. THA replaces the damaged ball-and-socket with smooth, durable ceramic-poly bearings.",
    },
    {
      title: "Who Benefits",
      content:
        "Advanced hip arthritis (primary or secondary OA)\nFailure of medications or physical therapy\nFractures or AVN (Avascular Necrosis) of the femoral head",
    },
    {
      title: "Procedure Snapshot",
      content:
        "Duration: 60–90 minutes\nUsually performed under spinal anaesthesia\nMuscle-sparing or minimally invasive approach when possible",
    },
    {
      title: "Recovery Timeline",
      content:
        "Walk with support: 1–2 days\nReturn to desk work: ~2 weeks\nLow-impact sports: ~6 weeks\nFull recovery: ~8–10 weeks",
    },
    {
      title: "Longevity & Safety",
      content:
        "10–15 years in most patients with moderate activity\nLower blood loss and infection risk vs. total knee\nEasier to revise if needed later",
    },
  ];

  const arthroscopyCards = [
    {
      title: "Overview",
      content:
        "Minimally invasive procedures to treat sports-related injuries and joint problems using keyhole surgery techniques.",
    },
    {
      title: "Who Benefits",
      content:
        "ACL tears\nMeniscus injuries\nShoulder dislocations or labral tears\nRecurrent joint swelling or locking",
    },
    {
      title: "Procedure Snapshot",
      content:
        "Minimally invasive (keyhole) surgery\nDone under spinal or general anesthesia\nUses small instruments & a camera to repair or clean joint",
    },
    {
      title: "Recovery Timeline",
      content:
        "ACL reconstruction: Walk with brace in 1–2 days, jog by 3–4 months\nMeniscus repair: Return to activity ~6–8 weeks",
    },
    {
      title: "Longevity & Safety",
      content:
        "High return-to-sport rates with proper rehab\nLow complication risk when protocols are followed\nEarly diagnosis and tailored surgery improve long-term function",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />

        <section className="py-20">
          <h2 className="text-[#1A4CA3] text-5xl font-bold text-center mt-20 mb-[60px] mx-0 max-sm:text-[32px] font-cormorant_garamond">
            Treatment Overview
          </h2>

          <div className="flex flex-wrap justify-center gap-12 mb-[60px] px-[58px] py-0 max-md:flex-col max-md:items-center max-md:px-6 max-md:py-0">
            {treatmentCards.map((card, index) => (
              <TreatmentCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-black text-[42px] font-bold text-center mt-20 mb-[60px] mx-0 max-sm:text-[28px]">
            Effortless Journey Ahead
          </h2>

          <TreatmentSection
            id="total-knee-replacement"
            icon="https://api.builder.io/api/v1/image/assets/TEMP/91769d66fd34d32bef701eef006a6737cd6919d5?width=200"
            title="TOTAL KNEE REPLACEMENT (TKA)"
            cards={totalKneeCards}
            buttonText="Book Pre-Surgical Evaluation"
            faqItems={faqItems}
          />

          <div className="w-full h-px bg-[#4A4A4A] mx-0 my-20" />

          <TreatmentSection
            id="partial-knee-replacement"
            icon="https://api.builder.io/api/v1/image/assets/TEMP/8f2793e82136313e2b84d1b096c88481770b924b?width=200"
            title="PARTIAL KNEE REPLACEMENT"
            cards={partialKneeCards}
            buttonText="Check if You're a Candidate"
            faqItems={faqItems}
          />

          <div className="w-full h-px bg-[#4A4A4A] mx-0 my-20" />

          <TreatmentSection
            id="revision-knee-replacement"
            icon="https://api.builder.io/api/v1/image/assets/TEMP/f5cc047f2a6f5b85cdc69612c3c8fa819ad19b2b?width=200"
            title="REVISION KNEE REPLACEMENT"
            cards={revisionKneeCards}
            buttonText="Book a Second Opinion with Dr. Karthik"
            faqItems={faqItems}
          />

          <div className="w-full h-px bg-[#4A4A4A] mx-0 my-20" />

          <TreatmentSection
            id="hip-replacement"
            icon="https://api.builder.io/api/v1/image/assets/TEMP/95a35854590757a7c9c7a069b10c0a63889ff81e?width=200"
            title="TOTAL HIP REPLACEMENT (THA)"
            cards={hipReplacementCards}
            buttonText="Schedule Hip Evaluation"
            faqItems={faqItems}
          />

          <div className="w-full h-px bg-[#4A4A4A] mx-0 my-20" />

          <TreatmentSection
            id="arthroscopy-sports-injuries"
            icon="https://api.builder.io/api/v1/image/assets/TEMP/b6cfd67e03e480fe303019bfa3d28a1fdb32df5c?width=200"
            title="ARTHROSCOPY & SPORTS INJURIES"
            cards={arthroscopyCards}
            buttonText=""
            comingSoon={true}
          />
        </section>

        <section className="flex w-full h-[398px] justify-center items-center bg-[#EDF4F7] pt-[66px] pb-[65px] px-[172px] max-md:px-6 max-md:py-10">
          <div className="w-[1096px] h-[267px] flex flex-col items-center justify-center bg-white p-11 rounded-[22px] max-md:w-full max-md:px-6 max-md:py-8">
            <h2 className="text-black text-[38px] font-bold text-center mb-4 max-md:text-[28px] font-poppins">
              Still unsure which treatment is right for you?
            </h2>
            <p className="text-black text-[26px] font-normal text-center mb-8 max-md:text-xl font-montserrat">
              Dr. Karthik can help you understand your options — surgical or
              non-surgical.
            </p>
            <div className="flex gap-3 max-md:flex-col max-md:w-full font-montserrat">
              <button className="text-white text-[22px] font-semibold cursor-pointer bg-[#5AB8D0] px-[19px] py-2.5 rounded-lg hover:bg-[#5AB8D0]/90 transition-colors">
                Book Consultation
              </button>
              <button className="text-white text-[22px] font-semibold cursor-pointer bg-[#3DBE84] px-[19px] py-2.5 rounded-lg hover:bg-[#3DBE84]/90 transition-colors">
                WhatsApp Chat
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
