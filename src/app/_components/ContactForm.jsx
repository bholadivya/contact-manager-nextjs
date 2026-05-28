"use client";
import React, { useActionState } from "react";

export const ContactForm = ({ contact, action }) => {
  // hook for server action state management
  const [state, formAction] = useActionState(action, null);

  return (
    <form action={formAction} className="space-y-5">
      {/* hidden ID field for edit */}
      <input type="hidden" name="id" value={contact?.id || ""} />

      {/* NAME FIELD */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Name
        </label>
        {/* name input */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          defaultValue={contact?.name || ""} // pre-fill with existing name for edit
          className="px-4 py-3 text-base w-full rounded-xl border border-gray-300 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* EMAIL FIELD */}
      <div className="mt-3">
        {/* email input */}
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          defaultValue={contact?.email || ""} // pre-fill with existing email for edit
          className="px-4 py-3 text-base w-full rounded-xl border border-gray-300 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>
      {state?.error && (
        <div className="text-red-500 text-sm">{state.error}</div>
      )}
      {/* SUBMIT BUTTON */}
      <button
        type="submit" // submits form
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Save Contact
      </button>

      {/* error message */}

      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
    </form>
  );
};
