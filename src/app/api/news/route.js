// import { NextResponse } from "next/server";
// import newsData from "@/data/sample-news.json";

// const ITEMS_PER_PAGE = 6;

// export async function GET(request) {
//   const searchParams = request.nextUrl.searchParams;
//   const page = parseInt(searchParams.get("page") || "1");
//   const category = searchParams.get("category") || "";

//   let filteredNews = [...newsData];

//   if (category) {
//     const categoryMap = {
//       national: "জাতীয়",
//       international: "আন্তর্জাতিক",
//       sports: "খেলাধুলা",
//       entertainment: "বিনোদন",
//       technology: "প্রযুক্তি",
//       health: "স্বাস্থ্য",
//       business: "বাণিজ্য",
//       culture: "সংস্কৃতি",
//       education: "শিক্ষা",
//       politics: "রাজনীতি",
//     };
//     const categoryName = categoryMap[category] || category;
//     filteredNews = filteredNews.filter(
//       (item) => item.category === categoryName
//     );
//   }

//   filteredNews.sort(
//     (a, b) =>
//       new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
//   );

//   const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
//   const startIndex = (page - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const paginatedNews = filteredNews.slice(startIndex, endIndex);

//   const featuredNews =
//     filteredNews.find((item) => item.isBreaking) || filteredNews[0];

//   return NextResponse.json({
//     news: paginatedNews,
//     featuredNews: page === 1 ? featuredNews : null,
//     currentPage: page,
//     totalPages,
//     totalItems: filteredNews.length,
//   });
// }



import { NextResponse } from "next/server";

const ITEMS_PER_PAGE = 6;

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const category = searchParams.get("category") || "";

    // 🔥 Fetch news from your backend API
    const res = await fetch("https://zerohour-backend.onrender.com/api/v1/news", {
      cache: "no-store",
    });

    const apiData = await res.json();

    let filteredNews = apiData.data || [];

    console.log("All filteredNews Data", apiData);


    // 🔥 Category mapping
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
        education: "শিক্ষা",
        politics: "রাজনীতি",
      };
      const categoryName = categoryMap[category] || category;

      filteredNews = filteredNews.filter(
        (item) => item.category === categoryName
      );
    }

    // 🔥 Sort by createdAt DESC
    filteredNews.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    // 🔥 Pagination
    const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedNews = filteredNews.slice(startIndex, endIndex);

    // 🔥 Featured breaking news
    const featuredNews =
      filteredNews.find((item) => item.isBreaking) || filteredNews[0];

    return NextResponse.json({
      news: paginatedNews,
      featuredNews: page === 1 ? featuredNews : null,
      currentPage: page,
      totalPages,
      totalItems: filteredNews.length,
    });
  } catch (error) {
    console.error("API Fetch Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
