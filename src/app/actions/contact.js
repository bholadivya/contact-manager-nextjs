"use server";
// server action to handle contact deletion
import { revalidatePath } from "next/cache";
import { createContact, deleteContact, updateContact } from "../api/contact";
import { getSession } from "../_lib/session";
import { redirect } from "next/navigation";

export const createContactAction = async (prevState, formData) => {
  if (!formData.get("name") || !formData.get("email")) {
    return { error: "Name and email are required." }; // return error if validation fails
  }
  const user = await getSession(); // get current user session
  const newContact = {
    name: formData.get("name"),
    email: formData.get("email"),
    userId: Number(user.id), // associate contact with current user
  };
  try {
    await createContact(newContact); // create new contact in database using API function
    revalidatePath("/contact"); // refresh contact page to show new contact after creationccess: true }; // return success response
  } catch (error) {
    console.log("Error creating contact:", error);
    return { error: "Failed to create contact. Please try again." }; // return error message on failure
  }
  redirect("/contact");
};

export const updateContactAction = async (prevState, formData) => {
  const id = formData.get("id"); // get contact ID from hidden input
  const user = await getSession(); // get current user session
  const updatedContact = {
    name: formData.get("name"),
    email: formData.get("email"),
    userId: Number(user.id), // associate contact with current user
  };
  try {
    await updateContact(id, updatedContact); // update existing contact in database using API function
    revalidatePath("/contact"); // refresh contact page to show updated contact
  } catch (error) {
    console.log("Error updating contact:", error);
    return { error: "Failed to update contact. Please try again." }; // return error message on failure
  }
  redirect("/contact");
};

export const deleteContactAction = async (prevState, formData) => {
  // get contact ID from hidden input
  const id = formData.get("id");

  try {
    // delete contact from database using API function
    await deleteContact(id);
    // refresh contact page to show updated contact list after deletion
    revalidatePath("/contact");
  } catch (error) {
    console.log("Error deleting contact:", error);
    return { error: "Failed to delete contact. Please try again." }; // return error message on failure
  }
  redirect("/contact");
};
