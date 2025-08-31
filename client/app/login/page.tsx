'use client';

import { useState } from 'react';
import { usePrivy, useLoginWithEmail } from '@privy-io/react-auth';

export default function LoginPage() {
  const { ready, authenticated, user, login } = usePrivy();
  const { sendCode, loginWithCode } = useLoginWithEmail();

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Already logged in!
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Welcome back, {user?.email?.address || user?.google?.email || 'User'}
            </p>
          </div>
          <div className="text-center">
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Go to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Choose your preferred login method
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={login}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login with Privy
          </button>
          {/* <div className="mt-6">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              onClick={() => sendCode({ email })}
              className="mt-2 w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Send Code
            </button>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter code"
              value={code}
              onChange={(e) => setCode(e.currentTarget.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              onClick={() => loginWithCode({ code })}
              className="mt-2 w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Login with Code
            </button>
          </div> */}
          <div className="text-center mt-4">
            <a
              href="/"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
