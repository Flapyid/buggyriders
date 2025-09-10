"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Mock images (replace with your actual image imports)
import client1 from "../../assets/images/testimonial/client-01.webp";
import client2 from "../../assets/images/testimonial/client-02.webp";
import client3 from "../../assets/images/testimonial/client-03.webp";
import rating from "../../assets/images/testimonial/google-rating.svg";

const testimonials = [
  {
    name: "ALWIS JAMES",
    text: "I had a wonderful day with Dubai Adventure Quad bike tour. I can highly recommend them for services to every one of you who is looking for a great adventure in Dubai. Very professional and friendly guide.",
    image: client1,
  },
  {
    name: "MARCOS PERERA",
    text: "The trip was so fun and exciting. Mr Arshad coordinated well and properly managed timings. We had really great time. It's a must do adventure in UAE.",
    image: client2,
  },
  {
    name: "SARA KHAN",
    text: "Amazing experience! The staff was very friendly and professional. Definitely worth it!",
    image: client3,
  },
];

export default function TestimonialPage() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <h2 className="text-6xl font-black text-center text-gray-800 mb-12 uppercase tracking-wider">
        TESTIMONIALS
      </h2>
      
      <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center p-6 rounded-lg">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110"
        >
          <FaArrowLeft className="text-orange-600 text-lg" />
        </button>

        {/* Testimonial Cards Container */}
        <div className="relative bg-white w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-8 min-h-[380px]"
              >
                <div className="w-28 h-28 relative mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-4 border-orange-100"
                  />
                </div>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-lg">
                  {testimonial.text}
                </p>
                
                <h3 className="font-bold text-xl text-gray-900 uppercase tracking-wide mb-4">
                  {testimonial.name}
                </h3>
                
                {/* Google Rating Image */}
                <div className="mt-2">
                  <Image 
                    src={rating} 
                    alt="Google Rating" 
                    width={120} 
                    height={24} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110"
        >
          <FaArrowRight className="text-orange-600 text-lg" />
        </button>
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-orange-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}