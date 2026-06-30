import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How do I order?",
    answer: "Ordering is simple! Browse our collection here or on our Instagram page. Once you find a piece you love, click the 'Order on WhatsApp' button. Send us a message with the item details or a screenshot, and we'll confirm availability, finalize payment, and arrange delivery."
  },
  {
    question: "Do you deliver countrywide?",
    answer: "Yes, we deliver across all 47 counties in Kenya. Deliveries within Nairobi are dispatched via local riders (same day or next day). Deliveries outside Nairobi are sent via reliable courier services like Fargo Courier or Wells Fargo and typically arrive within 24-48 hours."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We primarily accept M-Pesa (Buy Goods/Till Number). We require full payment before dispatch to secure your item, as all pieces are unique and fast-moving."
  },
  {
    question: "Can I reserve an item?",
    answer: "Due to the unique nature of thrifted items, we operate on a 'first to pay, first served' basis. We can hold an item for a maximum of 2 hours while you complete payment, after which it will be released to the next interested buyer."
  },
  {
    question: "What sizes do you carry?",
    answer: "We specialize exclusively in plus-size fashion. Our curation typically ranges from UK size 16 to UK size 26+. Each item is measured and clearly labeled with its estimated UK size equivalent."
  },
  {
    question: "How do I know if something fits?",
    answer: "We understand that sizing can be tricky. We provide standard UK size estimates, but we are always happy to provide exact measurements (bust, waist, hips, length) via WhatsApp if you need further clarification before purchasing."
  },
  {
    question: "Do you accept returns or exchanges?",
    answer: "Since these are thrifted, unique pieces, all sales are final. We do not offer refunds or exchanges. We ensure high-quality standards and transparently disclose any minor flaws (if any) before purchase."
  }
];

export default function FAQ() {
  return (
    <div className="bg-[#F8F5F0] text-[#0F0F0F] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary italic font-serif text-lg mb-4 block">Help & Information</span>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-600">Everything you need to know about shopping with us.</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="font-serif text-lg md:text-xl text-left hover:text-primary transition-colors [&>svg]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4} className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#0F0F0F] text-white hover:bg-primary hover:text-[#0F0F0F] transition-colors duration-300 font-medium tracking-wide uppercase text-sm"
          >
            Contact Support
          </a>
        </AnimatedSection>

      </div>
    </div>
  );
}