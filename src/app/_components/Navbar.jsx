import React from "react";
import Link from "next/link";
// reusable logout button component
import LogoutButton  from "./LogoutButton";
import { getSession } from "../_lib/session"; // helper to get user session 

const Navbar = async () => {
  // temporary fake auth state

  // true  -> user logged in
  // false -> user not logged in

  // later this will come from:
  // cookies/session/database

  const session = await getSession
  (); // get user session (if exists)
  return (
    // navbar container
    <nav className="bg-white shadow-sm">
      {/* center content with spacing and flex layout */}
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* website logo/title */}
        {/* Link provides fast client-side navigation */}
        {/* clicking this navigates to homepage */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-blue-700"
        >
          Contact Manager
        </Link>

        {/* right side navigation items */}
        <div className="flex items-center space-x-4">
          {/* conditional rendering based on session */}
          {session ? (
            // UI shown when user is logged in
            <>
              {/* contacts page link */}
              <Link
                href="/contact"
                className="text-base font-medium text-gray-800 hover:text-blue-700"
              >
                Contacts
              </Link>

              {/* reusable logout button */}
              <LogoutButton />
            </>
          ) : (
            // UI shown when user is NOT logged in
            <>
              {/* login page link */}
              <Link
                href="/login"
                className="text-base font-medium text-gray-800 hover:text-blue-700"
              >
                Login
              </Link>

              {/* register page link */}
              <Link
                href="/register"
                className="text-base font-medium text-gray-800 hover:text-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
