import HeroCarousel from "@/components/HeroCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import HonorAndQualification from "@/components/HonorAndQualification";
import Dedicated from "@/components/Dedicated";
import CallToAction from "@/components/CallToAction";
import ServiceWeOffer from "@/components/ServiceWeOffer";
import OurPartners from "@/components/OurPartners";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <HeroCarousel />
      <FeaturedProducts />
      <WhyChooseUs />
      <HonorAndQualification />
      <Dedicated />
      <CallToAction />
      <ServiceWeOffer />
      <OurPartners />
    </main>
  );
}
