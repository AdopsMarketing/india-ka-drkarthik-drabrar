'use client';
import React from 'react';
import HeroSection from './HeroSection';
import AppointmentForm from '@/app/Components/AppointmentForm/AppointmentForm';
import InfoSection from '../locations/apollo/InfoSection';
import HelpSupport from '@/app/Components/HelpSupport/HelpSupport';

const Page = () => {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <main>
        <HeroSection />
        <AppointmentForm />
        <InfoSection />
        <HelpSupport />
      </main>
    </div>
  );
};

export default Page;
