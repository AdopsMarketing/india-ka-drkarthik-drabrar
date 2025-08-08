'use client';
import React, { useState } from 'react';

const BookingForm = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const locations = [
    'SAI Hospital – Channapatna',
    'Vydehi Hospital',
    'Tele-consult – Apollo 24/7',
  ];

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setIsLocationOpen(false);
  };

  const handleBookAppointment = () => {
    if (!selectedLocation || !selectedDate || !phoneNumber) {
      alert('Please fill in all required fields');
      return;
    }
    alert(`Appointment booked for ${selectedLocation} on ${selectedDate}`);
  };

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/your-whatsapp-number', '_blank');
  };

  return (
    <aside className="bg-white shadow-xl w-full flex flex-col items-stretch text-lg text-gray-700 font-bold mx-auto px-6 py-8 rounded-2xl max-md:mt-9 max-md:px-5">
      <h2 className="text-blue-800 text-3xl mb-6">Ready to book?</h2>

      <form className="flex flex-col">
        {/* Location */}
        <div className="flex items-center gap-2.5 mb-2">
          <img
            src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/eb3eceb96601f94a2aa86dcdeec5c15c02135de6?placeholderIfAbsent=true"
            alt="Location icon"
            className="w-7 h-7 object-contain"
          />
          <label>Choose location</label>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsLocationOpen(!isLocationOpen)}
            className="bg-white border border-black flex justify-between items-center w-full rounded-xl px-4 py-2 text-base font-medium"
          >
            <span>{selectedLocation || 'Select a location'}</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/acc00e1f91969247ed1b04c824714b2e3b225dd3?placeholderIfAbsent=true"
              alt="Dropdown arrow"
              className={`w-6 h-6 object-contain transition-transform ${
                isLocationOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isLocationOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border border-black rounded-xl mt-1 z-10">
              {locations.map((location, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleLocationSelect(location)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 font-medium first:rounded-t-xl last:rounded-b-xl"
                >
                  {location}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Date */}
        <div className="flex items-center gap-2.5 mt-6 mb-2">
          <img
            src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/e286e73f4a3d346b4280bcd8d0ac14a37474a881?placeholderIfAbsent=true"
            alt="Calendar icon"
            className="w-7 h-7 object-contain"
          />
          <label>Choose date/time</label>
        </div>

        <div className="bg-white border border-black rounded-xl px-4 py-2 flex justify-between items-center">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="flex-1 outline-none bg-transparent text-base"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/825cfe98fb9ab039dfdc433e0a94e471acef6d33?placeholderIfAbsent=true"
            alt="Calendar icon"
            className="w-6 h-6 object-contain ml-2"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2.5 mt-6 mb-2">
          <img
            src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/ed3e00469a8cd3b8c4c4a62f534e66d649fa583f?placeholderIfAbsent=true"
            alt="Phone icon"
            className="w-7 h-7 object-contain"
          />
          <label>Add phone number</label>
        </div>

        <div className="bg-white border border-black rounded-xl px-4 py-2">
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            className="w-full outline-none bg-transparent text-base"
          />
        </div>

        {/* Book Appointment */}
        <button
          type="button"
          onClick={handleBookAppointment}
          className="bg-cyan-400 hover:bg-blue-600 text-white font-semibold rounded-lg px-12 py-3 mt-8 self-center transition-colors w-full max-w-xs"
        >
          Book Appointment
        </button>

        {/* WhatsApp */}
        <button
          type="button"
          onClick={handleWhatsAppChat}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-12 py-3 mt-4 self-center transition-colors w-full max-w-xs"
        >
          Chat on WhatsApp
        </button>
      </form>
    </aside>
  );
};

export default BookingForm;
