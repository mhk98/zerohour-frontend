// import { NextResponse } from "next/server";
// import newsData from "@/data/sample-news.json";

// export async function GET(request, { params }) {
//   const { slug } = await params;

//   const news = newsData.find((item) => item.slug === slug);

//   if (!news) {
//     return NextResponse.json({ error: "News not found" }, { status: 404 });
//   }

//   const relatedNews = newsData
//     .filter((item) => item.category === news.category && item.id !== news.id)
//     .slice(0, 4);

//   return NextResponse.json({
//     news,
//     relatedNews,
//   });
// }


import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { slug } = await params;

    // 🔥 Fetch all news from backend API
    const res = await fetch("http://localhost:5000/api/v1/news", {
      cache: "no-store",
    });

    const apiData = await res.json();
    const allNews = apiData.data || [];

    // 🔥 Find the news item by slug
    const news = allNews.find((item) => item.slug === slug);

    if (!news) {
      return NextResponse.json(
        { error: "News not found" },
        { status: 404 }
      );
    }

    // 🔥 Related news: same category, exclude current, limit 4
    const relatedNews = allNews
      .filter(
        (item) =>
          item.category === news.category && item.id !== news.id
      )
      .slice(0, 4);

    return NextResponse.json({
      news,
      relatedNews,
    });
  } catch (error) {
    console.error("Error fetching single news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
