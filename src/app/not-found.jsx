"use client";

import Link from "next/link";

export default function GlobalNotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gray-50">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-6">
                The page you are looking for does not exist or has been moved.
            </p>
            <div className="flex gap-4">
                <Link href="/" className="btn btn-primary px-6 py-3">
                    Go to Home
                </Link>
                <Link href="/products" className="btn btn-secondary px-6 py-3">
                    Browse Products
                </Link>
            </div>
        </div>
    );
}