import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/list">상품으로</Link>
          <Link href="/cart">장바구니로</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
