"use client";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            {/* Spinner */}
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500 mb-4"></div>
                <p className="text-gray-600 text-lg font-medium">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
}