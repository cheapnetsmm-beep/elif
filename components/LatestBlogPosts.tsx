import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { blogList } from "@/lib/blogList";

const COUNT = 4;

export default function LatestBlogPosts() {
  const posts = blogList.slice(0, COUNT);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Son Blog Yazıları
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beslenme, psikoloji ve psikonütrisyon üzerine güncel yazılar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                Oku
                <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
          >
            Tüm yazılar
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
