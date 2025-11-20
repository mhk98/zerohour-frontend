import { NextResponse } from "next/server";
import newsData from "@/data/sample-news.json";

const ITEMS_PER_PAGE = 6;

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const category = searchParams.get("category") || "";

  let filteredNews = [...newsData];

  if (category) {
    const categoryMap = {
      national: "জাতীয়",
      international: "আন্তর্জাতিক",
      sports: "খেলাধুলা",
      entertainment: "বিনোদন",
      technology: "প্রযুক্তি",
      health: "স্বাস্থ্য",
      business: "বাণিজ্য",
      culture: "সংস্কৃতি",
    };
    const categoryName = categoryMap[category] || category;
    filteredNews = filteredNews.filter(
      (item) => item.category === categoryName
    );
  }

  filteredNews.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(startIndex, endIndex);

  const featuredNews =
    filteredNews.find((item) => item.isBreaking) || filteredNews[0];

  return NextResponse.json({
    news: paginatedNews,
    featuredNews: page === 1 ? featuredNews : null,
    currentPage: page,
    totalPages,
    totalItems: filteredNews.length,
  });
}
