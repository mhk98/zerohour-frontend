"use client";

import { Facebook, MessageCircle, Share2 } from "lucide-react";
import { Button } from "./button";

export function ShareButtons({ title, slug }) {
  const url = typeof window !== "undefined" ? `${window.location.origin}/news/${slug}` : "";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank", "width=600,height=400");
  };

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, "_blank");
  };

  const shareOnMessenger = () => {
    window.open(
      `https://www.facebook.com/dialog/send?link=${encodedUrl}&app_id=YOUR_APP_ID`,
      "_blank",
      "width=600,height=400"
    );
  };

  return (
    <div className="flex items-center gap-3 mt-6">
      <span className="font-bengali text-sm text-gray-600 dark:text-gray-400">Share:</span>
      <Button variant="outline" size="sm" onClick={shareOnFacebook} className="flex items-center gap-2">
        <Facebook className="h-4 w-4" />
        <span className="font-bengali">Facebook</span>
      </Button>
      <Button variant="outline" size="sm" onClick={shareOnWhatsApp} className="flex items-center gap-2">
        <MessageCircle className="h-4 w-4" />
        <span className="font-bengali">WhatsApp</span>
      </Button>
      <Button variant="outline" size="sm" onClick={shareOnMessenger} className="flex items-center gap-2">
        <Share2 className="h-4 w-4" />
        <span className="font-bengali">Messenger</span>
      </Button>
    </div>
  );
}


