"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Printer, MessageCircle, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1f2226] text-gray-300 w-full pt-16 pb-8 border-t-[3px] border-orange-500">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Logo & Quote */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10 border-b border-gray-700/60 mb-10 gap-6 md:gap-12">
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo.jpg" 
              alt="Longchang Petrochemical" 
              className="h-16 w-auto object-contain" 
            />
          </Link>

          {/* Quote Text */}
          <p className="text-sm text-gray-400 md:max-w-2xl">
            We have maintained our principles - to add value to our customers and provide service in all aspects of our business.
          </p>
        </div>

        {/* Middle Section: Links & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-orange-500 hover:text-orange-400 text-sm transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-white text-sm transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/industries" className="hover:text-white text-sm transition-colors">Industries</Link></li>
              <li><Link href="/contact" className="hover:text-white text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Product Category */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Product Category</h3>
            <ul className="space-y-4">
              <li><Link href="/products" className="hover:text-white text-sm transition-colors">Polyethylene</Link></li>
              <li><Link href="/products" className="hover:text-white text-sm transition-colors">Polypropylene</Link></li>
              <li><Link href="/products" className="hover:text-white text-sm transition-colors">ABS</Link></li>
              <li><Link href="/products" className="hover:text-white text-sm transition-colors">PS</Link></li>
              <li><Link href="/products" className="hover:text-white text-sm transition-colors">Synthetic Rubber</Link></li>
              <li><Link href="/products" className="hover:text-white text-sm transition-colors">PVC</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm">+86 191 0940 2934</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm">+86 173 9320 4547</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:gswiftop@gmail.com" className="text-sm hover:text-white transition-colors">gswiftop@gmail.com</a>
                  <a href="mailto:fenghetai22@gmail.com" className="text-sm hover:text-white transition-colors">fenghetai22@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  No. 81, Qiongshan Avenue, Jiangdong New Area, Haikou City, Hainan Province
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:pl-6">
            <h3 className="text-white font-bold text-lg mb-6">Sign Up For Our Newsletter</h3>
            
            <form className="flex w-full mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address..." 
                className="w-full bg-white text-slate-900 px-4 py-2.5 rounded-l-full outline-none text-sm placeholder:text-gray-400"
                required
              />
              <button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 transition-colors px-5 rounded-r-full flex items-center justify-center text-white"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>

            <div className="flex gap-3">
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 border-t border-gray-700/60 text-center flex flex-col md:flex-row justify-center items-center gap-2 text-xs text-gray-500">
          <p>Copyright 2026 Fenghe Tai (Hainan Special Economic Zone) Import and Export Trading Co., Ltd. All Rights Reserved.</p>
          <p>Copyright © 2026 Fenghe Tai (Hainan Special Economic Zone) Import and Export Trading Co., Ltd. All Rights Reserved.</p>
          <span className="hidden md:inline">|</span>
          <div className="flex gap-2">
            <Link href="/sitemap" className="hover:text-gray-300 transition-colors">Sitemap</Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
