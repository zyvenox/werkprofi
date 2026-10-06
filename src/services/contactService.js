import apiRequest from "./api";

export function sendContactForm(formData) {
  return apiRequest("/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
}

export function getContactRequests() {
  return apiRequest("/contact");
}