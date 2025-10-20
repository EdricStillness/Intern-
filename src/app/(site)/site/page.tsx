import { CallToActionSection } from "./components/CallToActionSection";
import { FaqSection } from "./components/FaqSection";
import { HeroSection } from "./components/HeroSection";
import { OperationsSection } from "./components/OperationsSection";
import { PricingSection } from "./components/PricingSection";
import { ProductsSection } from "./components/ProductsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import {
  faqs,
  heroHighlights,
  metrics,
  operations,
  pricingPlans,
  products,
  testimonials,
} from "./content";

export default function TailCommerceStorefront() {
  return (
    <div className="space-y-24">
      <HeroSection highlights={heroHighlights} metrics={metrics} />
      <ProductsSection products={products} />
      <OperationsSection operations={operations} />
      <PricingSection plans={pricingPlans} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
      <CallToActionSection />
    </div>
  );
}
