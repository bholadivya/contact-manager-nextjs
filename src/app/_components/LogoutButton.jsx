"use client";
// this component runs in browser/client
// needed because button click uses event handlers

import React from "react";

// importing logout server action
// handles deleting session cookie
import { logoutAction } from "../actions/auth";

// App Router navigation utilities
import { redirect } from "next/navigation";
// hook for client-side navigation
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  // router object used for navigation
  const router = useRouter();

  // logout handler function
  const handleLogout = async () => {
    // call server action
    // deletes session cookie
    try {
      await logoutAction();

      // ========================================
      // IMPORTANT UNDERSTANDING
      // ========================================

      // logoutAction already contains:
      // redirect("/login")

      // so these lines become:
      // optional / fallback

      // redirect("/login");

      // navigate to login page manually
      router.push("/login");

      // refresh app state/UI
      // useful for auth-based rendering
      router.refresh();
    } catch (error) {
      // error handling
      console.error("Logout failed:", error);
    }
  };
  return (
    <button
      // runs logout handler on click
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
