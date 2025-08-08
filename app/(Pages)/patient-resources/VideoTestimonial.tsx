'use client';
import React, { useState, useRef } from "react";

interface VideoTestimonialProps {
  title: string;
  description: string;
  duration: string;
  videoSrc?: string;
  className?: string;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  title,
  description,
  duration,
  videoSrc = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <article
      className={`shadow-2xl flex w-full max-w-6xl flex-col overflow-hidden items-stretch text-white font-semibold mt-16 rounded-2xl relative ${className}`}
    >
      <div className="relative group">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-t-2xl"
          poster="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/video-poster?placeholderIfAbsent=true"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <button
            onClick={handlePlayPause}
            className="bg-blue-800 hover:bg-blue-700 text-white flex items-center gap-2 text-lg px-8 py-3 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/a399acf896c263f3ea31166fab24193e8573dfb2?placeholderIfAbsent=true"
              alt="Play icon"
              className="w-6 h-6 object-contain"
            />
            <span className="font-montserrat">
              {isPlaying ? "Pause Video" : "Watch Video"}
            </span>
          </button>
        </div>

        <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
          <time>{duration}</time>
        </div>
      </div>

      <div className="bg-white flex flex-col w-full overflow-hidden text-black px-6 py-10 rounded-b-2xl">
        <h2 className="text-3xl font-poppins">{title}</h2>
        <p className="text-xl font-medium mt-4 font-montserrat">{description}</p>
      </div>
    </article>
  );
};

export default VideoTestimonial;
