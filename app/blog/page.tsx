import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { blogList } from "@/lib/blogList";

export default function BlogPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sağlık, beslenme ve psikoloji üzerine yazılar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogList.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-soft hover:shadow-elegant-lg transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                  <span className="text-primary-600 font-semibold">• {post.category}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  Devamını Oku
                  <ArrowRight className="ml-1" size={20} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}


