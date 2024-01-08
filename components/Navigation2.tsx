import Link from "next/link";

export default function Navigation2() {
    return (
        <header className="bg-gray-900">
            <nav className="flex gap-5 py-3">
                <Link
                    className="ml-3 text-2xl text-red-200 hover:underline hover:text-green-200 "
                    href="/"
                >
                    Home
                </Link>

                <Link
                    className=" text-2xl text-red-200 hover:underline hover:text-green-200"
                    href="/article"
                >
                    Article
                </Link>
            </nav>
        </header>
    );
}
