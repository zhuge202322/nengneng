"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/bj/banner.jpg",
  "/bj/banner1.jpg",
  "/bj/banner2.jpg",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-96px)] overflow-hidden group bg-slate-900">
      {/* Sliding Track */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {/* Using standard img for reliable rendering without Next.js Image wrapper issues */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Subtle dark overlay to make potential text legible */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Center Content Placeholder (Optional) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white pointer-events-none">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg transform translate-y-4 opacity-0 animate-[fade-in-up_1s_ease-out_forwards]">
          Longchang Petrochemical
        </h1>
        <p className="text-xl md:text-2xl drop-shadow-md transform translate-y-4 opacity-0 animate-[fade-in-up_1s_ease-out_0.3s_forwards]">
          High-Quality Materials For Global Industries
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-30 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-30 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-orange-500 w-8" 
                : "bg-white/60 hover:bg-white w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
