"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function QuickEnquiryModal({ isOpen, onClose, serviceName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your WhatsApp number (with country code, no + or leading zeros)
    const phoneNumber = "919876543210";

    // Current date & time
    const now = new Date();
    const formattedDate = now.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Build professional WhatsApp message
    const whatsappMessage = `
📌 *Quick Enquiry*

✨ *Interested in:* ${serviceName}

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
💬 *Message:* ${formData.message || "N/A"}

🕒 *Submitted on:* ${formattedDate}
    `;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp in new tab
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

    // Close modal after submission
    onClose();
    setFormData({name: "",
    email: "",
    phone: "",
    message: "",})
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-md overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-orange-600 to-indigo-900 text-center py-5">
          <h2 className="text-white font-bold text-lg">QUICK ENQUIRE</h2>
          <p className="text-white mt-1">{serviceName}</p>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone No."
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
