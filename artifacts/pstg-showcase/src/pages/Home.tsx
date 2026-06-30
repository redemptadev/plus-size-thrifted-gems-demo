import { motion } from "framer-motion";
import { Link } from "wouter";
import { FaWhatsapp, FaCheckCircle, FaStar, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { AnimatedSection } from "@/components/AnimatedSection";

// Real product images from Instagram
import dress1 from "@assets/Screenshot_30-6-2026_143113_www.instagram.com_1782819114130.jpeg";
import dress2 from "@assets/Screenshot_30-6-2026_14310_www.instagram.com_1782819114130.jpeg";
import dress3 from "@assets/Screenshot_30-6-2026_143047_www.instagram.com_1782819114130.jpeg";
import new1 from "@assets/Screenshot_30-6-2026_144459_www.instagram.com_1782819952923.jpeg";
import new2 from "@assets/Screenshot_30-6-2026_144513_www.instagram.com_1782819952923.jpeg";
import new3 from "@assets/Screenshot_30-6-2026_144530_www.instagram.com_1782819952923.jpeg";
import logoImg from "@assets/727519327_18093713027263464_1789033325456858993_n_1782819260564.jpg";

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

      {/* Floral Divider */}
      <div className="flex items-center justify-center py-2 bg-[#0F0F0F]">
        <svg width="340" height="36" viewBox="0 0 340 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="18" x2="138" y2="18" stroke="#C17B8A" strokeWidth="0.6" strokeOpacity="0.5"/>
          <ellipse cx="152" cy="13" rx="6" ry="3" fill="#C17B8A" opacity="0.35" transform="rotate(-20 152 13)"/>
          <ellipse cx="164" cy="8" rx="5" ry="2.5" fill="#C9A227" opacity="0.4" transform="rotate(15 164 8)"/>
          <circle cx="170" cy="18" r="4" fill="#C17B8A" opacity="0.55"/>
          <ellipse cx="176" cy="8" rx="5" ry="2.5" fill="#C9A227" opacity="0.4" transform="rotate(-15 176 8)"/>
          <ellipse cx="188" cy="13" rx="6" ry="3" fill="#C17B8A" opacity="0.35" transform="rotate(20 188 13)"/>
          <ellipse cx="152" cy="23" rx="6" ry="3" fill="#C17B8A" opacity="0.25" transform="rotate(20 152 23)"/>
          <ellipse cx="188" cy="23" rx="6" ry="3" fill="#C17B8A" opacity="0.25" transform="rotate(-20 188 23)"/>
          <line x1="202" y1="18" x2="340" y2="18" stroke="#C17B8A" strokeWidth="0.6" strokeOpacity="0.5"/>
        </svg>
      </div>

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
      <section className="py-24 text-[#0F0F0F] relative overflow-hidden" style={{background: "linear-gradient(135deg, #FDF0F3 0%, #F8F5F0 50%, #FDE8EE 100%)"}}>
        {/* Floral bg pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cellipse cx='40' cy='28' rx='5' ry='11' fill='%23C17B8A'/%3E%3Cellipse cx='40' cy='52' rx='5' ry='11' fill='%23C17B8A'/%3E%3Cellipse cx='28' cy='40' rx='11' ry='5' fill='%23C17B8A'/%3E%3Cellipse cx='52' cy='40' rx='11' ry='5' fill='%23C17B8A'/%3E%3Ccircle cx='40' cy='40' r='4' fill='%23C9A227'/%3E%3C/svg%3E\")", backgroundSize: "80px 80px"}} />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="italic font-serif text-lg mb-2 block" style={{color: "#C17B8A"}}>The Boutique Experience</span>
            <h2 className="font-serif text-4xl md:text-5xl">Why Choose Us</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "Quality Checked",
                desc: "Every single piece is hand-picked, washed, ironed, and inspected. You receive boutique-ready quality.",
                icon: <FaCheckCircle className="text-3xl" style={{color: "#C17B8A"}} />
              },
              {
                title: "Size-Inclusive Curation",
                desc: "True plus-size fashion. We specialize in UK 16 to 26+, focusing on cuts that flatter and celebrate curves.",
                icon: <FaStar className="text-3xl text-primary" />
              },
              {
                title: "Affordability Without Compromise",
                desc: "Look expensive without breaking the bank. Premium styling shouldn't be a luxury reserved for a few.",
                icon: <div className="text-3xl font-serif italic text-primary">KSh</div>
              }
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.2} className="text-center bg-white/60 backdrop-blur-sm p-8" style={{borderTop: "2px solid #C17B8A"}}>
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Floral Divider */}
      <div className="flex items-center justify-center py-2 bg-[#0F0F0F]">
        <svg width="340" height="36" viewBox="0 0 340 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="18" x2="138" y2="18" stroke="#C9A227" strokeWidth="0.6" strokeOpacity="0.4"/>
          <ellipse cx="152" cy="12" rx="7" ry="3.5" fill="#C17B8A" opacity="0.5" transform="rotate(-25 152 12)"/>
          <ellipse cx="163" cy="7" rx="5" ry="2.5" fill="#C17B8A" opacity="0.3" transform="rotate(10 163 7)"/>
          <circle cx="170" cy="18" r="5" fill="#C9A227" opacity="0.6"/>
          <circle cx="170" cy="18" r="2" fill="#C17B8A" opacity="0.9"/>
          <ellipse cx="177" cy="7" rx="5" ry="2.5" fill="#C17B8A" opacity="0.3" transform="rotate(-10 177 7)"/>
          <ellipse cx="188" cy="12" rx="7" ry="3.5" fill="#C17B8A" opacity="0.5" transform="rotate(25 188 12)"/>
          <ellipse cx="152" cy="24" rx="7" ry="3.5" fill="#C17B8A" opacity="0.3" transform="rotate(25 152 24)"/>
          <ellipse cx="188" cy="24" rx="7" ry="3.5" fill="#C17B8A" opacity="0.3" transform="rotate(-25 188 24)"/>
          <line x1="202" y1="18" x2="340" y2="18" stroke="#C9A227" strokeWidth="0.6" strokeOpacity="0.4"/>
        </svg>
      </div>

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
      <section className="py-24 text-[#0F0F0F] relative overflow-hidden" style={{background: "linear-gradient(135deg, #FDE8EE 0%, #F8F5F0 60%, #FDF0F3 100%)"}}>
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cellipse cx='30' cy='18' rx='4' ry='9' fill='%23C17B8A'/%3E%3Cellipse cx='30' cy='42' rx='4' ry='9' fill='%23C17B8A'/%3E%3Cellipse cx='18' cy='30' rx='9' ry='4' fill='%23C17B8A'/%3E%3Cellipse cx='42' cy='30' rx='9' ry='4' fill='%23C17B8A'/%3E%3Ccircle cx='30' cy='30' r='3' fill='%23C9A227'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px"}} />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="italic font-serif text-lg mb-2 block" style={{color: "#C17B8A"}}>Word of Mouth</span>
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
              <AnimatedSection key={i} delay={i * 0.2} className="bg-white/80 p-10 shadow-sm relative" style={{borderLeft: "3px solid #C17B8A"}}>
                <div className="text-6xl font-serif absolute top-2 left-5 leading-none" style={{color: "#C17B8A", opacity: 0.25}}>"</div>
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-serif font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm uppercase tracking-widest" style={{color: "#C17B8A"}}>{testimonial.location}</p>
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
            {[dress1, dress2, dress3, new1, new2, new3].map((img, i) => (
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
      <section className="py-32 text-[#0F0F0F] text-center relative overflow-hidden" style={{background: "linear-gradient(135deg, #C9A227 0%, #D4A843 40%, #C17B8A 100%)"}}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cellipse cx='40' cy='25' rx='5' ry='13' fill='white'/%3E%3Cellipse cx='40' cy='55' rx='5' ry='13' fill='white'/%3E%3Cellipse cx='25' cy='40' rx='13' ry='5' fill='white'/%3E%3Cellipse cx='55' cy='40' rx='13' ry='5' fill='white'/%3E%3Ccircle cx='40' cy='40' r='4' fill='white'/%3E%3C/svg%3E\")", backgroundSize: "80px 80px"}} />
        <div className="container mx-auto px-6 relative z-10">
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