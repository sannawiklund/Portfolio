import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';

function Contact() {
  const [showButton, setShowButton] = useState(false);

  // Show scroll-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id='Contact'>
      <ContactForm />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-3 bg-transparent text-white px-4 py-2 rounded-full shadow-lg border border-white hover:shadow-xl transition-all duration-300"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

export default Contact;
