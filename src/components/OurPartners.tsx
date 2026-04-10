"use client";

import Image from "next/image";

export default function OurPartners() {
  return (
    <section className="py-20 md:py-28 bg-[#f8f8f8] w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12 md:mb-20">
          Our Partners
        </h2>
        
        <div className="relative w-full max-w-5xl mx-auto flex justify-center">
          {/* Using standard img tag for robust local development viewing */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/bj/huoz.png" 
            alt="Our Partners" 
            className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.opacity = '0';
            }}
          />
        </div>
      </div>
    </section>
  );
}
