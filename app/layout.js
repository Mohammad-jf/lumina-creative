import Header from "@/components/layout/Header";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Lumina",
  description: "Lumina Creative",
};

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
