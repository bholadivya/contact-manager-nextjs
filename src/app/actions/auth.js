"use server";
// this file runs ONLY on server
// used for secure authentication logic

import axios from "axios"; // used for making API requests
import { redirect } from "next/navigation"; // used for navigation/redirects in App Router
import { deleteSession, setSession } from "../_lib/session"; // session helper functions

const API_URL = "http://localhost:3001"; // fake backend URL

// ========================================
// LOGIN ACTION
// ========================================

export const loginAction = async (formData) => {
  // check user in fake database
  const response = await axios.get(
    `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`,
  );
  // debugging
  console.log(response.data);

  const user = response.data[0]; // get first matching user

  // if user not found
  if (!user) {
    return {
      error: "Invalid credentials",
    };
  }
  // create session cookie
  await setSession({
    // store only safe user info
    name: user.name,
    email: user.email,
    id: user.id,
  });
  // navigate after successful login
  redirect("/contact");
};

// ========================================
// LOGOUT ACTION
// ========================================

export const logoutAction = async () => {
  await deleteSession(); // remove session cookie
  redirect("/login"); // redirect to login page
};
