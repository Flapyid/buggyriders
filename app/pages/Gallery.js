"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, X } from "lucide-react";
import { usePathname } from "next/navigation";

// Generate image paths from 1.webp → 89.webp
const galleryImages = Array.from({ length: 89 }, (_, i) => `/gallery/${i + 1}.webp`);

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesPerPage, setImagesPerPage] = useState(10); // default
  const pathname = usePathname();

  const isGalleryPage = pathname.includes("gallery");

  // ✅ Adjust images per page based on screen size
  useEffect(() => {
    function updateImagesPerPage() {
      if (window.innerWidth < 640) {
        setImagesPerPage(isGalleryPage ? 14 : 8); // 📱 Mobile → 14 (gallery) / 8 (home)
      } else {
        setImagesPerPage(isGalleryPage ? 15 : 10); // 💻 Desktop → 15 (gallery) / 10 (home)
      }
    }
    updateImagesPerPage();
    window.addEventListener("resize", updateImagesPerPage);
    return () => window.removeEventListener("resize", updateImagesPerPage);
  }, [isGalleryPage]);

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  // ✅ On /gallery → show paginated
  // ✅ On other pages → only first slice
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = isGalleryPage
    ? galleryImages.slice(startIndex, startIndex + imagesPerPage)
    : galleryImages.slice(0, imagesPerPage);

  return (
    <section className="w-full py-12 px-6 md:px-16 bg-white">
      {/* Heading - Only show if NOT on /gallery */}
      {!isGalleryPage && (
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0c1a3d] uppercase">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 rounded"></div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {currentImages.map((src, i) => (
          <div key={i} className="relative group overflow-hidden shadow-md">
            <Image
              src={src}
              alt={`Gallery Image ${startIndex + i + 1}`}
              width={600}
              height={400}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
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

      {/* Pagination - Only on /gallery */}
      {isGalleryPage && totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((page) => {
              if (typeof window !== "undefined" && window.innerWidth < 640) {
                return (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                );
              }
              return (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 2 && page <= currentPage + 2)
              );
            })
            .map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page ? "bg-orange-500 text-white" : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* View More Button - Only outside /gallery */}
      {!isGalleryPage && (
        <div className="flex justify-center mt-8">
          <a
            href="/gallery"
            className="bg-[#DF6618] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c95512] transition"
          >
            View More
          </a>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
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
