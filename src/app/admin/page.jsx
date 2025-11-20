"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.news);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("আপনি কি এই খবরটি মুছে ফেলতে চান?")) return;
    setNews(news.filter((item) => item.id !== id));
  };

  const handleCreate = () => {
    router.push("/admin/create");
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center font-bengali">লোড হচ্ছে...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bengali text-3xl font-bold text-gray-900 dark:text-white">অ্যাডমিন প্যানেল</h1>
        <Button onClick={handleCreate} className="font-bengali">নতুন খবর যোগ করুন</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 p-4 text-left font-bengali">শিরোনাম</th>
              <th className="border border-gray-300 dark:border-gray-700 p-4 text-left font-bengali">ক্যাটাগরি</th>
              <th className="border border-gray-300 dark:border-gray-700 p-4 text-left font-bengali">লেখক</th>
              <th className="border border-gray-300 dark:border-gray-700 p-4 text-left font-bengali">তারিখ</th>
              <th className="border border-gray-300 dark:border-gray-700 p-4 text-left font-bengali">অপারেশন</th>
            </tr>
          </thead>
          <tbody>
            {news.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 p-4 font-bengali">{item.title}</td>
                <td className="border border-gray-300 dark:border-gray-700 p-4 font-bengali">{item.category}</td>
                <td className="border border-gray-300 dark:border-gray-700 p-4 font-bengali">{item.author}</td>
                <td className="border border-gray-300 dark:border-gray-700 p-4 font-bengali">{new Date(item.publishedAt).toLocaleDateString("bn-BD")}</td>
                <td className="border border-gray-300 dark:border-gray-700 p-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="font-bengali">সম্পাদনা</Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(item.id)} className="font-bengali text-red-600">মুছে ফেলুন</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


