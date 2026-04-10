"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const honors = [
  "/bj/17-640-640.jpg",
  "/bj/13-640-640.jpg",
  "/bj/14-640-640.jpg",
  "/bj/15-640-640.jpg",
  "/bj/16-640-640.jpg",
];

export default function HonorAndQualification() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= honors.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? honors.length - 4 : prev - 1));
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
          Honor And Qualification
        </h2>

        <div className="relative">
          {/* Carousel Track */}
          <div className="overflow-hidden -mx-3">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {honors.map((img, index) => (
                <div 
                  key={index} 
                  className="w-1/4 flex-shrink-0 px-3"
                >
                  <div className="relative aspect-[4/3] w-full border-[3px] border-[#dfb1a3] bg-white p-2">
                    {/* Using standard img tag to avoid Next.js static asset missing errors during dev */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`Honor Qualification ${index + 1}`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.opacity = '0';
                        e.currentTarget.parentElement!.classList.add('bg-slate-50');
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Progress Bar & Navigation Controls */}
          <div className="mt-12 flex items-center justify-between">
            {/* Progress Bar */}
            <div className="flex-1 h-0.5 bg-gray-200 mr-8 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-orange-400 transition-all duration-500 ease-in-out"
                style={{ 
                  width: `${(4 / honors.length) * 100}%`,
                  transform: `translateX(${currentIndex * 100}%)`
                }}
              ></div>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-4 text-orange-400">
              <button 
                onClick={prevSlide}
                className="hover:text-orange-600 transition-colors"
                aria-label="Previous"
              >
                <ArrowLeft size={20} strokeWidth={2} />
              </button>
              <button 
                onClick={nextSlide}
                className="hover:text-orange-600 transition-colors"
                aria-label="Next"
              >
                <ArrowRight size={20} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
