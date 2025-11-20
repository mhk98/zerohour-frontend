import NewsDetailPage from "./page";
import newsData from "@/data/sample-news.json";
import { DEFAULT_NEWS_IMAGE } from "@/lib/utils";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const news = newsData.find((item) => item.slug === slug);

  if (!news) {
    return { title: "Zero Ghonta - Your Trusted News Paper" };
  }

  return {
    title: `${news.title} | Zero Ghonta`,
    description: news.excerpt || news.content.substring(0, 160),
    openGraph: {
      title: news.title,
      description: news.excerpt || news.content.substring(0, 160),
      images: [
        { url: news.image || DEFAULT_NEWS_IMAGE, width: 1200, height: 630, alt: news.title },
      ],
      type: "article",
      publishedTime: news.publishedAt,
      authors: [news.author],
    },
    twitter: {
      card: "summary_large_image",
      title: news.title,
      description: news.excerpt || news.content.substring(0, 160),
      images: [news.image || DEFAULT_NEWS_IMAGE],
    },
  };
}

export default function Page() {
  return <NewsDetailPage />;
}


