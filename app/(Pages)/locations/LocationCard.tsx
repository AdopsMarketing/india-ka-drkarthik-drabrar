import React from 'react';
import { WhatsappIcon } from '../../Components/svgIcons/svgIcons';
import Link from 'next/link';

interface LocationCardProps {
  hospitalName: string;
  hospitalImage: string;
  address: string;
  hours: string;
  contact: string;
  isFullWidth?: boolean;
}

const LocationCard: React.FC<LocationCardProps> = ({
  hospitalName,
  hospitalImage,
  address,
  hours,
  contact,
  isFullWidth = false,
}) => {
  return (
    <article className={`bg-white shadow-xl w-full flex flex-col overflow-hidden rounded-2xl px-8 pt-6 pb-8 max-md:px-5`}>
      <div className={`${isFullWidth ? 'w-full' : 'max-w-3xl'}`}>
        <div className="flex gap-5 max-md:flex-col">
          <div className='max-md:w-full'>
            <img
              src={hospitalImage}
              alt={hospitalName}
              className="w-28 h-28 object-contain rounded-full m-0"
            />
          </div>
          <div className="flex-1 flex items-center">
            <h2 className="text-blue-800 text-3xl font-bold">
              {hospitalName}
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-6 text-gray-700 mt-6 max-md:flex-col">
        <div className="flex items-center gap-2 text-xl font-bold">
          <img
            src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/46456ee4105658eabb43e47aae06bfd6eed4dbf6?placeholderIfAbsent=true"
            alt="Address icon"
            className="w-6 h-6"
          />
          <span>Address</span>
        </div>
        <p className="text-lg font-medium max-w-xl">{address}</p>
      </div>

      <div className="flex flex-wrap gap-8 text-gray-700 mt-6">
        <div className="flex flex-col gap-6 text-xl font-bold">
          <div className="flex items-center gap-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/eb117f4074623560ab8c8d6ed846a7841edf5b37?placeholderIfAbsent=true"
              alt="Hours icon"
              className="w-6 h-6"
            />
            <span>Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/ef14a44a3e0b669d35722d2f9a490757624521c4?placeholderIfAbsent=true"
              alt="Contact icon"
              className="w-6 h-6"
            />
            <span>Contact</span>
          </div>
        </div>
        <div className="text-lg font-medium space-y-6">
          <p>{hours}</p>
          <p>{contact}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-8 text-lg font-semibold">
        <Link href={`https://wa.me/${contact}`}>
          <button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-6 py-2 rounded-lg transition-colors">
            <WhatsappIcon />
            <span>What's App</span>
          </button>
        </Link>
      </div>
    </article>
  );
};

export default LocationCard;
