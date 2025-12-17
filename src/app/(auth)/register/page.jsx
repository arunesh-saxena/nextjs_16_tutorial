'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setError('');
    setSuccess('');
  };

  const fakeRegister = (data) =>
    new Promise((res, rej) => {
      setTimeout(() => {
        if (data.email === 'taken@example.com') rej(new Error('Email already in use'));
        else res();
      }, 700);
    });

  const validate = ({ username, email, password }) => {
    if (!username.trim() || !email.trim() || !password) return 'All fields are required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email address.';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const v = validate(form);
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    try {
      await fakeRegister(form);
      setSuccess('Account created. Redirecting to sign in…');
      setForm({ username: '', email: '', password: '' });
      setTimeout(() => router.push('/login'), 800);
    } catch (err) {
      setError(err?.message ?? 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Create an account</h1>

        <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
          {error && <div className="text-sm text-red-700 bg-red-50 px-3 py-2 rounded">{error}</div>}
          {success && <div className="text-sm text-green-700 bg-green-50 px-3 py-2 rounded">{success}</div>}

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? 'Creating…' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};