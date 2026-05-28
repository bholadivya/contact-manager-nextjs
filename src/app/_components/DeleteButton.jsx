"use client";
// client component because:
// button click + confirmation dialog need browser interaction

import React, { useActionState } from "react";
import { FiTrash2 } from "react-icons/fi"; // trash/delete icon

// importing server action

import { deleteContactAction } from "../actions/contact";

export const DeleteButton = ({ contactId }) => {
  const [state, formAction] = useActionState(deleteContactAction, null); // hook to track form submission state
  return (
    // form submission
    // sends POST request to delete route with contact ID
    <form action={formAction} method="POST">
      {/* hidden input to pass contact ID */}
      <input type="hidden" name="id" value={contactId} />

      <button
        type="submit"
        className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 hover:border-red-300"
        // confirmation before deleting contact
        onClick={(e) => {
          // browser confirm dialog
          if (!confirm("Are you sure you want to delete this contact?")) {
            e.preventDefault(); // prevent form submission if user cancels
          }
        }}
      >
        {/* delete icon & button text */}
        <FiTrash2 className="text-red-500 text-lg" /> Delete{" "}
      </button>
    </form>
  );
};
