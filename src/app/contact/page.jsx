import { ContactList } from "../_components/ContactList";

// importing session helper
// used to check logged-in user session and get user ID
import { getSession } from "../_lib/session";

// importing API helper function
// fetches contacts from backend
import { getContacts } from "../api/contact";

// async server component
// server components can directly fetch data without client-side hooks
const ContactPages = async () => {
  // get logged-in user from session cookie
  const user = await getSession();

  // ========================================
  // PROTECTED ROUTE CHECK
  // ========================================

  // if no user logged in
  if (!user) {
    return (
      <div>
        Please {/* navigate to login page */}
        <a href="/login" className="text-blue-600 hover:underline">
          login
        </a>{" "}
        to view your contacts.
      </div>
    );
  }

  // ========================================
  // FETCH USER CONTACTS
  // ========================================

  // fetch contacts belonging to logged-in user

  const contacts = await getContacts(user?.id);

  // debugging: logs contacts in terminal/server
  console.log("Fetched contacts:", contacts);
  console.log("USER:", user);
  console.log("USER ID:", user?.id);
  // ========================================
  // EMPTY STATE
  // ========================================

  // if user has no contacts
  if (!contacts || contacts.length === 0) {
    return (
      <div>
        No contacts found. Please {/* navigate to add-contact page */}
        <a href="/contact/new" className="text-blue-600 hover:underline">
          Add a Contact
        </a>{" "}
        to manage them here.
      </div>
    );
  }

  // ========================================
  // MAIN CONTACT PAGE UI
  // ========================================
  return (
    <div>
      {/* page header */}
      <div className="flex justify-between items-center mb-6">
        <h1>Your Contacts</h1> {/* page title */}
        {/* add new contact button */}
        <a
          href="/contact/new"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add Contact
        </a>
      </div>
      {/* contacts list will come here */}
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactPages;
