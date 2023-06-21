import "./globals.scss";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "My Website",
    description: "Personal Website",
    keywords: "projects",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
