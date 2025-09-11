"use client";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

// 🔹 Helper to generate a fake IPv4 address
const generateFakeIP = () => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join(".");
};

export default function LeadForm() {
  const [leadCount, setLeadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const leadsToAdd = leadCount; // save before reset
      for (let i = 0; i < leadsToAdd; i++) {
        await addDoc(collection(db, "leads"), {
          createdAt: new Date(),
          ip: generateFakeIP(), // ✅ add fake IP
        });
      }

      setLeadCount(0);
      alert(`${leadsToAdd} lead(s) added successfully!`);
    } catch (err) {
      console.error("Error adding lead:", err);
      alert("Error adding leads. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Leads</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="leadCount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Number of Leads to Add
          </label>
          <input
            type="number"
            id="leadCount"
            min="1"
            max="100"
            value={leadCount}
            onChange={(e) => setLeadCount(parseInt(e.target.value) || 1)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Adding Leads...
            </span>
          ) : (
            `Add ${leadCount} Lead${leadCount !== 1 ? "s" : ""}`
          )}
        </button>
      </form>
    </div>
  );
}
