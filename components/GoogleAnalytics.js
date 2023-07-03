"use client";
import Script from "next/script";

const GoogleAnalytics = () => {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-461PS4JFHW"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-461PS4JFHW', { page_path: window.location.pathname });
                `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;
