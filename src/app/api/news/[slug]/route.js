import { NextResponse } from "next/server";
import newsData from "@/data/sample-news.json";

export async function GET(request, { params }) {
  const { slug } = await params;

  const news = newsData.find((item) => item.slug === slug);

  if (!news) {
    return NextResponse.json({ error: "News not found" }, { status: 404 });
  }

  const relatedNews = newsData
    .filter((item) => item.category === news.category && item.id !== news.id)
    .slice(0, 4);

  return NextResponse.json({
    news,
    relatedNews,
  });
}


