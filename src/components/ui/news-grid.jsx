"use client";

import { NewsCard } from "./news-card";

export function NewsGrid({ news, featuredNews, compact = false }) {
  const displayNews = featuredNews ? [featuredNews, ...news] : news;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayNews.map((item, index) => (
        <NewsCard
          key={`${item.id}-${index}`}
          news={item}
          featured={index === 0 && !!featuredNews}
          variant={compact ? "compact" : "default"}
        />
      ))}
    </div>
  );
}


