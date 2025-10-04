import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false); // State from contact-form
  const [showModal, setShowModal] = useState(false); // State from succes-modal

  return (
    <ContactContext.Provider value={{ isOpen, setIsOpen, showModal, setShowModal }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}
