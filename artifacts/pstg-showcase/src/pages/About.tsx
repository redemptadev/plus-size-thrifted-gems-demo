import { AnimatedSection } from "@/components/AnimatedSection";
import aboutImg from "@/assets/about.png";

export default function About() {
  return (
    <div className="bg-[#F8F5F0] text-[#0F0F0F] min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Intro */}
        <AnimatedSection className="text-center mb-20">
          <span className="text-primary italic font-serif text-lg mb-4 block">Our Story</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
            Redefining Accessible Luxury<br/> for Plus-Size Women.
          </h1>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Plus Size Thrifted Gems was born out of a simple, persistent frustration: the Nairobi thrift scene was booming, but true plus-size fashion was treated as an afterthought. 
              </p>
              <p>
                Finding beautiful, high-quality pieces in sizes UK 16 and above often meant digging through piles of ill-fitting, uninspired clothing. We decided that curvy women deserved better. We deserved the boutique experience—the thrill of finding that perfect piece, in a curated environment, without the exorbitant price tag.
              </p>
              <p>
                What started as a small Instagram page showcasing a few hand-picked items has grown into a destination for women across Kenya who want to feel confident, stylish, and celebrated in what they wear.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4"></div>
              <img 
                src={aboutImg} 
                alt="Boutique Behind the Scenes" 
                className="relative z-10 w-full aspect-[3/4] object-cover border border-[#0F0F0F]/10 shadow-xl"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Pull Quote */}
        <AnimatedSection className="py-20 border-y border-primary/30 my-24 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-[#F8F5F0] px-4">
            <div className="w-2 h-2 rounded-full bg-primary mx-auto"></div>
          </div>
          
          <blockquote className="text-center max-w-4xl mx-auto">
            <p className="font-serif text-3xl md:text-5xl italic text-primary leading-snug">
              "Style has no size limit. We believe that premium styling shouldn't be a luxury reserved for a few."
            </p>
          </blockquote>

          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-[#F8F5F0] px-4">
            <div className="w-2 h-2 rounded-full bg-primary mx-auto"></div>
          </div>
        </AnimatedSection>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedSection>
            <h3 className="font-serif text-2xl mb-4 border-b-2 border-primary inline-block pb-1">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide an inclusive, premium thrifting experience that makes every plus-size woman feel seen, valued, and beautifully dressed, no matter where she is in Kenya.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h3 className="font-serif text-2xl mb-4 border-b-2 border-primary inline-block pb-1">Our Promise</h3>
            <p className="text-gray-700 leading-relaxed">
              Every item is thoroughly inspected, washed, and photographed truthfully. We promise transparency in sizing, quality in curation, and respect in our service.
            </p>
          </AnimatedSection>
        </div>

      </div>
    </div>
  );
}