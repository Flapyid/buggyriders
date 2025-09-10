"use client";
import { useState } from "react";
import Image from "next/image";
import { Eye, X } from "lucide-react";

// Generate image paths from 1.webp → 89.webp
const galleryImages = Array.from({ length: 89 }, (_, i) => `/gallery/${i + 1}.webp`);

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesPerPage = 10; // Change how many per page

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = galleryImages.slice(startIndex, startIndex + imagesPerPage);

  return (
    <section className="w-full py-12 px-6 md:px-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0c1a3d] uppercase">
          Gallery
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 rounded"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-col-5">
        {currentImages.map((src, i) => (
          <div key={i} className="relative group overflow-hidden  shadow-md">
            <Image
              src={src}
              alt={`Gallery Image ${startIndex + i + 1}`}
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              onClick={() => setSelectedImage(src)}
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer"
            >
              <Eye className="w-10 h-10 text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div> */}

      {/* add view more button here */}
      {/* View More Button */}
      {currentPage < totalPages && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="bg-[#DF6618] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c95512] transition"
          >
            View More
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <Image
              src={selectedImage}
              alt="Full View"
              width={1200}
              height={800}
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
