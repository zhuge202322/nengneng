"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, MapPin, Phone, Mail, Smartphone, RefreshCw } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="w-full bg-white flex flex-col pb-20">
      {/* Top Banner */}
      <div className="w-full h-[200px] md:h-[300px] relative">
        <Image 
          src="/about/mianbaoxie.jpg" 
          alt="Contact Us Banner" 
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
            <span className="text-gray-700 truncate">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Contact Information */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <h1 className="text-2xl md:text-[28px] font-bold text-slate-900 leading-tight mb-6">
              Have any questions? Contact us for assistance.
            </h1>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-10">
              We are available 24/7 by e-mail or by phone. You can also use our quick contact form to ask a question about our services. We would be pleased to answer your questions.
            </p>

            <ul className="space-y-6">
              {/* Address */}
              <li className="flex items-start gap-4 pb-6 border-b border-gray-100">
                <div className="w-6 h-6 bg-[#e88828] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={13} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold italic text-slate-800 mb-1">Address:</span>
                  <span className="text-[15px] text-gray-600 italic">Room 2705, 27/F, China Resources Building, 26 Harbour Road, Wanchai, Hong Kong</span>
                </div>
              </li>
              
              {/* Phone 1 */}
              <li className="flex items-start gap-4 pb-6 border-b border-gray-100">
                <div className="w-6 h-6 bg-[#e88828] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={13} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold italic text-slate-800">Phone:</span>
                  <span className="text-[15px] text-gray-600 italic">+86 191 0940 2934</span>
                </div>
              </li>

              {/* Tel / Phone 2 */}
              <li className="flex items-start gap-4 pb-6 border-b border-gray-100">
                <div className="w-6 h-6 bg-[#e88828] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={13} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold italic text-slate-800">Tel:</span>
                  <span className="text-[15px] text-gray-600 italic">+86 173 9320 4547</span>
                </div>
              </li>

              {/* WhatsApp */}
              <li className="flex items-start gap-4 pb-6 border-b border-gray-100">
                <div className="w-6 h-6 bg-[#e88828] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Smartphone size={13} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold italic text-slate-800">WhatsApp:</span>
                  <span className="text-[15px] text-gray-600 italic">+86 191 0940 2934</span>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#e88828] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={13} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold italic text-slate-800">Email:</span>
                  <a href="mailto:gswiftop@gmail.com" className="text-[15px] text-gray-600 hover:text-[#e88828] transition-colors italic">gswiftop@gmail.com</a>
                  <span className="text-gray-400">/</span>
                  <a href="mailto:fenghetai22@gmail.com" className="text-[15px] text-gray-600 hover:text-[#e88828] transition-colors italic">fenghetai22@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-[55%] flex flex-col pt-2 lg:pt-0">
            <h2 className="text-3xl md:text-[34px] font-bold text-slate-900 mb-8">
              Contact Us
            </h2>
            
            <form className="flex flex-col gap-5 w-full max-w-2xl" onSubmit={(e) => e.preventDefault()}>
              {/* Row 1: Company Name & Tel */}
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="w-full bg-[#f4f4f4] border border-transparent focus:border-[#e88828] focus:bg-white transition-colors outline-none px-4 py-3.5 text-sm text-gray-700"
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="tel" 
                    placeholder="Tel" 
                    className="w-full bg-[#f4f4f4] border border-transparent focus:border-[#e88828] focus:bg-white transition-colors outline-none px-4 py-3.5 text-sm text-gray-700"
                  />
                </div>
              </div>

              {/* Row 2: Email & Name */}
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1">
                  <input 
                    type="email" 
                    placeholder="*Email" 
                    required
                    className="w-full bg-[#f4f4f4] border border-transparent focus:border-[#e88828] focus:bg-white transition-colors outline-none px-4 py-3.5 text-sm text-gray-700"
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-[#f4f4f4] border border-transparent focus:border-[#e88828] focus:bg-white transition-colors outline-none px-4 py-3.5 text-sm text-gray-700"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="w-full">
                <textarea 
                  placeholder="*Message" 
                  required
                  rows={5}
                  className="w-full bg-[#f4f4f4] border border-transparent focus:border-[#e88828] focus:bg-white transition-colors outline-none px-4 py-3.5 text-sm text-gray-700 resize-y"
                ></textarea>
              </div>

              {/* Row 4: Verify Code & Submit */}
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center w-full">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <input 
                    type="text" 
                    placeholder="*Verify Code" 
                    required
                    className="w-full sm:w-36 bg-[#f4f4f4] border border-transparent focus:border-[#e88828] focus:bg-white transition-colors outline-none px-4 py-3.5 text-sm text-gray-700"
                  />
                  {/* Fake CAPTCHA image with some colorful letters to match screenshot */}
                  <div className="h-[46px] w-24 bg-white border border-gray-200 flex items-center justify-center font-serif text-lg font-bold select-none cursor-pointer tracking-widest relative overflow-hidden" title="Click to refresh">
                    {/* Background noise lines */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="w-full h-[1px] bg-red-500 absolute top-3 rotate-12"></div>
                      <div className="w-full h-[1px] bg-blue-500 absolute top-8 -rotate-6"></div>
                    </div>
                    <span className="text-blue-600 rotate-[-10deg]">v</span>
                    <span className="text-green-600 rotate-[15deg]">f</span>
                    <span className="text-red-500 rotate-[-5deg]">q</span>
                    <span className="text-yellow-500 rotate-[20deg]">z</span>
                  </div>
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full mt-4 bg-[#e88828] hover:bg-[#d67a1f] text-white font-medium py-3.5 px-8 rounded-full transition-colors text-sm"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
