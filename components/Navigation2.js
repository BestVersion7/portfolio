import Link from "next/link";

export default function Navigation2() {
    return (
        <header>
            <nav>
                <Link className="section-nav-links" href="/">
                    Home
                </Link>

                <Link className="section-nav-links" href="/article">
                    Article
                </Link>
            </nav>
        </header>
    );
}
