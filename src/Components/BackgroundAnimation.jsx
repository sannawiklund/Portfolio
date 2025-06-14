// src/components/BackgroundAnimation.js
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-900"> {/* Grundfärg för bakgrunden */}

      {/* Blob 1: Stor och osymmetrisk form, placerad i övre vänstra hörnet */}
      <div
        className="absolute -top-40 -left-40 w-[1200px] h-[550px] bg-pink-300 mix-blend-screen filter blur-3xl opacity-70 animate-blob-1"
        style={{ borderRadius: '40% 60% 70% 30% / 60% 40% 30% 70%' }}
      ></div>

      {/* Blob 2: Placerad i övre högra området, lite mindre */}
      <div
        className="absolute -top-20 right-1 w-[700px] h-[1000px] bg-rose-400 mix-blend-screen filter blur-3xl opacity-70 animate-blob-2"
        style={{ borderRadius: '55% 45% 35% 65% / 45% 65% 55% 35%' }}
      ></div>

      {/* Blob 3: Störst, placerad nära mitten/nedre vänstra området */}
      <div
        className="absolute top-1/3 left-1/4 w-[750px] h-[700px] bg-amber-400 mix-blend-screen filter blur-3xl opacity-70 animate-blob-1 animation-delay-2000"
        style={{ borderRadius: '60% 40% 40% 60% / 70% 30% 70% 30%' }}
      ></div>

      {/* Blob 4: Placerad i nedre högra hörnet */}
      <div
        className="absolute -bottom-40 -right-40 w-[950px] h-[600px] bg-amber-400 mix-blend-screen filter blur-3xl opacity-70 animate-blob-2 animation-delay-3000"
        style={{ borderRadius: '30% 70% 50% 50% / 50% 30% 70% 50%' }}
      ></div>

      {/* Blob 5: Ny blob, placerad i nedre mitten/vänstra området, med en ny animation */}
      <div
        className="absolute bottom-1/4 left-[10%] w-[1000px] h-[900px] bg-red-800 mix-blend-screen filter blur-3xl opacity-70 animate-blob-gentle-float animation-delay-5000"
        style={{ borderRadius: '75% 25% 60% 40% / 30% 60% 40% 70%' }}
      ></div>

    </div>
  );
};

export default BackgroundAnimation;