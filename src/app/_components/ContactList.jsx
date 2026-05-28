import Link from "next/link";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { DeleteButton } from "./DeleteButton";

export const ContactList = ({ contacts }) => {
  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div key={contact.id} className="p-4 border rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold">{contact.name}</h2>
              <p className="text-gray-600">{contact.email}</p>
            </div>
            <div className="flex items-center self-center gap-5">
              <Link
                href={`/contact/edit/${contact.id}`}
                className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100 hover:border-blue-300"
              >
                <FiEdit className="text-base" /> <span>Edit</span>
              </Link>
              <DeleteButton contactId={contact.id} />
            </div>
          </div>
          <p className="text-gray-600">{contact.phone}</p>
        </div>
      ))}
    </div>
  );
};
