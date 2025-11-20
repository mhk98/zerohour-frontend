"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchNews, setCurrentPage } from "@/store/newsSlice";
import { NewsGrid } from "@/components/ui/news-grid";
import { Pagination } from "@/components/ui/pagination";
import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import { BreakingNewsTicker } from "@/components/ui/breaking-news-ticker";
import { SidebarWidgets } from "@/components/ui/sidebar-widgets";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { news, featuredNews, loading, currentPage, totalPages } = useAppSelector(
    (state) => state.news
  );
  const [breakingNews, setBreakingNews] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    dispatch(fetchNews({ page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    const allNews = [...news];
    if (featuredNews) {
      allNews.unshift(featuredNews);
    }
    setBreakingNews(allNews.filter((item) => item.isBreaking));
    setList(news);

  }, [news, featuredNews]);


  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(fetchNews({ page }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <BreakingNewsTicker news={breakingNews} />
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8" data-aos="fade-up">
        <section className="lg:col-span-8">
          <h2 className="font-bengali text-2xl font-bold mb-4 text-gray-900 dark:text-white">সর্বশেষ</h2>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <SkeletonLoader key={i} />
              ))}
            </div>
          ) : (
            <>
              <NewsGrid news={list} compact />
              {currentPage < totalPages && (
                <div className="flex justify-center mt-6">
                  <button
                    className="font-bengali bg-primary text-white px-5 py-2 rounded hover:bg-primary/90"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                   আরও দেখুন
                  </button>
                </div>
              )}
            </>
          )}
        </section>
        <aside className="lg:col-span-4">
          <SidebarWidgets />
        </aside>
      </div>
    </div>
  );
}


