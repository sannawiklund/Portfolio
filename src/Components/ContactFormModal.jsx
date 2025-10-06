import { useRef, useState } from "react";
import { useContact } from "../Context/ContactContext";
import emailjs from "@emailjs/browser";
import "../ComponentStyling/Contact.css";

function ContactFormModal() {
  const { isOpen, setIsOpen, showModal, setShowModal } = useContact();
  const form = useRef();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate email-form 
  const validateForm = (formData) => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter a message.";
    }

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return; // Cancel if form is not valid
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_dqrbm2c",
        "template_ffuj566",
        form.current,
        { publicKey: "82E8KT_g5wuyYtMg_" }
      )
      .then(() => {
        form.current.reset();
        setFormErrors({});
        setIsSubmitting(false);
        setShowModal(true);
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        setIsSubmitting(false);
      });
  };

  const closeModal = () => setShowModal(false);

  return (
    <div>
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/20">
          <div className="bg-sky-50 p-6 sm:p-8 md:p-10 rounded-md shadow-xl relative w-11/12 sm:w-96">
            <button
              onClick={closeModal}
              className="text-stone-700 hover:text-red-800 absolute top-2 right-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="text-stone-800 font-bold text-center">
              Thank you for your mail!
            </p>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isOpen && (
        <div className="fixed z-[900] inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="bg-neutral-800 
                w-full sm:w-11/12 md:w-3/4 lg:w-1/3 
                p-4 sm:p-6 md:p-8 
                rounded-md shadow-md relative"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-yellow-400"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-left text-white">
                Contact Me
              </h2>

              <form ref={form} onSubmit={sendEmail} noValidate>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-left text-white text-sm sm:text-base font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full p-2 border rounded-md focus:outline-none focus:border-pink-200 ${
                      formErrors.name ? "border-red-400" : ""
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-left text-white text-sm sm:text-base font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full p-2 border rounded-md focus:outline-none focus:border-pink-200 ${
                      formErrors.email ? "border-red-400" : ""
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-left text-white text-sm sm:text-base font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className={`text-stone-800 w-full p-2 border rounded-md focus:outline-none focus:border-pink-200 ${
                      formErrors.message ? "border-red-400" : ""
                    }`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#5b8794] hover:bg-[#8ca8af] text-white font-bold py-2 px-4 rounded w-full sm:w-auto ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Let’s talk!"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactFormModal;
