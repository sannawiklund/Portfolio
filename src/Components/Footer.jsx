import { useEffect, useState } from 'react';

export default function Footer() {

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

        <footer className="relative z-1 w-full bg-neutral-700 text-white py-7">

            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 z-20 right-3 bg-transparent text-white px-4 py-2 rounded-full shadow-lg border border-white  hover:bg-white hover:text-black transition-all duration-300"
                >
                    ↑ Top
                </button>
            )}
            <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                © 2025 Sanna Wiklund.
            </div>
        </footer>

    );
}
