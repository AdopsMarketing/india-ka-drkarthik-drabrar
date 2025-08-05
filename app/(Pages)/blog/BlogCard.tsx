import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  readTime: string;
  imageAlt?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  readTime,
  imageAlt = ""
}) => {
  return (
    <article className="w-full max-w-2xl md:max-w-[653px] bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="relative w-full h-[300px] md:h-[541px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 653px"
        />
      </div>

      <div className="p-6 md:pt-4 md:pb-10">
        <h3 className="text-blue-800 text-3xl md:text-4xl font-bold mb-4 font-cormorant_garamond">
          {title}
        </h3>

        <p className="text-gray-700 text-base md:text-xl mb-10 font-montserrat">
          {description}
        </p>

        <div className="flex justify-between items-center flex-col sm:flex-row gap-4 font-montserrat">
          <span className="text-black text-sm md:text-base font-semibold">
            {readTime}
          </span>

          <button className="bg-sky-400 text-white font-semibold text-sm md:text-base px-6 py-2 rounded-lg hover:bg-sky-500 transition-colors">
            Read more
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
