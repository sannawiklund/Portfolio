import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../ComponentStyling/Contact.css';
import BackgroundAnimation from './BackgroundAnimation';
import TextType from '../Components/TextType';

export const ContactForm = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  // EmailJS send function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dqrbm2c',
        'template_ffuj566',
        form.current,
        { publicKey: '82E8KT_g5wuyYtMg_' }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setShowModal(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="sticky top-0 h-[100vh] flex flex-col items-center justify-center bg-orange-300 contact_Wrapper">

      {/* Success Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span onClick={closeModal} className="close">&times;</span>
            <p>Thank you for your mail!</p>
          </div>
        </div>
      )}

      <BackgroundAnimation />

      {/* Contact form container */}
      <div className="isolate bg-[#ffffffcb] shadow-xl px-6 p-10 sm:py-31 lg:px-8 rounded-xl">
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="text-4xl pt-5 font-bold tracking-tight text-neutral-800 sm:text-4xl">
            CONTACT ME
          </h2>

          <TextType
            text={["Feel free to reach out ...", "I'll get back to you as soon as I can!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            deletingSpeed={20}
            loop={true}
            className="text-xl font-normal text-neutral-800 pt-4"
            textColors={['#302b2a', '#302b2a']}
          />

        </div>

        {/* EmailJS Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2" id='form_Container'>
            <div>
              <label htmlFor="user_name" className="block text-m font-semibold text-gray-900">Name</label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#ffc548]"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="user_email" className="block text-m font-semibold text-gray-900">Email</label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#ffc548]"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-m font-semibold text-gray-900">Message</label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#ffc548]"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#000000] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1d1d1d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default ContactForm;
