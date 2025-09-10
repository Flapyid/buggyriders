"use client";
import Image from "next/image";
import roadwheel from "../../assets/images/global/road-wheel.svg";
import desertcar from "../../assets/images/global/desert-ride-lg-banner.webp";
import play from "../../assets/images/icons/play-btn.svg";

export default function DesertRidesSection() {
    return (
        <section className="w-full bg-white py-12 relative">
            {/* Top Row: Title + Content */}
            <div className="relative flex flex-col md:flex-row  justify-between gap-10 px-10">
                {/* Left Title */}
                <div className="flex-1 flex flex-col z-10 justify-center mt-10">
                    <p className="text-5xl md:text-5xl font-semibold">Feel The Thrill Of</p>
                    <h1 className="text-5xl md:text-6xl font-bold text-orange-600 leading-tight">
                        DESERT <br /> RIDES
                    </h1>
                </div>

                {/* Background Wheel Trail */}
                <Image
                    src={roadwheel}
                    alt="roadwheel"
                    width={400}
                    height={400}
                    className="absolute left-[20%] top-[65%] -z-0 pointer-events-none"
                />

                {/* Right Paragraph */}
                <div className="flex-1/4 text-gray-700  z-10">
                    <p className="mb-4 mt-5">
                        Experience the captivating allure of the desert like never before with Buggy Riders' dune buggy rental in Dubai. Embarking on a dune buggy tour is the perfect means to uncover the authentic essence of the Dubai desert. Whether you're a resident or a tourist, a dune buggy excursion through the desert is an absolute must, and Buggy Riders provides an excellent opportunity to do so. Take advantage of Buggy Riders' exceptional dune buggy rides to venture into the Dubai desert and relish the adventure.
                    </p>
                    <p>
                        Indulge in the excitement and exhilaration of the desert adventures, which are sure to be the highlight of your day. These thrilling experiences enable you to unleash your inner adventurer as you race across the expansive desert terrain. Discover the breathtaking beauty of the Dubai desert in a unique and unforgettable way. Opt for Buggy Riders' dune buggy rental services to elevate your Dubai trip to new heights. We offer a variety of dune buggies ranging from 1-seaters to 4-seaters, giving you the freedom to choose the one that best suits your needs.
                    </p>
                </div>
            </div>

            {/* Desert Car Image with Play Button */}
            <div className="mt-12 flex justify-center px-10">
                <div className="relative w-full">
                    {/* Background image */}
                    <Image
                        src={desertcar}
                        alt="desertcar"
                        className="rounded-xl shadow-lg w-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

                    {/* Play button with animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex items-center justify-center w-28 h-28 group">
                            {/* Animated ring (hidden by default, visible on hover) */}
                            <div className="absolute w-full h-full rounded-full border-2 border-orange-500 border- animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            {/* Play Button */}
                            <button className="relative z-10 flex items-center justify-center">
                                <span className="bg-transparent hover:bg-transparent rounded-full p-5 transition transform group-hover:scale-110">
                                    <Image src={play} alt="play" className="w-20 h-20 " />
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
