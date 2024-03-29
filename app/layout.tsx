import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Link from "next/link";
import { ContactBtn } from "@/components/ContactBtn";

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
                <header className="bg-orange-600 text-white font-medium sticky top-0 z-30">
                    <nav className=" gap-5 text-lg py-3 flex items-center justify-end mr-5">
                        <Link
                            className="tracking-wider hover:text-black "
                            href="/"
                        >
                            Home
                        </Link>

                        <Link
                            className="tracking-wider  hover:text-black"
                            href="/project"
                        >
                            Projects
                        </Link>
                    </nav>
                </header>
                {children}
                <ContactBtn />
                <Footer />
            </body>
        </html>
    );
}
