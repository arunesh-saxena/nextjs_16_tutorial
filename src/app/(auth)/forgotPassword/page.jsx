'use client'
import React, { useState } from 'react'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setError('')

    const normalized = email.trim()
    if (!normalized) {
      setError('Please enter your email address.')
      return
    }

    setLoading(true)
    try {
      // simulate async request — replace with real API call
      await new Promise((res) => setTimeout(res, 700))

      setMessage(
        'If an account with that email exists, you will receive a password reset email shortly.'
      )
      setEmail('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Forgot Password</h1>

        <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="status-message">
          <div>
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
              className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? 'Sending…' : 'Reset Password'}
          </button>

          <div id="status-message" aria-live="polite" className="min-h-[1.25rem] text-sm">
            {message && <p className="text-green-700 bg-green-50 px-3 py-2 rounded">{message}</p>}
            {error && <p className="text-red-700 bg-red-50 px-3 py-2 rounded">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword