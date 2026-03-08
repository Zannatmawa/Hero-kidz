"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Logic for authentication goes here
        console.log("Logging in with:", { email, password });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold  mb-2" style={{ color: '#FC4000' }}>Welcome Back</h1>
                    <p className="text-gray-600">Please enter your details to sign in.</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <Link href="/forgot-password" size="sm" className="text-sm text-red-500 hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                        <input
                            type="password"
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{ backgroundColor: '#FC4000' }}
                        className="w-full text-white font-bold py-3 rounded-lg transition-colors shadow-md active:transform active:scale-[0.98]"
                    >
                        Sign In
                    </button>
                </form>

                {/* Footer Links */}
                <div className="mt-8 text-center border-t pt-6">
                    <p className="text-gray-600 text-sm">
                        Don't have an account?{" "}
                        <Link href="/register" className=" font-bold hover:underline" style={{ color: '#FC4000' }}>
                            Create one for free
                        </Link>
                    </p>

                    <Link href="/" className="inline-block mt-6 text-gray-400 hover:text-gray-600 text-sm transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}