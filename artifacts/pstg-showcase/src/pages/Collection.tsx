import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatedSection } from "@/components/AnimatedSection";

import img1 from "@/assets/collection-1.png";
import img2 from "@/assets/collection-2.png";
import featured1 from "@/assets/featured-1.png";
import featured2 from "@/assets/featured-2.png";
import featured3 from "@/assets/featured-3.png";
import insta1 from "@/assets/insta-1.png";
import insta2 from "@/assets/insta-2.png";
import aboutImg from "@/assets/about.png";

const WHATSAPP_URL = "https://wa.me/254700000000";

const CATEGORIES = ["All", "Dresses", "Maxi Dresses", "Casual", "New Arrivals"];

const PRODUCTS = [
  { id: 1, name: "Evening Velvet Gown", price: "KSh 3,500", size: "UK 18-20", category: "Maxi Dresses", img: img1 },
  { id: 2, name: "Minimalist White Midi", price: "KSh 2,200", size: "UK 16", category: "Dresses", img: img2 },
  { id: 3, name: "Vintage Floral Sundress", price: "KSh 1,800", size: "UK 22-24", category: "Dresses", img: featured1 },
  { id: 4, name: "Power Blazer Suit", price: "KSh 4,500", size: "UK 20", category: "New Arrivals", img: featured2 },
  { id: 5, name: "Emerald Silk Slip", price: "KSh 2,800", size: "UK 18", category: "Maxi Dresses", img: featured3 },
  { id: 6, name: "Denim & Linen Set", price: "KSh 2,000", size: "UK 16-18", category: "Casual", img: insta1 },
  { id: 7, name: "Crimson Evening Wear", price: "KSh 3,800", size: "UK 24-26", category: "Maxi Dresses", img: insta2 },
  { id: 8, name: "Garden Wrap Dress", price: "KSh 1,900", size: "UK 18-20", category: "Dresses", img: aboutImg },
  { id: 9, name: "Pristine White Suit", price: "KSh 4,200", size: "UK 20-22", category: "New Arrivals", img: img1 },
  { id: 10, name: "Summer Breeze Outfit", price: "KSh 1,500", size: "UK 16", category: "Casual", img: img2 },
];

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen pt-24 pb-20">
      {/* Page Hero */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <AnimatedSection>
          <h1 className="font-serif text-4xl md:text-5xl mb-4 inline-block relative">
            Our Collection
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-[2px] bg-primary"></span>
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Discover our latest curated pieces. Every item is unique, thoroughly inspected, and ready to be loved again.
          </p>
        </AnimatedSection>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[72px] md:top-[88px] z-40 bg-[#0F0F0F]/95 backdrop-blur border-b border-primary/20 mb-12 py-4">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto hide-scrollbar gap-6 md:justify-center items-center pb-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative whitespace-nowrap text-sm tracking-wider uppercase pb-1 transition-colors ${
                  activeCategory === category ? "text-primary font-medium" : "text-gray-400 hover:text-white"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredProducts.map((product, i) => (
            <AnimatedSection key={product.id} delay={(i % 3) * 0.1} className="group">
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-gray-900 border border-white/5">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white text-[#0F0F0F] text-xs font-bold px-3 py-1 uppercase tracking-wider z-10 shadow-md">
                  {product.size}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <a 
                    href={`${WHATSAPP_URL}?text=Hi, I'm interested in the ${product.name} (${product.size}) for ${product.price}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-[#0F0F0F] px-6 py-3 flex items-center gap-2 font-medium uppercase tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white"
                  >
                    <FaWhatsapp className="text-xl" /> Order Item
                  </a>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                  <p className="text-primary font-medium tracking-wide">{product.price}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No products found in this category.
          </div>
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}