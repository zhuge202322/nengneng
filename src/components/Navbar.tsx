"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [activeMenuCat, setActiveMenuCat] = useState("Polyethylene");

  const productMenu = [
    {
      name: "Polyethylene",
      subCats: [
        "Linear Low Density Polyethylene",
        "High Density Polyethylene",
        "Low-Density Polyethylene",
        "Medical Polyethylene"
      ]
    },
    {
      name: "Polypropylene",
      subCats: [
        "High Melting Finger Polypropylene",
        "Low Melting Point Copolymer",
        "Homopolymer Granules",
        "Injection Grade PP"
      ]
    },
    {
      name: "ABS",
      subCats: []
    },
    {
      name: "PS",
      subCats: [
        "GPPS",
        "HIPS"
      ]
    },
    {
      name: "Synthetic Rubber",
      subCats: [
        "SBR (Styrene Butadiene Rubber)",
        "NBR (Nitrile Butadiene Rubber)",
        "SBS (Styrenic Block Copolymers)",
        "BR (Butadiene Rubber)"
      ]
    },
    {
      name: "PVC",
      subCats: [
        "Polyvinyl Chloride Powder",
        "PVC Resin"
      ]
    },
    {
      name: "POE",
      subCats: []
    }
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b z-50 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo.jpg" 
              alt="Longchang Petrochemical" 
              className="h-16 md:h-20 lg:h-[88px] w-auto object-contain" 
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 lg:space-x-12 items-center">
            <div className="relative group h-24 flex items-center">
              <Link href="/" className="text-orange-500 font-medium hover:text-orange-600">Home</Link>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group h-24 flex items-center">
              <Link href="/products" className="text-orange-500 font-medium hover:text-orange-600 flex items-center gap-1">
                Products
              </Link>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              
              {/* Mega Menu Dropdown */}
              <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex border-t border-gray-100">
                {/* Dark Blue Sidebar */}
                <div className="w-64 bg-slate-800 text-white p-6 relative overflow-hidden">
                  <div className="absolute left-6 top-8 text-orange-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12,2 22,22 2,22" />
                    </svg>
                  </div>
                  <div className="absolute left-6 top-24 text-orange-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </div>
                  <div className="absolute left-6 top-36 text-orange-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Categories Column */}
                <div className="w-64 border-r border-gray-100 bg-white">
                  <ul className="py-2">
                    {productMenu.map((cat, idx) => (
                      <li 
                        key={idx}
                        onMouseEnter={() => setActiveMenuCat(cat.name)}
                        className={`px-6 py-4 hover:bg-gray-50 border-b border-gray-100 cursor-pointer text-slate-700 font-medium text-sm flex items-center justify-between group/item ${activeMenuCat === cat.name ? 'bg-gray-50 text-orange-500' : ''}`}
                      >
                        <Link href="/products" className="w-full h-full block">
                          {cat.name}
                        </Link>
                        {activeMenuCat === cat.name && (
                          <div className="w-1 h-8 bg-orange-500 absolute right-0 transition-opacity"></div>
                        )}
                        <div className="w-1 h-8 bg-orange-500 absolute right-0 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subcategories Column */}
                <div className="flex-1 bg-white relative">
                  <ul className="py-2">
                    {productMenu.find(c => c.name === activeMenuCat)?.subCats.map((sub, idx) => (
                      <li key={idx} className="px-8 py-4 flex items-center gap-3 text-slate-600 text-sm hover:text-orange-500 cursor-pointer border-b border-gray-50">
                        <Link href="/products" className="w-full h-full flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                          {sub}
                        </Link>
                      </li>
                    ))}
                    {productMenu.find(c => c.name === activeMenuCat)?.subCats.length === 0 && (
                      <li className="px-8 py-8 text-gray-400 text-sm italic">
                        View all products in this category
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-slate-700 font-medium hover:text-orange-500 transition-colors">About Us</Link>
            <Link href="/industries" className="text-slate-700 font-medium hover:text-orange-500 transition-colors">Industries</Link>
            <Link href="/contact" className="text-slate-700 font-medium hover:text-orange-500 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
