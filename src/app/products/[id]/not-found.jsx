"use client";
import Link from "next/link";

export default function ProductNotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <h1 className="text-5xl font-bold text-red-500 mb-4">
                Product Not Found
            </h1>
            <p className="text-gray-600 mb-6">
                Sorry, the product you are looking for does not exist or has been removed.
            </p>
            <Link
                href="/products"
                className="btn btn-primary px-6 py-3"
            >
                Go Back to Products
            </Link>
        </div>
    );
}