import { Noto_Sans_Bengali } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import { Header } from "@/components/ui/header";
import Script from "next/script";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "আমার দেশ - আপনার বিশ্বস্ত সংবাদ মাধ্যম",
  description:
    "বাংলাদেশের সর্বশেষ খবর, জাতীয়, আন্তর্জাতিক, খেলাধুলা, বিনোদন এবং আরও অনেক কিছু",
  keywords: "বাংলাদেশ, সংবাদ, খবর, জাতীয়, আন্তর্জাতিক",
};

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-sans-bengali",
  weight: ["400", "500", "600", "700"],
});

const solaimanLipi = localFont({
  src: "./fonts/SolaimanLipi.ttf",
  variable: "--font-solaiman-lipi",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${notoSansBengali.variable} ${solaimanLipi.variable}`}>
      <body className="font-bengali antialiased">
        <StoreProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </StoreProvider>
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}


