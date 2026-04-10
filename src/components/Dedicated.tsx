import { FileText, Settings, Truck } from "lucide-react";

const features = [
  {
    title: "Common",
    icon: <FileText className="w-7 h-7" strokeWidth={1.5} />,
    items: [
      "Raw materials and prices (for the sale of bulk plastic raw materials, most of them can be billed in the upstream)",
      "Inquiry",
      "Contract signing",
      "Delivery",
      "Transportation",
      "After-sales"
    ]
  },
  {
    title: "Advantages",
    icon: <Settings className="w-7 h-7" strokeWidth={1.5} />,
    items: [
      "The inquiry conversion rate is high (mainly because we have professional technical consulting services, which can quickly match resources to customers).",
      "Low cost of raw materials (AAA customers of many upstream cooperative enterprises can enjoy preferential policies).",
      "The national distribution resources are rich and can be deployed.",
      "More than 280 warehouses nationwide.",
      "Not cross-industry development, professional and consistent.",
      "Quickly solve problems for customers with after-sales problems.",
      "Has its own main brand (such as Northwest Pipe)."
    ]
  },
  {
    title: "Characteristic",
    icon: <Truck className="w-7 h-7" strokeWidth={1.5} />,
    items: [
      "We have our own logistics company, and the shipping areas are all over the country, forming a close combination of sales network and logistics network.",
      "There are 21 branches all over the country, that is, each major region has its own branch, which has great advantages in billing in local petrochemical plants and abundant supply."
    ]
  }
];

function CheckIcon() {
  return (
    <svg 
      className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="9 11 12 14 22 4"></polyline>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  );
}

export default function Dedicated() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-14">
          Dedicated To Rubber&Plastic Raw Materials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#fdf8f4] rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full border-2 border-red-400 text-red-500 flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {feature.title}
              </h3>

              {/* List */}
              <ul className="space-y-4">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-slate-600 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
