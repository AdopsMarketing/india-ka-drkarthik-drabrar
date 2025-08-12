'use client';
import React from 'react';
import HeroSection from './HeroSection';
import LocationCard from './LocationCard';
import CallToAction from './CallToAction';
import AppointmentForm from '@/app/Components/AppointmentForm/AppointmentForm';

const Page = () => {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <main>
        <HeroSection />
        <section className="container mx-auto mt-20 max-md:mt-10 px-6">
          <div className="flex gap-6 max-lg:flex-col">
            {/* Left Column - Location ards */}
            <div className="w-1/2 max-lg:w-full">
              <div className="space-y-9">
                <LocationCard
                  hospitalName="SAI Hospital – Channapatna"
                  hospitalImage="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/956b4441ebae0fd9f8eba9e1615733d5497dab49?placeholderIfAbsent=true"
                  address="2 km from KSRTC Bus Stand, Bangalore–Mysore Hwy Main OPD Tower, 3rd Floor"
                  hours="Mon - Sat 9AM - 9PM"
                  contact="8618352089"
                />

                <LocationCard
                  hospitalName="Vydehi Hospital"
                  hospitalImage="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/593abfd7c99e3997b6d1ecb0a4eb1c8a5d293114?placeholderIfAbsent=true"
                  address="Whitefield, Bengaluru Main OPD Tower, 3rd Floor"
                  hours="Mon - Sat 5PM - 7PM"
                  contact="8618352089"
                />

                <LocationCard
                  hospitalName="Tele-consult – Apollo 24/7"
                  hospitalImage="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/6b52fe7d68bb610d0edf5fcab3132fae50697ab7?placeholderIfAbsent=true"
                  address="Virtual consultation slots"
                  hours="Available via App: 24/7"
                  contact="8618352089"
                  isFullWidth={true}
                />
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="w-1/2 max-lg:w-full">
              <AppointmentForm />
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
};

export default Page;
