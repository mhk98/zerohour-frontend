"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchNews, setCurrentPage } from "@/store/newsSlice";
import { useParams } from "next/navigation";
import { NewsGrid } from "@/components/ui/news-grid";
import { Pagination } from "@/components/ui/pagination";
import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CategoryPage() {
  const params = useParams();

  const category = params.category;
  const dispatch = useAppDispatch();
  const { news, loading, currentPage, totalPages } = useAppSelector((state) => state.news);

  console.log("Category Page Rendered with category:", category);

  const categoryMap = {
    national: "জাতীয়",
    international: "আন্তর্জাতিক",
    sports: "খেলাধুলা",
    entertainment: "বিনোদন",
    technology: "প্রযুক্তি",
    health: "স্বাস্থ্য",
    business: "বাণিজ্য",
    culture: "সংস্কৃতি",
  };

  const categoryName = categoryMap[category] || category;

  useEffect(() => {
    AOS.init({ duration: 1000 });
    dispatch(fetchNews({ page: 1, category }));
  }, [dispatch, category]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(fetchNews({ page, category }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bengali text-4xl font-bold mb-8 text-gray-900 dark:text-white" data-aos="fade-up">
        {categoryName}
      </h1>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <SkeletonLoader key={i} />
          ))}
        </div>
      ) : (
        <>
          <NewsGrid news={news} />
          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          )}
        </>
      )}
    </div>
  );
}


