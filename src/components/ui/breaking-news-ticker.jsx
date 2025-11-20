"use client";

import { motion } from "framer-motion";

export function BreakingNewsTicker({ news }) {
  const breakingNews = (news || []).filter((item) => item.isBreaking);
  if (breakingNews.length === 0) return null;

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden relative">
      <div className="flex items-center gap-4">
        <span className="bg-white text-red-600 px-4 py-1 font-bold whitespace-nowrap">
          ব্রেকিং নিউজ
        </span>
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, `-${50 * breakingNews.length}%`] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
          >
            {[...breakingNews, ...breakingNews].map((item, index) => (
              <a key={`${item.id}-${index}`} href={`/news/${item.slug}`} className="whitespace-nowrap hover:underline">
                {item.title}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}


