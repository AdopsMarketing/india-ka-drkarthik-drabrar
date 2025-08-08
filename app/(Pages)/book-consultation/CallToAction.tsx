import React from 'react';

const CallToAction = () => {
  const handleBookConsultation = () => {
    const bookingForm = document.querySelector('aside');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/your-whatsapp-number', '_blank');
  };

  return (
    <section className="bg-blue-800 flex flex-col items-center justify-center text-black font-semibold mt-16 px-8 py-12 md:px-20 md:py-16">
      <div className="bg-white w-full max-w-5xl flex flex-col items-center text-center px-6 py-10 rounded-xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Still unsure which treatment is right for you?
        </h2>
        <p className="text-xl md:text-2xl font-medium mb-8">
          Dr. Karthik can help you understand your options — surgical or non-surgical.
        </p>
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-md">
          <button
            onClick={handleBookConsultation}
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
          >
            Book Consultation
          </button>
          <button
            onClick={handleWhatsAppChat}
            className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
          >
            WhatsApp Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
