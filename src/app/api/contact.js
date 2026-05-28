// importing axios for API requests
import axios from "axios";

// base URL of fake backend (json-server)
const API_URL = "http://localhost:3001";

// ========================================
// GET ALL CONTACTS OF A USER
// ========================================

// fetch contacts belonging to logged-in user
export const getContacts = async (userId) => {
  // GET request: /contacts?userId=1
  const response = await axios.get(`${API_URL}/contacts?userId=${userId}`);
  return response.data; // return contacts array
};

// ========================================
// GET SINGLE CONTACT BY ID
// ========================================

// fetch one contact using contact ID
export const getContactById = async (id) => {
  // GET request: /contacts/1
  const response = await axios.get(`${API_URL}/contacts/${id}`);
  return response.data; // return single contact object
};

// ========================================
// CREATE NEW CONTACT
// ========================================

// add new contact to database
export const createContact = async (contact) => {
  // POST request: sends new contact data
  const response = await axios.post(`${API_URL}/contacts`, contact);
  return response.data; // return created contact
};

// ========================================
// UPDATE EXISTING CONTACT
// ========================================

// update contact using contact ID
export const updateContact = async (id, contact) => {
  // PUT request: replaces contact data
  const response = await axios.put(`${API_URL}/contacts/${id}`, contact);
  return response.data; // return updated contact
};

// ========================================
// DELETE CONTACT
// ========================================

// remove contact using ID
export const deleteContact = async (id) => {
  // DELETE request: removes contact from database
  const response = await axios.delete(`${API_URL}/contacts/${id}`);
  return response.data; // return deleted contact response
};
