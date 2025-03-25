'use client';

import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context';

export default function LandingPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error('Logout failed:', error.message);
        }
    };

    return (
        <main className="p-4">
            {!user ? (
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Welcome to the Shopping List App</h1>
                    <button
                        onClick={handleLogin}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Login with GitHub
                    </button>
                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Welcome, {user.displayName}</h1>
                    <p className="mb-4 text-gray-600">({user.email})</p>
                    <Link
                        href="/week-9/shopping-list"
                        className="inline-block mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Go to Shopping List
                    </Link>
                    <br />
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            )}
        </main>
    );
}
