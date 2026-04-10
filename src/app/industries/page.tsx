import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export default function IndustriesPage() {
  // Placeholder articles array
  const articles = [
    {
      id: 1,
      title: "Why ABS Plastic Granules Are The Go-To Choice for Automobile Manufacturing",
      excerpt: "In the modern automotive industry, the integration of advanced electrical system and durable components requires high-performance materials...",
      imageUrl: "/about/5-640-640.jpg", // Placeholder image
      date: "2026-04-10"
    },
    {
      id: 2,
      title: "What Makes ABS Plastic Granules An Ideal Material for 3D Printing",
      excerpt: "In recent years, 3D printing has revolutionized the way products are designed and manufactured across multiple industries...",
      imageUrl: "/about/6-640-640.jpg", // Placeholder image
      date: "2026-04-09"
    },
    {
      id: 3,
      title: "The Growing Demand for High-Density Polyethylene in Packaging Industry",
      excerpt: "Packaging solutions are constantly evolving, and HDPE continues to dominate the market due to its unmatched strength-to-density ratio...",
      imageUrl: "/about/7-640-640.jpg", // Placeholder image
      date: "2026-04-08"
    },
    {
      id: 4,
      title: "How Polypropylene is Transforming the Medical Equipment Sector",
      excerpt: "The medical sector demands materials that are not only durable but also capable of withstanding strict sterilization processes. Polypropylene fits...",
      imageUrl: "/about/4-640-640.jpg", // Placeholder image
      date: "2026-04-07"
    },
    {
      id: 5,
      title: "Sustainable Alternatives in the Synthetic Rubber Supply Chain",
      excerpt: "With the global push towards greener manufacturing, the synthetic rubber industry is actively exploring sustainable and recyclable alternatives...",
      imageUrl: "/about/11.jpg", // Placeholder image
      date: "2026-04-06"
    },
    {
      id: 6,
      title: "Exploring the Versatility of PVC Resins in Construction Applications",
      excerpt: "From piping systems to window profiles, PVC resins have been a cornerstone material in modern construction due to their cost-effectiveness...",
      imageUrl: "/about/12.jpg", // Placeholder image
      date: "2026-04-05"
    }
  ];

  return (
    <main className="w-full bg-white flex flex-col pb-20">
      {/* Top Banner */}
      <div className="w-full h-[200px] md:h-[300px] relative">
        <Image 
          src="/Industries/mianbaoxie.jpg" 
          alt="Industries Banner" 
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
            <span className="text-gray-700 truncate">Industries</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
          Industries
        </h1>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {articles.map((article) => (
            <Link href="#" key={article.id} className="flex flex-col group block">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                <Image 
                  src={article.imageUrl} 
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Article Content */}
              <div className="flex flex-col">
                <h3 className="text-[17px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#e88828] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 leading-[1.8] line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
