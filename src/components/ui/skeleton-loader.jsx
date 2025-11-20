"use client";

export function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-48 mb-4"></div>
      <div className="space-y-2">
        <div className="bg-gray-300 dark:bg-gray-700 rounded h-4 w-3/4"></div>
        <div className="bg-gray-300 dark:bg-gray-700 rounded h-4 w-1/2"></div>
      </div>
    </div>
  );
}


