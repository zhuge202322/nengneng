"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import { Home, Edit, ShoppingCart, Minus, Plus, Share2 } from "lucide-react";
import productsData from "@/data/products.json";

interface Product {
  name: string;
  brief: string;
  imageUrl: string;
  description: string;
  specs: string;
  sourceUrl: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [quantity, setQuantity] = useState(1);
  const typedProducts = productsData as Product[];
  
  // Find the product that matches the slug
  const product = typedProducts.find(
    (p) => encodeURIComponent(p.name.replace(/\s+/g, '-').toLowerCase()) === slug
  );

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Clean up scraped HTML to fix broken images and messy layouts
  const getCleanDescription = (html: string) => {
    if (!html) return "";
    
    // In browser environment, we can use DOMParser to extract and safely manipulate the content
    if (typeof window !== 'undefined') {
      try {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const container = doc.querySelector('.prodDetail-editor-container');
        
        if (container) {
          // 1. Remove all inline scripts and styles
          container.querySelectorAll('script, style').forEach(el => el.remove());
          
          // 2. Fix images (lazy loading, missing protocols, fixed sizes, and hotlinking)
          container.querySelectorAll('img').forEach(img => {
            // Restore actual image URLs from lazy-loading attributes
            const realSrc = img.getAttribute('data-original') || img.getAttribute('org-src');
            if (realSrc) {
              img.setAttribute('src', realSrc);
            }
            
            // Fix protocol-relative URLs or absolute paths
            const currentSrc = img.getAttribute('src');
            if (currentSrc) {
              if (currentSrc.startsWith('//')) {
                img.setAttribute('src', `https:${currentSrc}`);
              } else if (currentSrc.startsWith('/') && !currentSrc.startsWith('//')) {
                img.setAttribute('src', `https://www.lcpetrochemical.com${currentSrc}`);
              }
            }
            
            // Extremely important: Bypass the original site's image hotlink protection (403 Forbidden)
            img.setAttribute('referrerpolicy', 'no-referrer');
            
            // Remove hardcoded width/height attributes and inline styles that break responsiveness
            img.removeAttribute('width');
            img.removeAttribute('height');
            img.style.width = '';
            img.style.height = '';
          });

          // 3. Fix iframe videos (lazy loading data-src)
          container.querySelectorAll('iframe').forEach(iframe => {
            const realSrc = iframe.getAttribute('data-src');
            if (realSrc) {
              iframe.setAttribute('src', realSrc);
            }
            // Make iframes responsive
            iframe.removeAttribute('width');
            iframe.removeAttribute('height');
            iframe.classList.add('w-full', 'aspect-video');
          });
          
          return container.innerHTML;
        }
      } catch (e) {
        console.error("Failed to parse HTML", e);
      }
    }
    
    // Fallback for server-side rendering or if parsing fails
    let clean = html;
    clean = clean.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    clean = clean.replace(/data-original="([^"]+)"/g, 'src="$1"');
    clean = clean.replace(/src="\/\//g, 'src="https://');
    clean = clean.replace(/width="[0-9]+"/g, '');
    clean = clean.replace(/height="[0-9]+"/g, '');
    clean = clean.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    clean = clean.replace(/<img /gi, '<img referrerpolicy="no-referrer" ');
    return clean;
  };

