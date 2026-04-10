import Image from "next/image";
import Link from "next/link";
import { Home, ArrowLeft, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="w-full bg-white flex flex-col pb-20">
      {/* Top Banner */}
      <div className="w-full h-[200px] md:h-[300px] relative">
        <Image 
          src="/about/mianbaoxie.jpg" 
          alt="About Us Banner" 
          fill 
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Breadcrumb */}
      <div className="w-full bg-[#f9f9f9] border-b border-gray-200 py-3">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-xs md:text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
            <Home size={14} className="text-[#e88828] mr-2 flex-shrink-0" />
            <Link href="/" className="hover:text-[#e88828] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 truncate">About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex flex-col gap-12">
        
        {/* Company Profile Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[45%] relative aspect-[4/3] bg-gray-100 flex-shrink-0 group overflow-hidden">
            <Image 
              src="/about/10.jpg"
              alt="Gansu Longchang Petrochemical Group" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <h1 className="text-3xl md:text-[34px] font-bold text-slate-900 mb-6">Company Profile</h1>
            <p className="text-gray-600 text-sm md:text-[15px] leading-[1.8] mb-6">
              <strong className="text-slate-800 font-semibold">Gansu Longchang Petrochemical Group Co., Ltd.</strong> has built a leading position in international petrochemical trading and logistics supply solutions. The company was incorporated in later of 1990s. The headquarter of Group is located in GANSU, China, and has 13 subsidiaries located across different parts of China, including Shanghai, Wuhan, Chengdu, Chongqing, Yuncheng, Xi'an, Liaoning etc.
            </p>
            <p className="text-gray-600 text-sm md:text-[15px] leading-[1.8]">
              We have maintained our principles-to add value to our customers and provide <strong className="text-slate-800 font-semibold">service</strong> in all aspects of our business. We offer a unique combination of market knowledge, logistics supply chain and an absolute commitment to customer and supplier partnerships. Our specialist logistical experience and expert market knowledge are applied to the benefit of our trading partners. We are level 1 sales representatives for world-leading oil and petrochemical company, including Sinopec, PetroChina, Shell, Shenhua Group, etc. We serve a diverse range of industries including of oil, gas, petrochemicals, rubber, plastics, medicine, packaging and food <strong className="text-slate-800 font-semibold">industry</strong>. We provide a complete service, from sourcing and acquiring products to transporting and delivering them.
            </p>
          </div>
        </div>

        {/* Additional paragraphs */}
        <div className="text-gray-600 text-sm md:text-[15px] leading-[1.8] space-y-6 mt-2">
          <p>Our core strength comes from our ability to work quickly and effectively in changing markets, to ensure that we provide fast, on time solutions to the urgent needs of clients as well as building lasting relationships based on trust and understanding.</p>
          <p>Our portfolio and the scope of our activities have broadened and developed in response to the needs of our customers, and we welcome all enquiries on how we can help meet your product and service needs.</p>
        </div>

        {/* 3 Warehouse/Facility Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden group">
            <Image src="/about/1-640-640.jpg" alt="Warehouse Facility" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden group">
            <Image src="/about/2-640-640.jpg" alt="Warehouse Inventory" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden group">
            <Image src="/about/3-640-640.jpg" alt="Company Facility" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        {/* Goals & Vision */}
        <div className="space-y-4 mt-6">
          <p className="text-sm md:text-[15px] text-gray-700">
            <span className="text-[#e88828] font-medium">Enterprise goal:</span> To refine the market, improve the channels, improve the service and strengthen the team.
          </p>
          <p className="text-sm md:text-[15px] text-gray-700">
            <span className="text-[#e88828] font-medium">Corporate vision:</span> Committed to becoming the most influential integrated supply chain service provider in the field of petrochemical circulation in China!
          </p>
        </div>

        {/* Warehouse Images Slider Grid */}
        <div className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <div className="relative aspect-square md:aspect-[4/3] bg-gray-100 overflow-hidden group">
              <Image src="/about/12.jpg" alt="Meeting Room" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square md:aspect-[4/3] bg-gray-100 overflow-hidden group">
              <Image src="/about/5-640-640.jpg" alt="Reception Area" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square md:aspect-[4/3] bg-gray-100 overflow-hidden group">
              <Image src="/about/11.jpg" alt="Office Workspace" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square md:aspect-[4/3] bg-gray-100 overflow-hidden group">
              <Image src="/about/4-640-640.jpg" alt="Warehouse Inventory 4" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          
          {/* Slider Progress Bar */}
          <div className="flex items-center gap-6 mt-8">
            <div className="h-[3px] bg-gray-200 flex-1 relative rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-[85%] bg-[#e88828] rounded-full"></div>
            </div>
            <div className="flex items-center gap-4 text-rose-400">
              <button className="hover:text-rose-600 transition-colors">
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>
              <button className="hover:text-rose-600 transition-colors">
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
