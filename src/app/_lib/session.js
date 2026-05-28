// importing cookies utility from Next.js
import { cookies } from "next/headers";

// 🍪 What is a Cookie?

// Cookie = small data stored in browser.

// Used for:
// authentication
// sessions
// remembering user

// 🧠 What is cookies()?

// Used to:
// create cookies
// read cookies
// delete cookies

// inside:
// Server Components / Server Actions

// ================================
// CREATE SESSION COOKIE
// ================================

// stores logged-in user in browser cookie
export const setSession = async (user) => {
  // create cookie
  const cookieStore = await cookies();
  cookieStore.set(
    // cookie name
    "session",
    // cookies only store strings
    // so convert object -> string
    JSON.stringify(user),
    {
      // browser JS cannot access cookie
      // improves security
      httpOnly: true,
      // cookie only works on HTTPS in production
      secure: process.env.NODE_ENV === "production",
      // cookie expiry time
      // 7 days
      maxAge: 60 * 60 * 24 * 7,
      // cookie available across entire app
      path: "/",
    },
  );
};

// ================================
// GET SESSION COOKIE
// ================================

// returns logged-in user
export const getSession = async () => {
  // get session cookie value
  const session = (await cookies()).get("session")?.value;
  // if no session exists
  // user not logged in
  if (!session) return null;
  // convert string -> object
  const user = JSON.parse(session);
  return user;
};

// ================================
// DELETE SESSION COOKIE
// ================================

// logs user out
export const deleteSession = async () => {
  // get cookie store
  const cookieStore = await cookies();
  // remove session cookie
  cookieStore.delete("session");
};
