'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function fakeLogin(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'user@example.com' && password === 'password') resolve();
        else reject(new Error('Invalid email or password.'));
      }, 700);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      await fakeLogin(email.trim(), password);
      router.push('/dashboard');
    } catch (err) {
      setError(err?.message ?? 'Sign in failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[60vh] flex flex-col items-center bg-gray-50 p-4 justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign in to your account</h1>

        <form
          onSubmit={handleSubmit}
          aria-describedby={error ? 'login-error' : undefined}
          className="bg-white border border-gray-100 shadow-sm rounded-lg p-6"
        >
          {error && (
            <div
              id="login-error"
              role="alert"
              className="mb-4 text-sm text-red-700 bg-red-50 px-3 py-2 rounded"
            >
              {error}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              aria-invalid={error ? 'true' : 'false'}
              className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
              className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center text-sm text-gray-700">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2">Remember me</span>
            </label>

            <a href="/forgotPassword" className="text-sm text-indigo-600 hover:underline">
              Forgot?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="w-full inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </main>
  );
}