import Image from "next/image";


import tiremarkourrides from "../../assets/images/global/service-section-top-water-image.svg"
import tiremarkpolaris from "../../assets/images/global/service-section-right-water-image.svg"
import duneBuggyImg from "../../assets/images/home/Dune-Buggy-Rentals.webp"
import polarisImg from "../../assets/images/home/Polaris-Buggies.webp"
import Packages from "../pages/Packages";

export default function OurRides() {
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
                <h1 className="text-4xl md:text-6xl font-black text-[#0c1a3d] text-center leading-tight">
                    OUR RIDES
                </h1>


                {/* Description */}
                <p id="subdescription" className="mt-4 max-w-3xl text-center text-[#0c1a3d] text-base md:text-lg font-geistSans">
                    Buggy Riders’ dune buggy rental service presents a unique opportunity to
                    discover the mesmerising beauty of the desert that one rarely gets to see.
                </p>
            </section>
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
            

            <Packages />

            


        </>
    );
}