  if (!product) {
    return (
      <div className="w-full flex-1 flex flex-col items-center justify-center py-32 bg-white">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Product Not Found</h1>
        <p className="text-slate-600 mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link href="/products" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <main className="w-full bg-white flex flex-col">
      {/* Top Banner (Slimmer for detail page) */}
      <div className="w-full h-[150px] md:h-[200px] relative">
        <Image 
          src="/bj/mianbaoxie.jpg" 
          alt="Product Banner" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      {/* Breadcrumb */}
      <div className="w-full bg-[#f9f9f9] border-b border-gray-200 py-3">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-xs md:text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
            <Home size={14} className="text-orange-500 mr-2 flex-shrink-0" />
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-orange-500 transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Images */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Main Large Image */}
            <div className="relative aspect-square w-full bg-white border border-gray-200 p-6 mb-4 flex items-center justify-center group overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.imageUrl}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.currentTarget.style.opacity = '0'; }}
              />
            </div>
            
            {/* Thumbnails Gallery */}
            <div className="flex items-center gap-2 h-20">
              <button className="w-6 h-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors">
                &lt;
              </button>
              <div className="flex-1 h-full flex gap-2 overflow-hidden items-center justify-center">
                {/* Active Thumbnail */}
                <div className="h-full aspect-square border-2 border-orange-500 p-1 cursor-pointer bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                  />
                </div>
                {/* Fallback empty thumbnails to match visual layout of a gallery */}
                <div className="h-full aspect-square border border-gray-200 p-1 opacity-50 cursor-not-allowed bg-gray-50"></div>
                <div className="h-full aspect-square border border-gray-200 p-1 opacity-50 cursor-not-allowed bg-gray-50 hidden sm:block"></div>
              </div>
              <button className="w-6 h-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors">
                &gt;
              </button>
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-start gap-3 mb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                {product.name}
              </h1>
              {/* Fake QR code icon placeholder */}
              <div className="w-6 h-6 border-2 border-gray-300 rounded-sm flex items-center justify-center p-0.5 opacity-60 flex-shrink-0 mt-1">
                <div className="w-full h-full border border-gray-400 border-dashed"></div>
              </div>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 border-b border-gray-200 pb-8">
              {product.brief || "High-quality plastic raw materials. Please inquire for detailed specifications and chemical properties."}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-10">
              <span className="text-sm font-medium text-slate-700">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-sm overflow-hidden h-9">
                <button 
                  onClick={handleDecrease}
                  className="w-9 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors border-r border-gray-300"
                >
                  <Minus size={14} />
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-14 h-full text-center text-sm outline-none bg-transparent" 
                />
                <button 
                  onClick={handleIncrease}
                  className="w-9 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors border-l border-gray-300"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 max-w-[300px] mb-10">
              <Link 
                href="/contact"
                className="w-full h-11 border-2 border-[#f19a42] text-[#e88828] font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors"
              >
                Inquire <Edit size={16} />
              </Link>
            </div>

            {/* Social Share Icons */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#3b5998] rounded-sm flex justify-center items-center text-white cursor-pointer hover:opacity-80 font-bold text-xs">f</div>
              <div className="w-6 h-6 bg-black rounded-sm flex justify-center items-center text-white cursor-pointer hover:opacity-80 font-bold text-xs">X</div>
              <div className="w-6 h-6 bg-[#25D366] rounded-sm flex justify-center items-center text-white font-bold text-xs cursor-pointer hover:opacity-80">W</div>
              <div className="w-6 h-6 bg-[#0077b5] rounded-sm flex justify-center items-center text-white cursor-pointer hover:opacity-80 font-bold text-xs">in</div>
              <div className="w-6 h-6 bg-[#bd081c] rounded-sm flex justify-center items-center text-white font-bold text-xs cursor-pointer hover:opacity-80">P</div>
              <div className="w-6 h-6 bg-[#00e676] rounded-sm flex justify-center items-center text-white font-bold text-xs cursor-pointer hover:opacity-80">We</div>
              <div className="w-6 h-6 bg-[#8bc34a] rounded-sm flex justify-center items-center text-white cursor-pointer hover:opacity-80">
                <Share2 size={12} />
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Detailed Description Section */}
        <div className="mt-20 border border-gray-200">
          {/* Tab Header */}
          <div className="flex bg-[#f5f5f5] border-b border-gray-200">
            <div className="px-8 py-4 bg-white border-t-[3px] border-t-orange-500 font-medium text-slate-800 text-sm">
              Product Description
            </div>
          </div>
          
          {/* Tab Content (Dangerously Set Scraped HTML) */}
          <div className="p-6 md:p-10 bg-white min-h-[400px]">
            {product.description ? (
              <div 
                className="product-rich-text text-sm md:text-base text-slate-700 leading-relaxed space-y-6 [&>p]:mb-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mb-2 [&_h3]:mt-6 [&_strong]:font-bold [&_strong]:text-slate-900 [&_img]:max-w-full [&_img]:!h-auto [&_img]:!w-auto [&_img]:my-6 [&_img]:border [&_img]:border-gray-100 [&_div]:!w-auto [&_div]:!max-w-full [&_div]:!h-auto [&_.container]:!px-0 [&_.outerContainer]:!p-0 overflow-hidden"
                dangerouslySetInnerHTML={{ __html: getCleanDescription(product.description) }}
              />
            ) : (
              <div className="text-gray-500 italic py-10">Detailed product description is currently unavailable.</div>
            )}
            
            {/* Fallback to show specs if there's no description but specs exist */}
            {(!product.description && product.specs) && (
              <div className="mt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Specifications</h3>
                <p className="text-sm text-slate-600 whitespace-pre-wrap">{product.specs}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
