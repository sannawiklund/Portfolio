import { useRef } from "react";
import { useContact } from "../Context/ContactContext";
import emailjs from '@emailjs/browser';
import '../ComponentStyling/Contact.css';

function ContactFormModal() {
    const { isOpen, setIsOpen, showModal, setShowModal } = useContact();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_dqrbm2c',
                'template_ffuj566',
                form.current,
                { publicKey: '82E8KT_g5wuyYtMg_' }
            )
            .then(() => {
                form.current.reset();
                setShowModal(true);
            }, (error) => {
                console.log('FAILED...', error.text);
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
                        <p className="text-stone-800 font-bold text-center">Thank you for your mail!</p>
                    </div>
                </div>
            )}


            {/* Contact Modal */}
            {isOpen && (
                <div className="fixed z-[900] inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <div className="bg-neutral-800 
                            w-full sm:w-11/12 md:w-3/4 lg:w-1/3 
                            p-4 sm:p-6 md:p-8 
                            rounded-md shadow-md relative"
                        >
                            <div className="flex justify-end">
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white hover:text-yellow-400"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-left text-white">
                                Contact Me
                            </h2>

                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-left text-white text-sm sm:text-base font-bold mb-2">
                                        Name
                                    </label>
                                    <input type="text" id="name" name="name" className="w-full p-2 border rounded-md focus:outline-none focus:border-pink-200" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-left text-white text-sm sm:text-base font-bold mb-2">
                                        Email
                                    </label>
                                    <input type="email" id="email" name="email" className="w-full p-2 border rounded-md focus:outline-none focus:border-pink-200" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-left text-white text-sm sm:text-base font-bold mb-2">
                                        Message
                                    </label>
                                    <textarea id="message" name="message" rows="4" className="text-stone-800 w-full p-2 border rounded-md focus:outline-none focus:border-pink-200"></textarea>
                                </div>
                                <button type="submit" className="bg-[#5b8794] hover:bg-[#8ca8af] text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
                                    Let´s talk!
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
