import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center min-h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/bj/bj.jpg"
          alt="Plastic raw materials background"
          fill
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay to ensure text is readable against the background */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            Let&apos;s Work Together To Anticipate And Meet Your Customers&apos; Expectations.
          </h2>
          
          <p className="text-gray-100 text-sm md:text-base leading-relaxed mb-10 drop-shadow">
            Our portfolio and the scope of our activities have broadened and developed in response to the needs of our customers, and we welcome all enquiries on how we can help meet your product and service needs.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 group w-fit"
          >
            View More 
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
