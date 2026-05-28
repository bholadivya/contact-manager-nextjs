// this page becomes a route automatically -> /login

// Server Component by default
// because there is NO "use client"

import { LoginForm } from "@/app/_components/LoginForm";
import Link from "next/link";
import React from "react";

const Loginpage = () => {
  return (
    // centered login card container
    <div className="min-h-[75vh] flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
        {/* page heading */}
        <h1 className="text-5xl tracking-tight font-bold mb-8 text-gray-900">Login</h1>
        {/* interactive login form component */}
        {/* client component because forms need interactivity */}
        <LoginForm />
        {/* redirect user to register page if account doesn't exist */}
        <p className="mt-6 text-center text-gray-600 text-base">
          Dont have an account ?
          {/* Next.js Link for fast client-side navigation */}
          <Link href="/register" className="text-blue-600 font-medium hover:text-blue-700 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Loginpage;

/*
SERVER COMPONENT NOTES

- Server Components render on the server by default
- No "use client" needed
- Better performance and security
- Can safely fetch data/database info

CLIENT COMPONENT NOTES

- Add "use client" for:
  - useState
  - useEffect
  - event handlers
  - forms/interactivity

SERVER ACTIONS

- Functions that run securely on server
- Used for:
  - login
  - signup
  - database access
  - API calls

- Can be called from Client Components
*/
