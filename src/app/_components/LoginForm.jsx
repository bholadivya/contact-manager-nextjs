"use client";
// this component runs in browser/client
// needed because forms require interactivity

import React from "react";

// importing server action
// this function will run securely on server
import { loginAction } from "../actions/auth";

export const LoginForm = () => {
  return (
    // form container
    // action={loginAction}
    // means:
    // when form submits -> loginAction runs on server
    <form action={loginAction} className="space-y-5">

      {/* EMAIL FIELD */}
      <div>
        {/* input label */}
        <label
          htmlFor=""
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Email
        </label>
        {/* email input */}
        <input
          type="email" // browser validates email format automatically
          name="email" // key used inside formData.get("email")
          placeholder="Enter your email"
          required // field cannot stay empty

          // Tailwind styling
          className="px-4 py-3 text-base w-full rounded-xl border border-gray-300 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* PASSWORD FIELD */}
      <div className="mt-3">
        {/* password input */}
        <label
          htmlFor=""
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Password
        </label>
        <input
          type="password" // hides typed characters
          name="password"  // accessed using: formData.get("password")
          placeholder="Enter your password"
          required
          className="px-4 py-3 text-base w-full rounded-xl border border-gray-300 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit" // submits form
        className="w-full rounded-xl bg-blue-600 py-3 text-base font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
      >
        Login
      </button>
    </form>
  );
};
