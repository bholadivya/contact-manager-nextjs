import { ContactForm } from "@/app/_components/ContactForm";
import { updateContactAction } from "@/app/actions/contact";
import { getContactById } from "@/app/api/contact";
import React from "react";

const EditContactPage = async ({ params }) => {
  // get contact ID from URL
  const { id } = await params;
  // fetch existing contact data using API function for pre-filling the form
  const contact = await getContactById(id);
  console.log("Fetched contact data for editing:", contact); // log fetched contact data for debugging
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* page title */}
      <h1 className="text-2xl font-bold mb-6">Edit Contact</h1>
      {/* reusable contact form */}
      <ContactForm action={updateContactAction} contact={contact} />
    </div>
  );
};

export default EditContactPage;
