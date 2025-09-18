import Image from "next/image";


import tiremarkourrides from "../../assets/images/global/service-section-top-water-image.svg"
import tiremarkpolaris from "../../assets/images/global/service-section-right-water-image.svg"
import duneBuggyImg from "../../assets/images/home/Dune-Buggy-Rentals.webp"
import polarisImg from "../../assets/images/home/POLARIS-BUGGIES.webp"
import quadbike1 from "../../assets/images/services/quad-bike-tours.webp"
import quadbike2 from "../../assets/images/services/quad-bike-tours-02.webp"
import quadbike3 from "../../assets/images/services/quad-bike-tours-03.webp"
import Packages from "../pages/Packages";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";


export default function OurRides() {
    const pathname = usePathname();
    const [title, setTitle] = useState("OUR Rides");
    const [description, setDescription] = useState("Buggy Riders’ dune buggy rental service presents a unique opportunity to discover the mesmerising beauty of the desert that one rarely gets to see.");


    const quadbikes = [
        {
            id: "1",
            title: "quad bike tours",
            duration: "Tour duration: 30 Minutes",
            age: 'Driver age: 16+ ',
            image: quadbike1,
            pricing: [
                { duration: "30 MINUTES", oldPrice: 178, newPrice: 149 },

            ],
        },
        {
            id: "2",
            title: "quad bike tours",
            duration: "Tour duration: 1 Hour",
            age: 'Driver age: 16+ ',
            image: quadbike2,
            pricing: [
                { duration: "1 HOUR", oldPrice: 298, newPrice: 249 },

            ],
        },
        {
            id: "3",
            title: "quad bike tours",
            duration: "Tour duration: 2 Hour",
            age: 'Driver age: 16+ ',
            image: quadbike3,
            pricing: [
                { duration: "2 HOUR", oldPrice: 478, newPrice: 399 },

            ],
        },



    ];

    useEffect(() => {
        // Set content based on pathname
        if (pathname === "/dunebuggy") {
            setTitle("Dune buggy tour");
            setDescription("Buggy Riders’ dune buggy rental service presents a unique opportunity to discover the mesmerising beauty of the desert that one rarely gets to see.");
        }
        if (pathname === "/") {
            setTitle("OUR Rides");
            setDescription("Buggy Riders’ dune buggy rental service presents a unique opportunity to discover the mesmerising beauty of the desert that one rarely gets to see.");
        }
        if (pathname === "/quadbike") {
            setTitle("Quad bike tours");
            setDescription("Buggy Riders’ dune buggy rental service presents a unique opportunity to discover the mesmerising beauty of the desert that one rarely gets to see.");
        }
        if (pathname === "/desertadventure") {
            setTitle("DESERT ADVENTURE");
            setDescription("Buggy Riders’ dune buggy rental service presents a unique opportunity to discover the mesmerising beauty of the desert that one rarely gets to see.");
        }
    }, [pathname]);
    return (
        <>
            <section className="w-full flex flex-col items-center justify-center py-12 relative">
                {/* Top Left Tire Mark */}
                <div className="absolute top-0 left-0">
                    <Image
                        src={tiremarkourrides} // replace with your tire mark image path
                        alt="Tire Mark"
                        width={200}
                        height={200}
                        className="opacity-60 "
                    />
                </div>


                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-black text-[#0c1a3d] text-center leading-tight uppercase">
                    {title}
                </h1>


                {/* Description */}
                <p id="subdescription" className="mt-4 max-w-3xl text-center text-[#0c1a3d] text-base md:text-lg font-geistSans">
                    {description}
                </p>
            </section>

            {/* below sections are only for / page */}
            {pathname === "/" && (
                <>
                    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:pl-25 py-12 mt-5">

                        {/* Left Content */}
                        <div className="md:w-1/2 w-full">
                            <h2 className="text-4xl md:text-5xl text-orange-600">
                                <span className=" font-bold  ">DUNE BUGGY</span>{" "}
                                <span className="">RENTALS</span>
                            </h2>
                            <p className="mt-6 text-[#0c1a3d] text-base md:text-md leading-snug">
                                Dubai is famous for its luxury, and our Dune Buggy Rentals are no
                                exception. Over 80% of tourists who visited Dubai in the past year
                                participated in a dune buggy ride. If you are looking for an exciting
                                and unforgettable way to experience Dubai, then dune buggy riding is
                                worth considering. It is the only place where thrill seekers and
                                off-road enthusiasts can benefit from a sunny climate all year. Our
                                Can-Am and Polaris buggies are known for their power, agility, and
                                ruggedness. Whether you’re a seasoned off-roader or a beginner
                                adventurer, our buggies are designed to cater to all skill levels.
                                Your safety is our paramount concern, and we want you to have an
                                adrenaline-pumping experience while feeling completely secure.
                                Our Dune Buggy Rentals in Dubai offer an unrivaled experience that
                                seamlessly fuses the adrenaline of off-roading with the incredible
                                beauty of the desert, whether you are looking for a solo thrill ride,
                                a romantic desert escapade, or a family outing. Take a thrilling and
                                exhilarating off-road adventure with our 2024 Polaris Dune Buggies or
                                Turbo Buggies, available in one-seater, two-seater, and four-seater
                                options. Choose from thrilling 30-minute, 1-hour, or 2-hour tours for
                                an unforgettable desert experience, starting at 399 AED, and let your
                                adventurous spirit out, suitable for drivers aged 16 and above.
                            </p>

                            {/* Button */}
                            <button className="mt-8 bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition">
                                View More
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
                            <Image
                                src={duneBuggyImg}
                                alt="Dune Buggy"
                                width={600}
                                height={400}
                            />
                        </div>
                    </section>
                    <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-6 md:pl-20 py-12">
                        {/* Left Image */}
                        <div className="md:w-1/2 w-full flex justify-center md:justify-start relative z-10">
                            <Image
                                src={polarisImg}
                                alt="Polaris Buggy"
                                width={600}
                                height={400}
                            />
                        </div>

                        {/* Right Content */}
                        <div className="md:w-1/2 w-full mt-8 md:mt-0 relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-orange-600">
                                POLARIS BUGGIES
                            </h2>
                            <p className="mt-6 text-[#0c1a3d] text-base md:text-lg leading-snug">
                                Our Polaris buggies are famous for their adaptability and dependability.
                                They are designed to easily navigate various terrains, making them a
                                popular choice among outdoor enthusiasts. Polaris’ lineup combines power,
                                agility, and comfort to provide an enjoyable ride for riders of all skill
                                levels. Polaris buggies provide an exhilarating and safe experience,
                                whether exploring desert dunes or tackling difficult trails.
                            </p>

                            {/* Button */}
                            <button style={{ backgroundColor: "#DF6618" }} className="mt-8  text-white px-6 py-3 rounded-full font-semibold transition">
                                View More
                            </button>
                        </div>

                        {/* Tiremark Graphic (background on right side, vertically centered) */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-100 w-64 md:w-56 h-full z-0 overflow-hidden flex items-center">
                            <Image
                                src={tiremarkpolaris}
                                alt="Tire Mark"
                                width={200}
                                height={200}
                                className=" object-cover object-right"
                            />
                        </div>

                    </section>
                </>
            )}

            {pathname === "/quadbike" && (
                <>
                    <div className="flex w-full justify-center gap-10 bg-white mb-20 ">
                        {quadbikes.map((service) => (
                            <div key={service.id} className="w-full max-w-md border  border-gray-700  hover:border-[#f05b00] rounded-2xl bg-white shadow-lg relative overflow-visible transition-all duration-200 group">


                                {/* Image Section */}
                                <motion.div className="relative overflow-hidden rounded-t-2xl">
                                    {typeof service.image === "string" ? (
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-48 sm:h-56 md:min-h-80 object-cover transition-transform duration-600"
                                        />
                                    ) : (
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-48 sm:h-56 md:min-h-80 object-cover transition-transform duration-600"
                                        />
                                    )}
                                </motion.div>


                                {/* ✅ Badge  */}
                                <div className="absolute top-44 sm:top-52  md:top-76 right-4 z-40">
                                    <div className="w-19 h-24 bg-[#0e1c3c] clip-path-polygon-custom flex items-center justify-center text-white font-bold">
                                        <div className="flex flex-col items-center">
                                            <span className="text-xs">UPTO</span> {/* Decreased font size */}
                                            <span className="text-2xl leading-none">40<span className="text-xl">%</span></span> {/* Decreased font size */}
                                            <span className="text-xs mt-0.5">OFF</span> {/* Decreased font size and margin */}
                                        </div>
                                    </div>

                                    <div
                                        className="w-4 h-4 absolute sm:-top-0 -top-0 -left-4 sm:-left-4  bg-[#142755]"
                                        style={{
                                            clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
                                            transform: "rotate(180deg)", // rotate the triangle
                                        }}
                                    ></div>


                                </div>

                                {/* Card Content */}
                                <div className="p-4 border-x border-gray-200 z-10 relative">

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
                                                    <th className="px-4 py-2 text-sm md:text-base">New price</th>
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

                                {/* Footer Buttons */}
                                <div className="flex border-t border-gray-200">
                                    <button className="bg-[#0e1c3c] hover:bg-[#1a2d52] text-white w-full rounded-bl-xl p-3 transition-colors duration-200 font-semibold">
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

            {(pathname === "/dunebuggy" || pathname === "/") && (
                <Packages />
            )}






        </>
    );
}
