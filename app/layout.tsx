import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navigation2 from "@/components/Navigation2";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
                {/* <Navigation2 /> */}
                {children}
                <Footer />
            </body>
        </html>
    );
}
