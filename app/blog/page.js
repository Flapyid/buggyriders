"use client";

import Image from "next/image";
import Link from "next/link";
import { blogs } from "../../app/data/blog";

export default function BlogPage() {
  return (
    <section className="px-4 md:px-20 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Blog
      </h1>

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
              <p className="text-gray-500 text-sm mb-4">Posted: {blog.date}</p>
              <p className="text-gray-700 flex-grow">{blog.excerpt}</p>

              <Link
                href={blog.readMoreLink}
                className="mt-4 inline-block text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
