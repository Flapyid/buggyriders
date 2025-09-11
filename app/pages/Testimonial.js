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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Touch handling for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50; // Minimum swipe distance
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
    
    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-center text-gray-800 mb-8 sm:mb-10 md:mb-12 uppercase tracking-wide">
        TESTIMONIALS
      </h2>
      
      <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center p-4 sm:p-6 rounded-lg">
        {/* Left Button - Hidden on mobile, visible on tablets and up */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-0 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 sm:p-4 shadow-lg hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Previous testimonial"
        >
          <FaArrowLeft className="text-orange-600 text-base sm:text-lg" />
        </button>

        {/* Testimonial Cards Container */}
        <div 
          className="relative bg-white w-full overflow-hidden rounded-xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-6 sm:p-8 min-h-[320px] xs:min-h-[340px] sm:min-h-[380px]"
              >
                <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 relative mb-4 sm:mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-4 border-orange-100"
                    sizes="(max-width: 480px) 80px, (max-width: 640px) 96px, 112px"
                  />
                </div>
                
                <p className="text-gray-600 text-base xs:text-lg sm:text-lg mb-4 sm:mb-6 leading-relaxed max-w-lg px-2">
                  {testimonial.text}
                </p>
                
                <h3 className="font-bold text-lg xs:text-xl sm:text-xl text-gray-900 uppercase tracking-wide mb-3 sm:mb-4">
                  {testimonial.name}
                </h3>
                
                {/* Google Rating Image */}
                <div className="mt-2">
                  <Image 
                    src={rating} 
                    alt="Google Rating" 
                    width={120} 
                    height={24} 
                    className="w-24 xs:w-28 sm:w-32 md:w-36"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button - Hidden on mobile, visible on tablets and up */}
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-0 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 sm:p-4 shadow-lg hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Next testimonial"
        >
          <FaArrowRight className="text-orange-600 text-base sm:text-lg" />
        </button>
      </div>
      
      {/* Mobile navigation buttons (visible only on small screens) */}
      <div className="flex sm:hidden justify-center space-x-6 mt-6">
        <button
          onClick={prevSlide}
          className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Previous testimonial"
        >
          <FaArrowLeft className="text-orange-600 text-lg" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Next testimonial"
        >
          <FaArrowRight className="text-orange-600 text-lg" />
        </button>
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-orange-500 scale-125" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}