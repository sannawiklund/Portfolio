// src/components/BackgroundAnimation.js
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gray-900"> {/* Grundfärg för bakgrunden */}

      {/* Blob 1: Stor och osymmetrisk form 1 */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[550px] bg-purple-500 mix-blend-screen filter blur-3xl opacity-70 animate-blob-1"
        style={{ borderRadius: '40% 60% 70% 30% / 60% 40% 30% 70%' }}
      ></div>

      {/* Blob 2: Lite mindre men också osymmetrisk form 2 */}
      <div
        className="absolute top-1/2 left-3/4 w-[500px] h-[480px] bg-pink-500 mix-blend-screen filter blur-3xl opacity-70 animate-blob-2"
        style={{ borderRadius: '55% 45% 35% 65% / 45% 65% 55% 35%' }}
      ></div>

      {/* Blob 3: Stor och osymmetrisk form 3 (annan form) */}
      <div
        className="absolute bottom-1/4 left-1/3 w-[700px] h-[650px] bg-blue-500 mix-blend-screen filter blur-3xl opacity-70 animate-blob-1 animation-delay-2000"
        style={{ borderRadius: '60% 40% 40% 60% / 70% 30% 70% 30%' }}
      ></div>

      {/* Blob 4: Ytterligare en stor och osymmetrisk form 4 */}
      <div
        className="absolute top-1/3 right-1/4 w-[580px] h-[620px] bg-yellow-400 mix-blend-screen filter blur-3xl opacity-70 animate-blob-2 animation-delay-3000"
        style={{ borderRadius: '30% 70% 50% 50% / 50% 30% 70% 50%' }}
      ></div>

      {/* Lägg till fler blobar eller anpassa befintliga för mer variation */}

    </div>
  );
};

export default BackgroundAnimation;