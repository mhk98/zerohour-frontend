// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { formatDate, getCategorySlug, DEFAULT_NEWS_IMAGE } from "@/lib/utils";
// import { ShareButtons } from "@/components/ui/share-buttons";
// import { NewsCard } from "@/components/ui/news-card";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function NewsDetailPage() {
//   const params = useParams();
//   const slug = params.slug;
//   const [news, setNews] = useState(null);
//   const [relatedNews, setRelatedNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//     fetch(`/api/news/${slug}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setNews(data.news);
//         setRelatedNews(data.relatedNews);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching news:", error);
//         setLoading(false);
//       });
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <div className="animate-pulse">
//           <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-96 mb-6"></div>
//           <div className="space-y-3">
//             <div className="bg-gray-300 dark:bg-gray-700 rounded h-8 w-3/4"></div>
//             <div className="bg-gray-300 dark:bg-gray-700 rounded h-4 w-1/2"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!news) {
//     return (
//       <div className="container mx-auto px-4 py-8 text-center">
//         <h1 className="font-bengali text-2xl font-bold text-gray-900 dark:text-white">News not found</h1>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="container mx-auto px-4 py-8">
//         <article className="max-w-4xl mx-auto" data-aos="fade-up">
//           {/* Breadcrumb */}
//           <nav className="mb-6">
//             <ol className="flex items-center space-x-2 font-bengali text-sm text-gray-600 dark:text-gray-400">
//               <li><Link href="/" className="hover:text-primary">Home</Link></li>
//               <li>/</li>
//               <li><Link href={`/category/${getCategorySlug(news.category)}`} className="hover:text-primary">{news.category}</Link></li>
//               <li>/</li>
//               <li className="text-gray-900 dark:text-white">{news.title}</li>
//             </ol>
//           </nav>

//           {/* Category Badge */}
//           <div className="mb-4">
//             <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold font-bengali">
//               {news.category}
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="font-bengali text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{news.title}</h1>

//           {/* Meta Info */}
//           <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
//             <span className="font-bengali">Writer: {news.author}</span>
//             <span>•</span>
//             <time className="font-bengali">{formatDate(news.publishedAt)}</time>
//           </div>

//           {/* Featured Image */}
//           <div className="relative w-full h-64 lg:h-96 mb-8 rounded-lg overflow-hidden">
//             <Image src={news.image || DEFAULT_NEWS_IMAGE} alt={news.title} fill className="object-cover" priority />
//           </div>

//           {/* Content */}
//           <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
//             <p className="font-bengali text-lg leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-line">
//               {news.content}
//             </p>
//           </div>

//           {/* Share Buttons */}
//           <ShareButtons title={news.title} slug={news.slug} />
//         </article>

//         {/* Related News */}
//         {relatedNews.length > 0 && (
//           <section className="mt-16" data-aos="fade-up">
//             <h2 className="font-bengali text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related News</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {relatedNews.map((item) => (
//                 <NewsCard key={item.id} news={item} />
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  formatDate,
  getCategorySlug,
  DEFAULT_NEWS_IMAGE,
} from "@/lib/utils";
import { ShareButtons } from "@/components/ui/share-buttons";
import { NewsCard } from "@/components/ui/news-card";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    fetch(`/api/news/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.news);
        setRelatedNews(data.relatedNews);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        Loading...
      </div>
    );
  }

  if (!news) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="font-bengali text-2xl font-bold">News not found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT Main Content */}
        <article className="lg:col-span-8" data-aos="fade-up">
          
          {/* Breadcrumb */}
          <nav className="mb-4">
            <ol className="flex items-center space-x-2 font-bengali text-sm text-gray-600">
              <li><Link href="/" className="hover:text-primary">হোম</Link></li>
              <li>/</li>
              <li>
                <Link
                  href={`/category/${getCategorySlug(news.category)}`}
                  className="hover:text-primary"
                >
                  {news.category}
                </Link>
              </li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="font-bengali text-3xl font-bold text-gray-900 leading-snug mb-4">
            {news.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-5 mb-6 text-sm text-gray-600">
            <span className="font-bengali">✎ {news.author}</span>
            <span>🕒 {formatDate(news.createdAt)}</span>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-72 md:h-96 rounded-md overflow-hidden mb-6 shadow">
            <img
              src={`http://localhost:5000/${news.image}`}
              alt={news.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="font-bengali text-lg leading-relaxed text-gray-800 whitespace-pre-line mb-8">
             <div dangerouslySetInnerHTML={{ __html: news.content }} />
          </div>

          {/* Share Buttons */}
          <ShareButtons title={news.title} slug={news.slug} />

          {/* Related News */}
          {relatedNews.length > 0 && (
            <section className="mt-12">
              <h2 className="font-bengali text-2xl font-bold mb-6">সম্পর্কিত খবর</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedNews.map((item) => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </div>
            </section>
          )}
        </article>

        {/* RIGHT Sidebar */}
        <aside className="lg:col-span-4 space-y-6" data-aos="fade-left">

          {/* Latest News */}
          <div className="border rounded-md p-4 shadow-sm">
            <h3 className="font-bengali text-xl font-bold mb-4 border-b pb-2">
              সর্বশেষ
            </h3>

            <ul className="space-y-3 font-bengali">
              {relatedNews.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/news/${item.slug}`}
                    className="hover:text-primary text-gray-700"
                  >
                    → {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Filter */}
          {/* <div className="border rounded-md p-4 shadow-sm">
            <h3 className="font-bengali text-xl font-bold mb-4 border-b pb-2">
              এলাকার খবর
            </h3>

            <div className="space-y-4">
              <select className="w-full border p-2 rounded font-bengali">
                <option>বিভাগ</option>
              </select>

              <select className="w-full border p-2 rounded font-bengali">
                <option>জেলা</option>
              </select>

              <select className="w-full border p-2 rounded font-bengali">
                <option>উপজেলা</option>
              </select>
            </div>
          </div> */}

        </aside>
      </div>
    </>
  );
}
