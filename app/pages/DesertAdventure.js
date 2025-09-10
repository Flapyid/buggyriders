import { CheckCircle } from "lucide-react";
import React from "react";
import img1 from "../../assets/images/desert-adventure/private-desert-safari-dubai.webp"
import img2 from "../../assets/images/desert-adventure/desert-safari-dubai-atv.webp"
import img3 from "../../assets/images/desert-adventure/premium-desert-safari-dubai.webp"
import img4 from "../../assets/images/desert-adventure/morning-desert-safari.webp"
import img5 from "../../assets/images/desert-adventure/morning-desert-safari-atv.webp"
import Image from "next/image";

export default function DesertAdventure() {
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
     image:img5,
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

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center mt-10">
        <h1
          style={{ color: "#DF6618" }}
          className="text-7xl font-semibold text-gray-900 mb-6"
        >
          Desert Adventure
        </h1>
        <p
          id="subdescription"
          className="text-lg text-gray-700 mb-8 text-center font-semibold"
        >
          Buggy Rider's desert adventure rental service presents a unique
          opportunity to discover the mesmerising beauty of the desert that one
          rarely gets to see.
        </p>
        <div className="grid w-screen md:grid-cols-3 gap-6 px-50 justify-center ">
          {demoPackages.map((pkg) => (
            <div key={pkg.id} className=" flex flex-col justify-center items-center  ">
              <p style={{ color: "#DF6618" }} className="text-lg font-semibold mb-3 "> {pkg.header}</p>
              <div

                className="w-full h-full mx-auto rounded-2xl overflow-hidden shadow-lg 
          border-2 border-gray-200 flex flex-col 
          transition-all duration-300 ease-in-out 
          hover:border-orange-400 hover:shadow-xl"
              >
                {/* Image */}

                <div className="relative w-full h-90">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Title */}
                  <h2 className="text-3xl font-bold text-orange-600 mb-1 uppercase">
                    {pkg.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">{pkg.subtitle}</p>

                  {/* Price Table */}
                  <div className="border rounded-lg overflow-hidden mb-4">
                    <div className="grid grid-cols-2 text-center bg-[#0e1d37] text-white font-semibold">
                      <div className="py-2 border-r">NO. OF PERSON</div>
                      <div className="py-2">NEW PRICE</div>
                    </div>
                    <div className="grid grid-cols-2 text-center">
                      {pkg.pricing.map((price, index) => (
                        <React.Fragment key={index}>
                          <div className="py-2 border-r text-sm font-semibold">{price.per}</div>
                          <div className="py-2 font-semibold text-sm  text-gray-800">
                            {price.price}
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 text-sm text-gray-700 flex-1">
                    {pkg.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-md font-medium">
                        {/* Fixed icon size and top alignment */}
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.additional && (
                    <>
                      <h3 className="text-md font-semibold text-gray-900 mt-4 mb-2">
                        Additionals :
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {pkg.additional.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-md font-medium">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                </div>

                {/* Buttons */}
                <div className="flex w-full">
                  <button className="flex-1 bg-[#0e1d37] text-white py-3 font-medium text-sm transition-all duration-300 ease-in-out hover:bg-[#15294d] hover:scale-105">
                    ENQUIRY NOW
                  </button>
                  <button className="flex-1 bg-orange-500 text-white py-3 font-medium text-sm transition-all duration-300 ease-in-out hover:bg-orange-600 hover:scale-105">
                    WHATSAPP NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
