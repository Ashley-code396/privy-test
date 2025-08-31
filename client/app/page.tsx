'use client';

import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';

export default function Home() {
  const { ready, authenticated, user, logout } = usePrivy();

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to Privy Test App
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A simple app to test Privy authentication with Google login.
          </p>
        </div>

        <div className="mt-10 text-center">
          {authenticated ? (
            <div className="space-y-6">
              <div className="bg-white shadow rounded-lg p-6 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome back!</h2>
                <p className="text-gray-600 mb-4">
                  Logged in as: {user?.email?.address || user?.google?.email || 'User'}
                </p>
                <button
                  onClick={logout}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-gray-600">You are not logged in.</p>
              <Link
                href="/login"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Go to Login Page
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
