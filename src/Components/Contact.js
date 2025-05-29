import { useEffect, useState } from 'react';
import '../ComponentStyling/Contact.css';

function Contact() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="sticky top-0 h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black"
      id="Contact"
    >
      <h2 className="text-4xl font-bold">The Fourth slide</h2>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-3 bg-transparent text-white px-4 py-2 rounded-full shadow-lg border border-white hover:bg-transparent hover:shadow-xl transition-all duration-300"
        >
          ↑ Top
        </button>

      )}
    </div>
  );
}

export default Contact;
