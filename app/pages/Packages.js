"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import twoseaterbuggytour from "../../assets/images/services/two-seater-buggy-tour.webp";
import fourseaterbuggytour from "../../assets/images/services/four-seater-buggy-tour.webp";
import oneseaterbuggytour from "../../assets/images/services/one-seater-buggy-tour.webp";
import quadbike1 from "../../assets/images/services/quad-bike-tours.webp";
import quadbike2 from "../../assets/images/services/quad-bike-tours-02.webp";
import quadbike3 from "../../assets/images/services/quad-bike-tours-03.webp";
import polarisImg from "../../assets/images/home/Polaris-Buggies.webp";
import twoseatercanambuggy from "../../assets/images/services/two-seater-canam-buggy-tour.webp";
import fourseatercanambuggy from "../../assets/images/services/four-seater-canam-buggy-tour.webp";
import { usePathname } from "next/navigation";
import QuickEnquiryModal from "./QuickEnquiryModal";
import { PHNumber } from "../phone";

export default function Packages() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const pathname = usePathname();

  // Polaris dune buggy
  const tab1 = [
    {
      id: "two-seater",
      title: "two seater buggy tour",
      duration: "Tour duration: 30 Minutes, 1, 2 Hours ",
      age: "Driver age: 16+ ",
      image: twoseaterbuggytour,
      pricing: [
        { duration: "30 Minutes", oldPrice: 665, newPrice: 399 },
        { duration: "1 Hour", oldPrice: 1165, newPrice: 699 },
        { duration: "2 Hours", oldPrice: 2167, newPrice: 1300 },
      ],
    },
    {
      id: "four-seater",
      title: "four seater buggy tour",
      duration: "Tour duration: 30 Minutes, 1, 2 ",
      age: "Driver age: 16+ ",
      image: fourseaterbuggytour,
      pricing: [
        { duration: "30 Minutes", oldPrice: 665, newPrice: 399 },
        { duration: "1 Hour", oldPrice: 1165, newPrice: 699 },
        { duration: "2 Hours", oldPrice: 2167, newPrice: 1300 },
      ],
    },
    {
      id: "one-seater",
      title: "one seater buggy tour",
      duration: "Tour duration: 30 Minutes, 1, 2 Hours ",
      age: "Driver age: 16+ ",
      image: oneseaterbuggytour,
      pricing: [
        { duration: "30 Minutes", oldPrice: 665, newPrice: 399 },
        { duration: "1 Hour", oldPrice: 1165, newPrice: 699 },
        { duration: "2 Hours", oldPrice: 2167, newPrice: 1300 },
      ],
    },
  ];

  // Polaris turbo dune buggy
  const tab2 = [
    {
      id: "quad1",
      title: "quad bike tours",
      duration: "Tour duration: 30 Minutes ",
      age: "Driver age: 16+ ",
      image: quadbike1,
      pricing: [{ duration: "30 Minutes", oldPrice: 248, newPrice: 149 }],
    },
    {
      id: "quad2",
      title: "quad bike tours",
      duration: "Tour duration: 1 Hour",
      age: "Driver age: 16+ ",
      image: quadbike2,
      pricing: [{ duration: "1 Hour", oldPrice: 398, newPrice: 249 }],
    },
    {
      id: "quad3",
      title: "quad bike tours",
      duration: "Tour duration: 2 Hour",
      age: "Driver age: 16+ ",
      image: quadbike3,
      pricing: [{ duration: "2 Hours", oldPrice: 598, newPrice: 399 }],
    },
  ];

  // Can-Am buggies
  const fourseater = [
    {
      id: "canam-2",
      title: "two seater canam buggy tour",
      duration: "Tour duration: 30 Minutes, 1, 2",
      age: "Driver age: 16+ ",
      image: twoseatercanambuggy,
      pricing: [
        { duration: "30 MINUTES", oldPrice: 998, newPrice: 599 },
        { duration: "1 HOUR", oldPrice: 1582, newPrice: 949 },
        { duration: "2 HOUR", oldPrice: 2750, newPrice: 1650 },
      ],
    },
    {
      id: "canam-4",
      title: "four seater canam buggy tour",
      duration: "Tour duration: 30 Minutes, 1, 2",
      age: "Driver age: 16+ ",
      image: fourseatercanambuggy,
      pricing: [
        { duration: "30 MINUTES", oldPrice: 998, newPrice: 599 },
        { duration: "1 HOUR", oldPrice: 1582, newPrice: 949 },
        { duration: "2 HOUR", oldPrice: 2750, newPrice: 1650 },
      ],
    },
  ];

  const activeData = activeTab === "tab1" ? tab1 : tab2;

  return (
    <main className="min-h-screen mx-4 md:mx-20">
      {/* Tab Navigation */}
      <div className="bg-white w-full">
        <div className="flex w-full flex-wrap">
          <button
            className={`flex-1 text-center px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold 
               text-sm sm:text-base md:text-lg lg:text-xl uppercase border-b-7 transition-colors duration-300
               ${
                 activeTab === "tab1"
                   ? "text-orange-600 border-orange-600"
                   : "text-gray-600 border-gray-200"
               }`}
            onClick={() => setActiveTab("tab1")}
          >
            Polaris dune buggy (2024 M)
          </button>
          <button
            className={`flex-1 text-center px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold 
               text-sm sm:text-base md:text-lg lg:text-xl uppercase border-b-7 transition-colors duration-300
               ${
                 activeTab === "tab2"
                   ? "text-orange-600 border-orange-600"
                   : "text-gray-600 border-gray-200"
               }`}
            onClick={() => setActiveTab("tab2")}
          >
            Polaris turbo dune buggy (2024 M)
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div key={activeTab} className="grid md:grid-cols-3 gap-6 p-6">
        {activeData.map((service) => (
          <div
            key={service.id}
            className="w-full border border-gray-700 hover:border-[#f05b00] rounded-2xl bg-white shadow-lg relative overflow-visible transition-all duration-200 group"
          >
            {/* Image */}
            <motion.div className="relative overflow-hidden rounded-t-2xl">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-48 sm:h-56 md:min-h-80 object-cover transition-transform duration-600"
              />
            </motion.div>

            {/* Badge */}
            <div className="absolute top-44 sm:top-52 md:top-76 right-4 z-40">
              <div className="w-19 h-24 bg-[#0e1c3c] clip-path-polygon-custom flex items-center justify-center text-white font-bold">
                <div className="flex flex-col items-center">
                  <span className="text-xs">UPTO</span>
                  <span className="text-2xl leading-none">
                    40<span className="text-xl">%</span>
                  </span>
                  <span className="text-xs mt-0.5">OFF</span>
                </div>
              </div>
              <div
                className="w-4 h-4 absolute sm:-top-0 -top-0 -left-4 sm:-left-4  bg-[#142755]"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
                  transform: "rotate(180deg)",
                }}
              ></div>
            </div>

            {/* Content */}
            <div className="p-4 border-x border-gray-200 z-30 relative">
              <h2 className="text-xl font-bold text-[#f05b00] mb-2 uppercase w-56 sm:w-64 ">
                {service.title}
              </h2>
              <p className="mb-1 text-gray-700 text-sm md:text-base">
                {service.duration}
              </p>
              <p className="mb-4 text-gray-700 text-sm md:text-base">
                {service.age}
              </p>

              <div className="overflow-auto rounded-lg border border-gray-300 mt-5 shadow-sm">
                <table className="w-full">
                  <thead className="bg-[#0e1c3c] text-white">
                    <tr>
                      <th className="border-r border-gray-400 px-4 py-2 text-sm md:text-base">
                        Duration
                      </th>
                      <th className="border-r border-gray-400 px-4 py-2 text-sm md:text-base">
                        OLD PRICE
                      </th>
                      <th className="px-4 py-2 text-sm md:text-base">
                        New price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.pricing.map((price, idx) => (
                      <tr key={idx} className="even:bg-gray-50 text-center">
                        <td className="border-r border-gray-300 px-4 py-2 text-sm font-semibold">
                          {price.duration}
                        </td>
                        <td className="border-r border-gray-300 px-4 py-2 text-sm font-semibold text-gray-500">
                          <s>{price.oldPrice} AED</s>
                        </td>
                        <td className="px-4 py-2 text-[#f05b00] font-bold text-sm">
                          {price.newPrice} AED
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer */}
            <div className="flex border-t border-gray-200">
              <button
                onClick={() => {
                  setSelectedService(service.title);
                  setOpen(true);
                }}
                className="bg-[#0e1c3c] hover:bg-[#1a2d52] text-white w-full rounded-bl-xl p-3 transition-colors duration-200 font-semibold"
              >
                ENQUIRY NOW
              </button>
              <button
                onClick={() => {
                  // Replace with your WhatsApp number (with country code, no + or leading zeros)

                  // Current date & time
                  const now = new Date();
                  const formattedDate = now.toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  });

                  // WhatsApp message
                  const whatsappMessage = `
📌 *Quick Enquiry*

✨ *Interested in:* ${service.title}

🕒 *Submitted on:* ${formattedDate}
    `;

                  // Encode message for URL
                  const encodedMessage = encodeURIComponent(whatsappMessage);

                  // Open WhatsApp
                  window.open(
                    `https://wa.me/${PHNumber}?text=${encodedMessage}`,
                    "_blank"
                  );
                }}
                className="bg-[#f05b00] hover:bg-[#fa670c] w-full flex items-center justify-center gap-x-2 rounded-br-xl text-white font-semibold transition-colors duration-200 text-sm "
              >
                <FaWhatsapp className="w-5 h-5" /> WHATSAPP NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceName={selectedService}
      />

      {/* Extra Can-Am Section only on homepage */}
      {pathname === "/" && (
        <>
          <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-6 md:pl-20 py-12">
            <div className="md:w-1/2 w-full flex justify-center md:justify-start relative z-10">
              <Image
                src={polarisImg}
                alt="Polaris Buggy"
                width={600}
                height={400}
              />
            </div>
            <div className="md:w-1/2 w-full mt-8 md:mt-0 relative z-10">
              <h2 className="text-4xl md:text-5xl text-orange-600">
                <span className=" font-bold">CAN-AM</span>{" "}
                <span className="">BUGGIES</span>
              </h2>
              <p className="mt-6 text-[#0c1a3d] text-base md:text-lg leading-snug">
                Our Can-Am buggies stand for strength, precision, and
                performance. These vehicles are designed for the most difficult
                terrains, with exceptional stability and control. Whether you
                are an experienced off-roader or a first-time adventurer, the
                Can-Am buggies offer a smooth, comfortable ride that easily
                traverses rugged terrain. Can-Am buggies are the ideal choice
                for those looking for an adrenaline-fueled adventure, thanks to
                innovative features and cutting-edge technology
              </p>
              <button
                style={{ backgroundColor: "#DF6618" }}
                className="mt-8  text-white px-6 py-3 rounded-full font-semibold transition"
              >
                View More
              </button>
            </div>
          </section>

          {/* FIXED Can-Am Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white px-4 pb-10">
            {fourseater.map((service) => (
              <div
                key={service.id}
                className="border border-gray-700 hover:border-[#f05b00] rounded-2xl bg-white shadow-lg relative overflow-visible transition-all duration-200 group"
              >
                <motion.div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-56 md:min-h-80 object-cover transition-transform duration-600"
                  />
                </motion.div>

                {/* Badge */}
                <div className="absolute top-44 sm:top-52  md:top-76 right-4 z-40">
                  <div className="w-19 h-24 bg-[#0e1c3c] clip-path-polygon-custom flex items-center justify-center text-white font-bold">
                    <div className="flex flex-col items-center">
                      <span className="text-xs">UPTO</span>
                      <span className="text-2xl leading-none">
                        40<span className="text-xl">%</span>
                      </span>
                      <span className="text-xs mt-0.5">OFF</span>
                    </div>
                  </div>
                  <div
                    className="w-4 h-4 absolute sm:-top-0 -top-0 -left-4 sm:-left-4  bg-[#142755]"
                    style={{
                      clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
                      transform: "rotate(180deg)",
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-4 border-x border-gray-200 z-10 relative ">
                  <h2 className="text-2xl font-bold text-[#f05b00] mb-2 uppercase md:max-w-[290px]">
                    {service.title}
                  </h2>
                  <p className="mb-1 text-gray-700 text-sm md:text-base">
                    {service.duration}
                  </p>
                  <p className="mb-4 text-gray-700 text-sm md:text-base">
                    {service.age}
                  </p>

                  <div className="overflow-auto rounded-lg border border-gray-300 mt-5 shadow-sm">
                    <table className="w-full">
                      <thead className="bg-[#0e1c3c] text-white">
                        <tr>
                          <th className="border-r border-gray-400 px-4 py-2 text-sm md:text-base">
                            Duration
                          </th>
                          <th className="border-r border-gray-400 px-4 py-2 text-sm md:text-base">
                            OLD PRICE
                          </th>
                          <th className="px-4 py-2 text-sm md:text-base">
                            New price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.pricing.map((price, idx) => (
                          <tr key={idx} className="even:bg-gray-50 text-center">
                            <td className="border-r border-gray-300 px-4 py-2 text-sm font-semibold">
                              {price.duration}
                            </td>
                            <td className="border-r border-gray-300 px-4 py-2 text-sm font-semibold text-gray-500">
                              <s>{price.oldPrice} AED</s>
                            </td>
                            <td className="px-4 py-2 text-[#f05b00] font-bold text-sm">
                              {price.newPrice} AED
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex border-t border-gray-200">
                  <button
                    onClick={() => {
                      setSelectedService(service.title);
                      setOpen(true);
                    }}
                    className="bg-[#0e1c3c] hover:bg-[#1a2d52] text-white w-full rounded-bl-xl p-3 transition-colors duration-200 font-semibold"
                  >
                    ENQUIRY NOW
                  </button>
                  <button className="bg-[#f05b00] hover:bg-[#fa670c] w-full flex items-center justify-center gap-x-2 rounded-br-xl text-white font-semibold transition-colors duration-200">
                    <FaWhatsapp className="w-5 h-5" /> WHATSAPP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
