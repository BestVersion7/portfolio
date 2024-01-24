import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "My Website",
    description: "Personal Website",
    keywords: "projects",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <GoogleAnalytics />
            <body className={inter.className}>
                <header className="bg-orange-600 text-white font-medium">
                    <nav className=" gap-5 text-lg py-3 flex items-center justify-end mr-5">
                        <Link
                            className="tracking-wider hover:underline hover:text-green-700 "
                            href="/"
                        >
                            Home
                        </Link>

                        <Link
                            className="tracking-wider  hover:underline hover:text-green-700"
                            href="/article"
                        >
                            Article
                        </Link>
                    </nav>
                </header>
                {children}
                <Footer />
            </body>
        </html>
    );
}
