"use client";

import "./style.css";
import { useState } from "react";

const AuthTemplate = ({ children }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // currently only client-side demo behavior
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg">
          <div className="p-6">
            <header className="mb-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">Authentication</h2>
            </header>

            <form
              onSubmit={handleSubmit}
              className="auth-controls mb-4"
              aria-label="Quick filter for auth pages"
            >
              <div className="flex items-center gap-3">
                <label htmlFor="auth-filter" className="w-20 text-sm font-medium text-gray-700">
                  Filter
                </label>

                <input
                  id="auth-filter"
                  name="auth-filter"
                  type="search"
                  inputMode="search"
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="Type to filter (demo)"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  aria-label="Filter authentication pages"
                  aria-describedby="auth-filter-help"
                />

                <button
                  type="button"
                  className="px-3 py-2 text-sm text-gray-700 border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  onClick={() => setInput("")}
                  aria-label="Clear filter"
                  hidden={input.length === 0}
                >
                  Clear
                </button>
              </div>

              <p id="auth-filter-help" className="mt-2 text-xs text-gray-500">
                Filter input retained while on this template — does not persist when navigating away.
              </p>
            </form>

            <main>{children}</main>

            <footer aria-hidden="true" className="auth-note mt-4 text-center">
              <small className="text-xs text-gray-500">Demo template — input retained locally for this session.</small>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
