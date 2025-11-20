"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDate, DEFAULT_NEWS_IMAGE } from "@/lib/utils";
import { motion } from "framer-motion";

export function NewsCard({ news, featured = false, variant = "default" }) {
  const isCompact = variant === "compact";
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`group cursor-pointer ${featured ? "lg:col-span-2" : ""}`}
    >
      <Link href={`/news/${news.slug}`}>
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className={`relative ${featured ? "h-64 lg:h-96" : isCompact ? "h-40" : "h-48"} overflow-hidden`}>
            <Image
              src={news.image || DEFAULT_NEWS_IMAGE}
              alt={news.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
            />
            {/* <div className="absolute top-4 left-4">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {news.category}
              </span>
            </div> */}
            <div className="absolute top-4 left-4">
  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
    {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
  </span>
</div>

          </div>
          <div className="p-4 lg:p-6">
            <h2 className={`font-bengali font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors ${
              featured ? "text-xl lg:text-2xl" : isCompact ? "text-base" : "text-lg"
            }`}>
              {news.title}
            </h2>
            {!isCompact && news.excerpt && (
              <p className="font-bengali text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                {news.excerpt}
              </p>
            )}
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span className="font-bengali">{news.author}</span>
              <time className="font-bengali">{formatDate(news.publishedAt)}</time>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}


