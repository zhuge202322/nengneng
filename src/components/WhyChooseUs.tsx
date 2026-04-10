import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="w-full relative overflow-hidden py-24 md:py-32">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bj/banner1.jpg"
          alt="Gansu Longchang Petrochemical Group Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        <div className="max-w-2xl bg-slate-900/40 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Why Choose Us
          </h2>
          <h3 className="text-orange-400 font-semibold text-lg md:text-xl mb-10 drop-shadow-sm">
            Your Trusted One-Stop Rubber&Plastic Raw Materials
          </h3>

          <div className="space-y-6 text-gray-200 text-sm md:text-base leading-[1.8] md:leading-loose">
            <p>
              <strong className="text-white font-semibold">Gansu Longchang Petrochemical Group Co., Ltd.</strong> has built a leading position in international petrochemical trading and logistics supply solutions. The company was incorporated in later of 1996s. The headquarter of Group is located in GANSU, China, and has 13 subsidiaries located across different parts of China, including Shanghai, Wuhan, Chengdu, Chongqing, Yuncheng, Xi&apos;an, Liaoning etc.
            </p>
            <p>
              We have maintained our principles-to add value to our customers and provide <strong className="text-white font-semibold">service</strong> in all aspects of our business. We offer a unique combination of market knowledge, logistics supply chain and an absolute commitment to customer and supplier partnerships. We are level 1 sales representatives for world-leading oil and petrochemical company, including Sinopec, PetroChina, Shell, Shenhua Group, etc.
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 group"
            >
              View More 
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
