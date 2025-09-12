import { FaWhatsapp } from "react-icons/fa";
import { PHNumber } from "../phone";

export default function ServicesSection() {
  const services = [
    {
      title: "Quad Bike Tours",
      description:
        "A quad bike adventure in Dubai refers to an exciting off-road experience that involves riding a four-wheeled all-terrain vehicle (ATV) to explore the stunning desert landscape surrounding the city. Our team of professionals offers an exceptional quad bike riding experience that allows you to explore the Arabian sand dunes and marvel at the awe-inspiring scenery, creating an unforgettable experience. The guided tour is suitable for all experience levels and includes safety kits, energy-boosting snacks, and all the necessary equipment for an enjoyable tour with the assistance of our experts.",
    },
    {
      title: "Buggy Rides",
      description:
        "If you're seeking an enjoyable and memorable way to explore Dubai, look no further than our Dune Buggy tour. Our open-top, four-wheel drive vehicles are equipped with complete roll cages, providing a safe and comfortable ride. Buggy Rides offers the best buggy rides for desert and sand dune tours, with reasonable pricing, complimentary guides, and complete safety equipment. Choose our Dune Buggy tour for an unparalleled experience that you'll cherish for a lifetime.",
    },
    {
      title: "Desert Adventure",
      description:
        "By scheduling a desert safari adventure in Dubai, you can explore the magnificent desert and experience the luxury of a desert adventure. Although the city is dominated by tall buildings, the vast deserts are where its true beauty can be found. To give every visitor the chance to experience a spectacular desert safari in Dubai, Buggy Riders organises desert safaris for groups of people. Our trip to the desert usually involves thrilling activities such as dune bashing, quad biking, camel riding, sandboarding, and a traditional Arabic-style campsite experience with a range of entertainment and food options.",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-20">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0e1d37] mb-12 uppercase">
        Our Services
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-sm p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-orange-500"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0e1d37] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.description}
              </p>
            </div>

           <button
  onClick={() =>
    window.open(
      `https://wa.me/${PHNumber}?text=Hello! I am interested in your services.`,
      "_blank"
    )
  }
  className="mt-6 flex items-center justify-center gap-2 bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-all"
>
  <FaWhatsapp className="text-xl" />
  WHATSAPP NOW
</button>

          </div>
        ))}
      </div>
    </section>
  );
}
