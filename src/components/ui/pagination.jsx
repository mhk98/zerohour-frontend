"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.filter((page) => page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1));

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button variant="outline" size="sm" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {visiblePages.map((page, index) => {
        if (index > 0 && page - visiblePages[index - 1] > 1) {
          return (
            <div key={`ellipsis-${page}`} className="flex items-center gap-2">
              <span className="px-2">...</span>
              <Button variant={currentPage === page ? "default" : "outline"} size="sm" onClick={() => onPageChange(page)}>
                {page}
              </Button>
            </div>
          );
        }
        return (
          <Button key={page} variant={currentPage === page ? "default" : "outline"} size="sm" onClick={() => onPageChange(page)}>
            {page}
          </Button>
        );
      })}

      <Button variant="outline" size="sm" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}


