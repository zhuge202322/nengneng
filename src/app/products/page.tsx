"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, ShoppingCart, Home } from "lucide-react";
import productsData from "@/data/products.json";

interface Product {
  name: string;
  brief: string;
  imageUrl: string;
  description: string;
  specs: string;
  sourceUrl: string;
}

export default function ProductsPage() {
  const typedProducts = productsData as Product[];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const categories = [
    { name: "Polyethylene", hasSub: true },
    { name: "Polypropylene", hasSub: true },
    { name: "ABS", hasSub: false },
    { name: "PS", hasSub: true },
    { name: "Synthetic Rubber", hasSub: true },
    { name: "PVC", hasSub: true },
    { name: "POE", hasSub: false },
  ];

  const filteredProducts = typedProducts.filter((product) => {
    if (!activeCategory) return true;
    const searchStr = `${product.name} ${product.brief}`.toLowerCase();
    
    if (activeCategory === "Polyethylene") {
      return searchStr.includes("polyethylene") || searchStr.includes("hdpe") || searchStr.includes("ldpe") || searchStr.includes("lldpe");
    }
    if (activeCategory === "Polypropylene") {
      return searchStr.includes("polypropylene") || searchStr.includes(" pp");
    }
    if (activeCategory === "ABS") return searchStr.includes("abs");
    if (activeCategory === "PS") {
      return searchStr.includes("ps") || searchStr.includes("polystyrene") || searchStr.includes("gpps") || searchStr.includes("hips");
    }
    if (activeCategory === "Synthetic Rubber") {
      return searchStr.includes("rubber") || searchStr.includes("sbs") || searchStr.includes("sebs") || searchStr.includes("styrenic");
    }
    if (activeCategory === "PVC") {
      return searchStr.includes("pvc") || searchStr.includes("polyvinyl");
    }
    if (activeCategory === "POE") return searchStr.includes("poe");
    
    return true;
  });

  return (
    <main className="w-full bg-white flex flex-col">
      {/* Top Banner */}
      <div className="w-full h-[200px] md:h-[300px] relative">
        <Image 
          src="/bj/mianbaoxie.jpg" 
          alt="Products Banner" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      {/* Breadcrumb */}
      <div className="w-full bg-[#f9f9f9] border-b border-gray-200 py-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-500">
            <Home size={14} className="text-orange-500 mr-2" />
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Products</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8 w-full">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="border border-gray-200 rounded-sm overflow-hidden">
            <div className="bg-[#e88828] text-white font-bold px-5 py-4 text-lg relative overflow-hidden">
              Product Category
              {/* Decorative faint squares in background matching image */}
              <div className="absolute right-0 top-0 bottom-0 opacity-10 flex items-center justify-end pr-2 overflow-hidden">
                 <div className="w-12 h-12 flex flex-wrap gap-1 rotate-45 transform origin-center scale-150">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-[10px] h-[10px] bg-white opacity-40"></div>
                    ))}
                 </div>
              </div>
            </div>
            <ul className="bg-white">
              {categories.map((cat, idx) => (
                <li key={idx} className="border-b border-gray-100 last:border-b-0">
                  <button 
                    onClick={() => {
                      setActiveCategory(activeCategory === cat.name ? null : cat.name);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-5 py-4 transition-colors flex justify-between items-center text-sm font-medium ${
                      activeCategory === cat.name 
                        ? "text-[#e88828] bg-orange-50" 
                        : "text-slate-700 hover:text-[#e88828] hover:bg-gray-50"
                    }`}
                  >
                    {cat.name}
                    {cat.hasSub && <ChevronDown size={16} className={activeCategory === cat.name ? "text-[#e88828]" : "text-gray-400"} />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-slate-900 inline-block pb-2">
            {activeCategory ? activeCategory : "All Products"}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-12 text-center text-gray-500">
                No products found in this category.
              </div>
            )}
            {filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product, index) => (
              <div key={index} className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col group">
                {/* Image Container */}
                <Link 
                  href={`/products/${encodeURIComponent(product.name.replace(/\s+/g, '-').toLowerCase())}`}
                  className="relative aspect-[4/3] w-full bg-white overflow-hidden border-b border-gray-100 block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0';
                    }}
                  />
                </Link>

                {/* Product Info */}
                <div className="pt-4 flex-1 flex flex-col justify-between">
                  <div className="px-4 mb-4">
                    <Link 
                      href={`/products/${encodeURIComponent(product.name.replace(/\s+/g, '-').toLowerCase())}`}
                      className="text-sm text-slate-700 font-medium text-center leading-snug line-clamp-2 hover:text-[#e88828] transition-colors"
                      title={product.name}
                    >
                      {product.name}
                    </Link>
                  </div>

                  {/* Buttons Row */}
                  <div className="flex items-stretch h-10 w-full mt-auto">
                    <Link 
                      href="/contact"
                      className="flex-1 bg-[#ea8b2e] hover:bg-[#d97c25] text-white flex justify-center items-center gap-2 transition-colors"
                    >
                      <Mail size={14} />
                      <span className="text-xs font-semibold">Inquire</span>
                    </Link>
                    <button className="w-12 bg-[#c62828] hover:bg-[#a62121] text-white flex justify-center items-center transition-colors">
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {Math.ceil(filteredProducts.length / itemsPerPage) > 1 && (
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, i) => i + 1).map((page) => (
                  <button 
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-8 h-8 flex items-center justify-center border transition-colors text-sm rounded-sm ${
                      currentPage === page 
                        ? "border-[#e88828] bg-[#e88828] text-white" 
                        : "border-gray-300 bg-white text-gray-500 hover:bg-[#e88828] hover:text-white hover:border-[#e88828]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                {currentPage < Math.ceil(filteredProducts.length / itemsPerPage) && (
                  <button 
                    onClick={() => {
                      setCurrentPage(prev => prev + 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-3 h-8 flex items-center justify-center border border-gray-300 bg-white text-gray-500 hover:bg-[#e88828] hover:text-white hover:border-[#e88828] transition-colors text-sm rounded-sm"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
