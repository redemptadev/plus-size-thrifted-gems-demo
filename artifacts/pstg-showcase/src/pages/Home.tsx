import { motion } from "framer-motion";
import { Link } from "wouter";
import { FaWhatsapp, FaCheckCircle, FaStar, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { AnimatedSection } from "@/components/AnimatedSection";

// Real product images from Instagram
import dress1 from "@assets/Screenshot_30-6-2026_143113_www.instagram.com_1782819114130.jpeg";
import dress2 from "@assets/Screenshot_30-6-2026_14310_www.instagram.com_1782819114130.jpeg";
import dress3 from "@assets/Screenshot_30-6-2026_143047_www.instagram.com_1782819114130.jpeg";
import logoImg from "@assets/727519327_18093713027263464_1789033325456858993_n_1782819260564.jpg";
import insta1 from "@/assets/insta-1.png";
import insta2 from "@/assets/insta-2.png";
import insta3 from "@/assets/insta-3.png";

const WHATSAPP_URL = "https://wa.me/254700000000";
const INSTAGRAM_URL = "https://instagram.com/plussizethriftedgems";

export default function Home() {
  return (
    <div className="bg-[#0F0F0F] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={dress1}
            alt="Beautiful plus-size fashion"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/80 via-[#0F0F0F]/50 to-[#0F0F0F]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src={logoImg}
              alt="Plus Size Thrifted Gems"
              className="w-40 h-40 md:w-52 md:h-52 object-contain mx-auto mb-6 rounded-full"
            />
            <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
              Quality Thrifted Fashion for Plus Size Women
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Beautiful thrifted pieces, carefully curated to help every woman feel confident, stylish and comfortable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/collection"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-[#0F0F0F] hover:bg-white transition-colors duration-300 font-medium tracking-wide uppercase"
              >
                Shop Collection
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-[#0F0F0F] transition-all duration-300 font-medium tracking-wide uppercase flex items-center justify-center gap-3"
              >
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-primary/20 w-full max-w-container mx-auto" />

      {/* Featured Collection */}
      <section className="py-24 bg-[#0F0F0F]">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary italic font-serif text-lg mb-2 block">As seen on Instagram</span>
            <h2 className="font-serif text-4xl md:text-5xl">Featured Collection</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: dress1, name: "Teal Floral Midi", price: "800 KSh", size: "UK 18-20" },
              { img: dress2, name: "Tropical Leaf Maxi", price: "800 KSh", size: "UK 16-22" },
              { img: dress3, name: "Blue Floral Sundress", price: "800 KSh", size: "UK 18-24" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.2} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-gray-900">
                  <img 
                    src={item.img} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {item.size}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a 
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-[#0F0F0F] px-6 py-3 flex items-center gap-2 font-medium uppercase tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <FaWhatsapp className="text-xl" /> Buy Now
                    </a>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl mb-1">{item.name}</h3>
                    <p className="text-primary font-medium">{item.price}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/collection"
              className="inline-block border-b border-primary text-white hover:text-primary transition-colors pb-1 uppercase tracking-widest text-sm"
            >
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#F8F5F0] text-[#0F0F0F]">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary italic font-serif text-lg mb-2 block">The Boutique Experience</span>
            <h2 className="font-serif text-4xl md:text-5xl">Why Choose Us</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "Quality Checked",
                desc: "Every single piece is hand-picked, washed, ironed, and inspected. You receive boutique-ready quality.",
                icon: <FaCheckCircle className="text-3xl text-primary" />
              },
              {
                title: "Size-Inclusive Curation",
                desc: "True plus-size fashion. We specialize in UK 16 to 26+, focusing on cuts that flatter and celebrate curves.",
                icon: <FaStar className="text-3xl text-primary" />
              },
              {
                title: "Affordability Without Compromise",
                desc: "Look expensive without breaking the bank. Premium styling shouldn't be a luxury reserved for a few.",
                icon: <div className="text-3xl text-primary font-serif italic">KSh</div>
              }
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.2} className="text-center">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Delivery */}
      <section className="py-20 bg-[#0F0F0F] border-t border-b border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Nationwide Delivery</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              We deliver to all 47 counties in Kenya. Fast, secure, and reliable shipping via our trusted courier partners.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-[#F8F5F0] text-[#0F0F0F]">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary italic font-serif text-lg mb-2 block">Word of Mouth</span>
            <h2 className="font-serif text-4xl md:text-5xl">Our Clients Say</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "Finally, a thrift store that actually understands plus-size bodies! The quality is amazing and it smells so good.",
                name: "Sarah W.",
                location: "Nairobi"
              },
              {
                text: "I bought a dress for a wedding and everyone thought it was designer. Fast delivery to Mombasa too!",
                name: "Amina K.",
                location: "Mombasa"
              },
              {
                text: "The packaging made me feel like I was unboxing a luxury purchase. Will definitely be shopping here again.",
                name: "Njeri M.",
                location: "Nakuru"
              }
            ].map((testimonial, i) => (
              <AnimatedSection key={i} delay={i * 0.2} className="bg-white p-10 shadow-sm border border-gray-100 relative">
                <div className="text-6xl text-primary/20 font-serif absolute top-4 left-6">"</div>
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-serif font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">{testimonial.location}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-24 bg-[#0F0F0F]">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-primary hover:text-white transition-colors">
              <FaInstagram className="text-2xl" />
              <span className="font-serif text-2xl">@plussizethriftedgems</span>
            </a>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[insta1, insta2, insta3, insta1, insta2, insta3].map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="block relative aspect-square group overflow-hidden">
                  <img src={img} alt="Instagram preview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <FaInstagram className="text-white text-3xl" />
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 bg-primary text-[#0F0F0F] text-center">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 max-w-3xl mx-auto leading-tight">
              Your next favorite piece is one message away.
            </h2>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0F0F0F] text-white hover:bg-white hover:text-[#0F0F0F] transition-colors duration-300 font-medium tracking-widest uppercase"
            >
              Chat on WhatsApp <FaWhatsapp className="text-xl" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}