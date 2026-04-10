"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatingButtons() {
  // Define WhatsApp numbers based on the footer numbers
  const whatsapp1 = "8619109402934"; // Removing the + and spaces for the WA link
  const whatsapp2 = "8617393204547";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button 1 */}
      <a 
        href={`https://wa.me/${whatsapp1}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
        aria-label="Chat on WhatsApp - Customer Service 1"
      >
        <MessageCircle size={28} />
        {/* Tooltip that shows on hover */}
        <span className="absolute right-16 bg-white text-slate-800 text-sm font-bold px-3 py-1.5 rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border border-gray-100 flex items-center gap-2">
          <span className="text-[#25D366]">WhatsApp</span>
          <span>+86 191 0940 2934</span>
          {/* Tooltip triangle pointer */}
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white border-r border-t border-gray-100 rotate-45"></div>
        </span>
      </a>

      {/* WhatsApp Button 2 */}
      <a 
        href={`https://wa.me/${whatsapp2}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
        aria-label="Chat on WhatsApp - Customer Service 2"
      >
        <MessageCircle size={28} />
        {/* Tooltip that shows on hover */}
        <span className="absolute right-16 bg-white text-slate-800 text-sm font-bold px-3 py-1.5 rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border border-gray-100 flex items-center gap-2">
          <span className="text-[#25D366]">WhatsApp</span>
          <span>+86 173 9320 4547</span>
          {/* Tooltip triangle pointer */}
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white border-r border-t border-gray-100 rotate-45"></div>
        </span>
      </a>
    </div>
  );
}
