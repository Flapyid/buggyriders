"use client";

import Image from "next/image";
import { blogs } from "../../app/data/blog";
import bgimg from "../../assets/blog/images/header-bg-image.webp";

export default function BlogPage() {
  return (
    <>
      {/* Header Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg.src})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-5xl md:text-6xl font-bold text-white px-6 py-2">
          Our Blog
        </h1>
      </section>

      {/* Blog Grid */}
      <section className="px-4 md:px-20 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-2xl shadow-md overflow-hidden bg-white flex flex-col"
            >
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-500 text-sm mb-4">
                  Posted: {blog.date}
                </p>
                <p className="text-gray-700 flex-grow">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
