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
      className={`bg-[rgba(4,14,50,1)] shadow-2xl flex w-full max-w-[1324px] flex-col overflow-hidden items-stretch text-white font-semibold mt-[69px] rounded-[22px] max-md:max-w-full max-md:mt-10 relative ${className}`}
    >
      <div className="relative group">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-t-[22px]"
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
            className="bg-[rgba(26,76,163,1)] flex items-center gap-2.5 text-[22px] text-white justify-center px-[50px] py-[22px] rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/a399acf896c263f3ea31166fab24193e8573dfb2?placeholderIfAbsent=true"
              alt="Play icon"
              className="aspect-[1] object-contain w-7 self-stretch shrink-0 my-auto"
            />
            <span className="self-stretch my-auto font-montserrat">
              {isPlaying ? "Pause Video" : "Watch Video"}
            </span>
          </button>
        </div>

        <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
          <time>{duration}</time>
        </div>
      </div>

      <div className="bg-white flex w-full flex-col overflow-hidden text-black pl-[49px] py-14 rounded-[0px_0px_22px_22px] max-md:max-w-full max-md:pl-5">
        <h2 className="text-[38px] max-md:max-w-full font-poppins">{title}</h2>
        <p className="text-[28px] font-medium self-stretch mt-7 max-md:max-w-full font-montserrat">
          {description}
        </p>
        <button
          onClick={handlePlayPause}
          className="bg-[rgba(26,76,163,1)] w-1/4 mt-5 flex items-center gap-2.5 text-[22px] text-white justify-center px-[40px] py-[22px] rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/a399acf896c263f3ea31166fab24193e8573dfb2?placeholderIfAbsent=true"
            alt="Play icon"
            className="aspect-[1] object-contain w-7 self-stretch shrink-0 my-auto"
          />
          <span className="self-stretch my-auto font-montserrat">
            Watch Video
          </span>
        </button>
      </div>
    </article>
  );
};

export default VideoTestimonial;
