"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Users, Headset, Truck } from "lucide-react";

const services = [
  {
    icon: <Users className="w-8 h-8 text-orange-500" strokeWidth={1.5} />,
    title: "Sales",
    desc: "Before we provide products to customers, if customers don't take the initiative to inform them of the special requirements for products, we will ask customers about the requirements for material characteristics and provide customers with accurate materials as much as possible."
  },
  {
    icon: <Headset className="w-8 h-8 text-orange-500" strokeWidth={1.5} />,
    title: "Production, processing and technical consultation",
    desc: "Customers can ask us any questions in the process of using raw materials, and if necessary, we will negotiate with suppliers to jointly solve problems for customers."
  },
  {
    icon: <Truck className="w-8 h-8 text-orange-500" strokeWidth={1.5} />,
    title: "Warehousing and logistics",
    desc: "Our company has nearly 300 cooperative warehouses all over the country. We stock up in the nearest warehouse according to the shipping port designated by customers, and then deliver the goods according to the contract. At home, we have our own logistics company to deliver the goods, and we also have reliable logistics partners at the port to help us deliver the goods smoothly. Our company can reduce the transportation cost by supporting a variety of transportation modes, such as railway, sea and multimodal transport."
  }
];

export default function ServiceWeOffer() {
  return (
    <section className="w-full bg-[#fcfcfc] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row w-full relative">
          
          {/* Left Column */}
          <div className="lg:w-5/12 pt-10 lg:pt-28 pb-10 pr-0 lg:pr-12 flex flex-col items-start z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Service We Offer
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Customers can choose shipping methods such as FOB or CIF. For example, if customers choose CIF, our company will perform its duties and deliver the goods to the customer&apos;s destination port according to the contract.
            </p>
            <Link
              href="/service"
              className="inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 group"
            >
              View More 
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="mt-16 w-full max-w-[450px] self-center lg:self-start relative">
              {/* Product Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/bj/7.png" 
                alt="Blue plastic granules" 
                className="w-full h-auto object-contain drop-shadow-2xl"
                onError={(e) => {
                  e.currentTarget.style.opacity = '0';
                }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-7/12 relative py-10 lg:py-24 lg:pl-16">
            {/* Right Side Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image 
                src="/bj/30.png" 
                alt="White plastic granules background" 
                fill 
                className="object-cover opacity-[0.35]"
              />
              {/* Gradient to fade left edge into the solid background of the section */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#fcfcfc] via-[#fcfcfc]/50 to-transparent hidden lg:block w-32"></div>
            </div>

            <div className="relative z-10 flex flex-col">
              {services.map((service, idx) => (
                <div key={idx} className="flex flex-col">
                  {/* Custom Divider */}
                  {idx !== 0 && <hr className="my-8 border-gray-200/70" />}
                  
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
