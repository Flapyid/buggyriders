"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Smartphone, MessageCircle } from "lucide-react";
import bgimg from "../../assets/images/global/contact-page-header-bg-image.webp";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={bgimg}
          alt="Contact Us Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl font-medium">
            Buggy Riders’ dune buggy rental service presents a unique
            opportunity to discover the mesmerising beauty of the desert that
            one rarely gets to see.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Send Us A Message
        </h2>
        <form
  onSubmit={handleSubmit}
  className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto font-bold"
>
  {/* First Name */}
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-semibold text-gray-400">
      First Name <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="firstName"
      className="border-b px-3 py-4 focus:outline-none"
      required
      onChange={handleChange}
    />
  </div>

  {/* Last Name */}
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-semibold text-gray-400">
      Last Name <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="lastName"
      className="border-b px-3 py-4 focus:outline-none"
      required
      onChange={handleChange}
    />
  </div>

  {/* Subject */}
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-semibold text-gray-400">
      Subject <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="subject"
      className="border-b px-3 py-4 focus:outline-none"
      required
      onChange={handleChange}
    />
  </div>

  {/* Email */}
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-semibold text-gray-400">
      Email <span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      name="email"
      className="border-b px-3 py-4 focus:outline-none"
      required
      onChange={handleChange}
    />
  </div>

  {/* Phone */}
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-semibold text-gray-400">
      Phone Number <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="phone"
      className="border-b px-3 py-4 focus:outline-none"
      required
      onChange={handleChange}
    />
  </div>

  {/* Address */}
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-semibold text-gray-400">
      Address <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="address"
      className="border-b px-3 py-4 focus:outline-none"
      required
      onChange={handleChange}
    />
  </div>

  {/* Message */}
  <div className="flex flex-col md:col-span-3">
    <label className="mb-1 text-sm font-semibold text-gray-400">
      Message
    </label>
    <textarea
      name="message"
      className="border-b px-3 py-4 focus:outline-none"
      rows="5"
      onChange={handleChange}
    ></textarea>
  </div>

  {/* Submit Button */}
  <div className="col-span-1 md:col-span-3 flex justify-center">
    <button
      type="submit"
      className="bg-[#0b163f] text-white font-semibold px-10 py-4 rounded-xl hover:bg-[#172554] transition"
    >
      SUBMIT
    </button>
  </div>
</form>

      </section>

      {/* Contact Info Boxes */}
      <section className="px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-[#0b163f] text-white p-15 rounded-2xl text-center">
            <h3 className="text-lg font-bold mb-2">CONTACT ADDRESS</h3>
            <p>2HMV+VM Lahbab, E44, Dubai</p>
          </div>
          <div className="bg-orange-500 text-white p-15 rounded-2xl text-center">
            <h3 className="text-lg font-bold mb-2">EMAIL US</h3>
            <p>buggyridersdubai@gmail.com</p>
          </div>
          <div className="bg-[#0b163f] text-white p-15 rounded-2xl text-center">
            <h3 className="text-lg font-bold mb-2">LET’S TALK</h3>
            <p className="flex items-center justify-center gap-2">
              <Phone size={18} /> 056 884 7236
            </p>
            <p className="flex items-center justify-center gap-2">
              <Smartphone size={18} /> +971 56 884 7236
            </p>
            <p className="flex items-center justify-center gap-2">
              <MessageCircle size={18} /> +971 5888 26558
            </p>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28919.855273482695!2d55.594188!3d25.034688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67f5ff8910c1%3A0xb676c4eb215600d6!2sBuggy%20Riders%20%7C%20Dune%20Buggy%20Dubai!5e0!3m2!1sen!2sbd!4v1757566385466!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
