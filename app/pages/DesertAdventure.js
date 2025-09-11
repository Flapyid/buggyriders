import { CheckCircle } from "lucide-react";
import React, { useState } from "react";
import img1 from "../../assets/images/desert-adventure/private-desert-safari-dubai.webp";
import img2 from "../../assets/images/desert-adventure/desert-safari-dubai-atv.webp";
import img3 from "../../assets/images/desert-adventure/premium-desert-safari-dubai.webp";
import img4 from "../../assets/images/desert-adventure/morning-desert-safari.webp";
import img5 from "../../assets/images/desert-adventure/morning-desert-safari-atv.webp";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import QuickEnquiryModal from "./QuickEnquiryModal";

export default function DesertAdventure() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  const demoPackages = [
    {
      id: 1,
      header: `Package "A" AED 115`,
      title: "DESERT SAFARI DUBAI",
      subtitle: "Pick & Drop From Your Location",
      image: img1,
      pricing: [
        { per: "CHILD", price: "99 AED" },
        { per: "ADULT", price: "115 AED" },
      ],
      features: [
        "Red Sand Dune Bashing",
        "Camel Ride / Quad Bike",
        "Sand Boarding",
        "Hinna Painting For Ladies & Kids",
        "Unlimited Soft Drinks",
        "Fire Show",
        "Tanura Show",
        "BBQ & Buffet Dinner (Veg & non-veg both available)",
      ],
    },
    {
      id: 2,
      title: "DESERT SAFARI DUBAI + ATV",
      header: `Package "B" AED 250`,
      subtitle: "Hotel Pickup & Drop",
      image: img2,
      pricing: [{ per: "PER HEAD", price: "250 AED" }],
      features: [
        " Red Sand Dune Bashing",
        " Camel Ride / Quad Bike",
        "Sand Boarding",
        "Hinna Painting For Ladies & Kids",
        "Unlimited Soft Drinks",
        "Fire Show",
        "Tanura Show",
        "BBQ & Buffet Dinner(Veg & non - veg both available)"
      ],
    },
    {
      id: 3,
      title: "Premium Desert Safari with 5 Star Buffet & 5 Live Shows",
      header: `Package "C" AED 245`,
      subtitle: "Premium Desert Safari with 5 Star Buffet & 5 Live Shows",
      image: img3,
      pricing: [
        { per: "PER HEAD", price: "245 AED" },
      ],
      features: [
        "Round-trip transfers",
        "Dune bashing for 30-40 minutes",
        "Welcome drink",
        "Camel ride",
        "Henna painting",
        "Falcon interaction",
        "Sufi Dance",
        "Tanoura show",
        "Saidi Dance Show",
        "Acrobatic fire show",
        "Belly Dance Show",
        "Live shawarma and barbeque",
      ],
    },
    {
      id: 4,
      title: "MORNING DESERT SAFARI",
      header: `Package "F" AED 250`,
      subtitle: "MORNING DESERT SAFARI",
      image: img4,
      pricing: [
        { per: "PER HEAD", price: "245 AED" },
      ],
      features: [
        "Pick up from your Hotel or Residence anywhere in Dubai & Sharjah",
        "Pick by our desert safari licensed guide",
        "Dune Bashing at Red Dunes Desert",
        "Dune Bashing and drive to reach the high Dune (with photo stop)",
        "Camel farm visit",
        "Sand Boarding (Included)",
        "Short Camel Ride (Included)",
        "Unlimited Soft Drinks & Cold Water",
        "Drop back to your Hotel or Residence in Dubai",
      ],
      additional: [
        "30 Minutes Camel Ride",
        "Quad Bike",
        "Single Seater Dune Buggy",
        "2 Seater Dune Buggy",
        "4 Seater Dune Buggy",
      ],
    },
    {
      id: 5,
      title: "MORNING DESERT SAFARI + ATV",
      header: `Package "G" AED 300`,
      subtitle: "MORNING DESERT SAFARI + ATV",
      image: img5,
      pricing: [
        { per: "PER HEAD", price: "	300 AED" },
      ],
      features: [
        "Pick up from your Hotel or Residence anywhere in Dubai & Sharjah",
        "Pick by our desert safari licensed guide",
        "Quad bike ride",
        "Dune Bashing at Red Dunes Desert",
        "Dune Bashing and drive to reach the high Dune (with photo stop)",
        "Camel farm visit",
        "Sand Boarding (Included)",
        "Short Camel Ride (Included)",
        "Unlimited Soft Drinks & Cold Water",
        "Drop back to your Hotel or Residence in Dubai"
      ],
    },
  ];

  // Function to handle WhatsApp redirection with improved message format
  const handleWhatsApp = (pkg) => {
    // Replace with your WhatsApp number (with country code, no + or leading zeros)
    const phoneNumber = "971501234567";

    // Current date & time
    const now = new Date();
    const formattedDate = now.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Build professional WhatsApp message
    const whatsappMessage = `
📌 *Quick Enquiry*

✨ *Interested in:* ${pkg.title} - ${pkg.header}

🕒 *Submitted on:* ${formattedDate}
    `;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp in new tab
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  // Function to handle enquiry modal
  const handleEnquiry = (pkg) => {
    setSelectedService(pkg);
    setOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col items-center justify-center">
        {pathname === "/" && (
          <>
            <h1
              style={{ color: "#DF6618" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center"
            >
              Desert Adventure
            </h1>
            <p
              id="subdescription"
              className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8 text-center font-semibold max-w-3xl"
            >
              Buggy Rider's desert adventure rental service presents a unique
              opportunity to discover the mesmerising beauty of the desert that one
              rarely gets to see.
            </p>
          </>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full justify-center">
          {demoPackages.map((pkg) => (
            <div key={pkg.id} className="flex flex-col justify-center items-center">
              <p style={{ color: "#DF6618" }} className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-center"> 
                {pkg.header}
              </p>
              <div
                className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg 
                  border-2 border-gray-200 flex flex-col h-full
                  transition-all duration-300 ease-in-out 
                  hover:border-orange-400 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 md:h-64">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 flex-1 flex flex-col">
                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 mb-1 uppercase">
                    {pkg.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{pkg.subtitle}</p>

                  {/* Price Table */}
                  <div className="border rounded-lg overflow-hidden mb-3 sm:mb-4">
                    <div className="grid grid-cols-2 text-center bg-[#0e1d37] text-white font-semibold text-xs sm:text-sm">
                      <div className="py-2 border-r">NO. OF PERSON</div>
                      <div className="py-2">NEW PRICE</div>
                    </div>
                    <div className="grid grid-cols-2 text-center text-xs sm:text-sm">
                      {pkg.pricing.map((price, index) => (
                        <React.Fragment key={index}>
                          <div className="py-2 border-r font-semibold">{price.per}</div>
                          <div className="py-2 font-semibold text-gray-800">
                            {price.price}
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700 flex-1">
                    {pkg.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 font-medium">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.additional && (
                    <>
                      <h3 className="text-sm sm:text-md font-semibold text-gray-900 mt-3 sm:mt-4 mb-1 sm:mb-2">
                        Additionals :
                      </h3>
                      <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                        {pkg.additional.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 font-medium">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Buttons - Updated to match the example */}
                <div className="flex border-t border-gray-200">
                  <button 
                    onClick={() => handleEnquiry(pkg)}
                    className="bg-[#0e1d37] hover:bg-[#1a2d52] text-white w-full rounded-bl-xl p-3 transition-colors duration-200 font-semibold"
                  >
                    ENQUIRY NOW
                  </button>
                  <button 
                    onClick={() => handleWhatsApp(pkg)}
                    className="bg-orange-500 hover:bg-orange-600 w-full flex items-center justify-center gap-x-2 rounded-br-xl text-white font-semibold transition-colors duration-200 text-sm"
                  >
                    <FaWhatsapp className="w-5 h-5" /> WHATSAPP NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry Modal */}
       <QuickEnquiryModal
             isOpen={open}
             onClose={() => setOpen(false)}
             serviceName={selectedService}
           />
    </>
  );
}