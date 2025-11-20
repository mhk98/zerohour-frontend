"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { generateSlug, DEFAULT_NEWS_IMAGE } from "@/lib/utils";

export default function CreateNewsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
    excerpt: "",
    image: "",
    isBreaking: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newsData = {
      id: Date.now(),
      title: formData.title,
      slug: generateSlug(formData.title),
      author: formData.author,
      publishedAt: new Date().toISOString(),
      category: formData.category,
      content: formData.content,
      excerpt: formData.excerpt || formData.content.substring(0, 160),
      image: formData.image || DEFAULT_NEWS_IMAGE,
      isBreaking: formData.isBreaking || false,
    };
    console.log("Create news:", newsData);
    router.push("/admin");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="font-bengali text-3xl font-bold mb-8 text-gray-900 dark:text-white">নতুন খবর যোগ করুন</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-bengali font-semibold mb-2 text-gray-700 dark:text-gray-300">শিরোনাম *</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-bengali dark:bg-gray-800 dark:text-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-bengali font-semibold mb-2 text-gray-700 dark:text-gray-300">লেখক *</label>
            <input type="text" name="author" value={formData.author} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-bengali dark:bg-gray-800 dark:text-white" />
          </div>
          <div>
            <label className="block font-bengali font-semibold mb-2 text-gray-700 dark:text-gray-300">ক্যাটাগরি *</label>
            <select name="category" value={formData.category} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-bengali dark:bg-gray-800 dark:text-white">
              <option value="">বেছে নিন</option>
              <option value="জাতীয়">জাতীয়</option>
              <option value="আন্তর্জাতিক">আন্তর্জাতিক</option>
              <option value="খেলাধুলা">খেলাধুলা</option>
              <option value="বিনোদন">বিনোদন</option>
              <option value="প্রযুক্তি">প্রযুক্তি</option>
              <option value="স্বাস্থ্য">স্বাস্থ্য</option>
              <option value="বাণিজ্য">বাণিজ্য</option>
              <option value="সংস্কৃতি">সংস্কৃতি</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-bengali font-semibold mb-2 text-gray-700 dark:text-gray-300">ছবির URL</label>
          <input type="url" name="image" value={formData.image} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white" />
        </div>

        <div>
          <label className="block font-bengali font-semibold mb-2 text-gray-700 dark:text-gray-300">সারসংক্ষেপ</label>
          <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows={2} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-bengali dark:bg-gray-800 dark:text-white" />
        </div>

        <div>
          <label className="block font-bengali font-semibold mb-2 text-gray-700 dark:text-gray-300">বিষয়বস্তু *</label>
          <textarea name="content" value={formData.content} onChange={handleChange} required rows={10} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-bengali dark:bg-gray-800 dark:text-white" />
        </div>

        <div className="flex items-center">
          <input type="checkbox" name="isBreaking" checked={formData.isBreaking} onChange={handleChange} className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
          <label className="ml-2 font-bengali text-gray-700 dark:text-gray-300">Breaking News</label>
        </div>

        <div className="flex gap-4">
          <Button type="submit" className="font-bengali">প্রকাশ করুন</Button>
          <Button type="button" variant="outline" onClick={() => router.back()} className="font-bengali">বাতিল করুন</Button>
        </div>
      </form>
    </div>
  );
} 


