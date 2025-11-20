import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date) {
  const d = new Date(date);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} সেকেন্ড আগে`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} মিনিট আগে`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} ঘন্টা আগে`;
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} দিন আগে`;
  } else {
    return d.toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}

export function getCategorySlug(categoryName) {
  const categoryMap = {
    "জাতীয়": "national",
    "আন্তর্জাতিক": "international",
    "খেলাধুলা": "sports",
    "বিনোদন": "entertainment",
    "প্রযুক্তি": "technology",
    "স্বাস্থ্য": "health",
    "বাণিজ্য": "business",
    "সংস্কৃতি": "culture",
  };
  return categoryMap[categoryName] || categoryName.toLowerCase();
}

export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\u0980-\u09FF\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export const DEFAULT_NEWS_IMAGE =
  "https://source.unsplash.com/1200x800/?news,bangladesh";

// Bengali numerals helpers
const bnDigitsMap = { "0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯" };
export function toBnDigits(input) {
  return String(input).replace(/[0-9]/g, d => bnDigitsMap[d]);
}

export const bnWeekdays = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"];
export const bnMonths = [
  "জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন",
  "জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"
];

export function getCalendarMatrix(year, monthIndex) {
  // monthIndex: 0-11
  const firstDay = new Date(year, monthIndex, 1);
  const startDay = firstDay.getDay(); // 0=Sun
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const daysInPrev = new Date(year, monthIndex, 0).getDate();

  const cells = [];
  // leading days from previous month
  for (let i = startDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, otherMonth: -1 });
  }
  // current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, otherMonth: 0 });
  }
  // trailing days from next month to fill 42 cells (6 weeks)
  const total = 42;
  let nextDay = 1;
  while (cells.length < total) {
    cells.push({ day: nextDay++, otherMonth: 1 });
  }
  // chunk into 7s
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}


