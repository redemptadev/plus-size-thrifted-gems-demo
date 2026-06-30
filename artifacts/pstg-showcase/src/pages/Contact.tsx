import { AnimatedSection } from "@/components/AnimatedSection";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/254700000000";
const INSTAGRAM_URL = "https://instagram.com/plussizethriftedgems";

export default function Contact() {
  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -z-10 mix-blend-screen"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary italic font-serif text-lg mb-4 block">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Visit Our Digital Boutique</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            We operate exclusively online, bringing premium thrifted fashion directly to you. We're always here to assist with sizing, styling, or orders.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contact Card */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[#1A1A1A] border border-primary/20 p-10 md:p-14 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h2 className="font-serif text-3xl text-primary mb-10 pb-4 border-b border-primary/20">Contact Details</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-2xl text-primary mt-1" />
                    <div>
                      <h4 className="font-serif text-xl mb-1">Location</h4>
                      <p className="text-gray-400">Nairobi, Kenya<br/>(Online Boutique Only)</p>
                      <p className="text-primary text-sm mt-2 italic">We deliver across all 47 counties in Kenya.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaClock className="text-2xl text-primary mt-1" />
                    <div>
                      <h4 className="font-serif text-xl mb-1">Business Hours</h4>
                      <p className="text-gray-400">Monday – Saturday: 8:00 AM – 8:00 PM<br/>Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaEnvelope className="text-2xl text-primary mt-1" />
                    <div>
                      <h4 className="font-serif text-xl mb-1">General Inquiries</h4>
                      <p className="text-gray-400">hello@plussizethriftedgems.co.ke</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Action Area */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-3xl mb-4">Ready to Order?</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  The fastest way to secure an item or ask about sizing is via WhatsApp. Our team is ready to assist you personally.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-[#0F0F0F] hover:bg-white transition-colors duration-300 font-medium tracking-widest uppercase text-lg"
                >
                  <FaWhatsapp className="text-2xl" /> Message on WhatsApp
                </a>
                
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 border border-primary text-primary hover:bg-primary hover:text-[#0F0F0F] transition-all duration-300 font-medium tracking-widest uppercase text-lg"
                >
                  <FaInstagram className="text-2xl" /> View Instagram
                </a>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
}