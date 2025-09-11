import Image from "next/image";
import Link from "next/link";
import { blogs } from "../../data/blog"; // ✅ correct path
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import headbg from "../../../assets/blog/images/header-bg-image.webp";

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.id.toString() === params.id);

  if (!blog) return notFound();

  return (
    <div>
        
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={headbg}
          alt={blog.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Blog Card */}
      <article className="relative px-4 md:px-20 py-10 max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="absolute -left-10 top-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5 text-orange-600" />
        </Link>

        <div className="bg-white shadow-md rounded-2xl p-6 md:p-10">
          {/* Main Image */}
          <div className="relative w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Date */}
          <p className="text-gray-500 mt-4 border-b pb-2">
            Posted On: {blog.date}
          </p>

          {/* Blog Content */}
          <div className="prose max-w-none mt-6 prose-headings:text-gray-900 prose-p:text-gray-700">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </div>
      </article>
    </div>
  );
}
