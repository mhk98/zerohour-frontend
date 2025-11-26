// import NewsDetailPage from "./page";
// import newsData from "@/data/sample-news.json";
// import { DEFAULT_NEWS_IMAGE } from "@/lib/utils";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const news = newsData.find((item) => item.slug === slug);

//   if (!news) {
//     return { title: "Zero Ghonta - Your Trusted News Paper" };
//   }

//   return {
//     title: `${news.title} | Zero Ghonta`,
//     description: news.excerpt || news.content.substring(0, 160),
//     openGraph: {
//       title: news.title,
//       description: news.excerpt || news.content.substring(0, 160),
//       images: [
//         { url: news.image || DEFAULT_NEWS_IMAGE, width: 1200, height: 630, alt: news.title },
//       ],
//       type: "article",
//       publishedTime: news.publishedAt,
//       authors: [news.author],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: news.title,
//       description: news.excerpt || news.content.substring(0, 160),
//       images: [news.image || DEFAULT_NEWS_IMAGE],
//     },
//   };
// }

// export default function Page() {
//   return <NewsDetailPage />;
// }


import NewsDetailPage from "./page";
import { DEFAULT_NEWS_IMAGE } from "@/lib/utils";

export async function generateMetadata({ params }) {
  try {
    const { slug } = await params;

    // 🔥 Fetch all news from your backend API
    const res = await fetch("http://localhost:5000/api/v1/news", {
      cache: "no-store",
    });

    const apiData = await res.json();
    const allNews = apiData.data || [];

    console.log("All News Data", apiData);
    // 🔥 Find the single news article
    const news = allNews.find((item) => item.slug === slug);

    if (!news) {
      return {
        title: "Zero Ghonta - Your Trusted News Paper",
        description: "Latest news from Bangladesh and around the world.",
      };
    }

    const description =
      news.excerpt ||
      (news.content ? news.content.replace(/<[^>]*>/g, "").substring(0, 160) : "");

    return {
      title: `${news.title} | Zero Ghonta`,
      description,

      // 🌐 OpenGraph Metadata
      openGraph: {
        title: news.title,
        description,
        images: [
          {
            url: news.image || DEFAULT_NEWS_IMAGE,
            width: 1200,
            height: 630,
            alt: news.title,
          },
        ],
        type: "article",
        publishedTime: news.createdAt,
        authors: [news.author],
      },

      // 🐦 Twitter Card
      twitter: {
        card: "summary_large_image",
        title: news.title,
        description,
        images: [news.image || DEFAULT_NEWS_IMAGE],
      },
    };
  } catch (error) {
    console.error("Metadata Fetch Error:", error);

    // fallback metadata
    return {
      title: "Zero Ghonta - Your Trusted News Paper",
      description: "Stay updated with the latest news.",
    };
  }
}

export default function Page() {
  return <NewsDetailPage />;
}
