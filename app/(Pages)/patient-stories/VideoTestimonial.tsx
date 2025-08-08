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
      className={`bg-[#040E32] shadow-2xl flex w-full max-w-6xl mx-auto flex-col overflow-hidden items-stretch text-white font-semibold mt-16 rounded-2xl relative ${className}`}
    >
      {/* Video Section */}
      <div className="relative group">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-t-2xl"
          poster="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/video-poster?placeholderIfAbsent=true"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <button
            onClick={handlePlayPause}
            className="bg-[#1A4CA3] flex items-center gap-2.5 text-lg sm:text-xl px-10 py-5 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/a399acf896c263f3ea31166fab24193e8573dfb2?placeholderIfAbsent=true"
              alt="Play icon"
              className="w-6 h-6"
            />
            <span className="font-montserrat">{isPlaying ? "Pause Video" : "Watch Video"}</span>
          </button>
        </div>

        {/* Duration Label */}
        <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded text-xs sm:text-sm">
          <time>{duration}</time>
        </div>
      </div>

      {/* Text Content Section */}
      <div className="bg-white text-black px-6 sm:px-10 py-10 rounded-b-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins">
          {title}
        </h2>
        <p className="text-lg sm:text-xl font-medium mt-4 font-montserrat">
          {description}
        </p>

        {/* Watch Button */}
        <button
          onClick={handlePlayPause}
          className="bg-[#1A4CA3] mt-6 flex items-center gap-2.5 text-base sm:text-lg text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/a399acf896c263f3ea31166fab24193e8573dfb2?placeholderIfAbsent=true"
            alt="Play icon"
            className="w-6 h-6"
          />
          <span className="font-montserrat">Watch Video</span>
        </button>
      </div>
    </article>
  );
};

export default VideoTestimonial;
