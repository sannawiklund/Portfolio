import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import backgroundVideo from '../Assets/typing.mp4';
import '../ComponentStyling/Contact.css';



export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_dqrbm2c", // REACT_APP_EMAILJS_SERVICE_ID,
                "template_ffuj566", // REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: "82E8KT_g5wuyYtMg_", // REACT_APP_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );

    };

    return (
        <div className="sticky top-0 h-[100vh] flex flex-col items-center justify-center bg-white">

            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-80"
                src={backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
            />


            <div className="isolate bg-[#ffffffcb] shadow-xl  px-6 p-10 sm:py-31 lg:px-8 rounded-xl">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-medium tracking-tight text-balance text-gray-900 sm:text-4xl">
                        CONTACT ME
                    </h2>

                    <p className="mt-2 text-md text-gray-700" id='contact-text'>
                        Feel free to reach out – I'll get back to you as soon as I can!
                    </p>
                </div>




                {/* EMAILJS-FORM */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="mx-auto mt-16 max-w-xl sm:mt-20"
                >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2" id='form_Container'>
                        <div>
                            <label
                                htmlFor="user_name"
                                className="block text-sm font-semibold text-gray-900"
                            >
                                Name
                            </label>
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
                            <label
                                htmlFor="user_email"
                                className="block text-sm font-semibold text-gray-900"
                            >
                                Email
                            </label>
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
                            <label
                                htmlFor="message"
                                className="block text-sm font-semibold text-gray-900"
                            >
                                Message
                            </label>
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
                            className="block w-full rounded-md bg-[#f3b226] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1d1d1d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
