"use client";

import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";

interface Product {
  name: string;
  brief: string;
  imageUrl: string;
  description: string;
  specs: string;
  sourceUrl: string;
}

export default function FeaturedProducts() {
  // Cast productsData to Product[] to fix TS errors
  const typedProducts = productsData as Product[];
  // Let's grab the first 8 products as featured
  const featuredProducts = typedProducts.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Featured Rubber&Plastic Raw Materials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <Link 
                href={`/products/${encodeURIComponent(product.name.replace(/\s+/g, '-').toLowerCase())}`}
                className="w-full aspect-square bg-slate-100 relative mb-5 overflow-hidden block"
              >
                {/* Fallback color/placeholder when image is missing */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                  <span className="text-sm">No Image</span>
                </div>
                
                {/* Real Image using the scraped URL */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105 bg-white"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                />
              </Link>

              {/* Product Name */}
              <h3 className="text-sm text-slate-600 text-center mb-6 h-10 leading-snug px-2 line-clamp-2 overflow-hidden" title={product.name}>
                {product.name}
              </h3>

              {/* View More Button */}
              <Link
                href={`/products/${encodeURIComponent(product.name.replace(/\s+/g, '-').toLowerCase())}`}
                className="px-8 py-1.5 rounded-full border border-orange-400 text-orange-400 text-sm font-medium hover:bg-orange-400 hover:text-white transition-colors duration-300"
              >
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
