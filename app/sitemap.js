import { blogs } from "./data/blog";

export default function sitemap() {
  const baseUrl = "https://buggyriders.ae"; // Update with actual domain
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact', 
    '/gallery',
    '/blog',
    '/dunebuggy',
    '/quadbike',
    '/desertadventure'
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));

  // Blog posts
  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticUrls,
    ...blogUrls,
  ];
}