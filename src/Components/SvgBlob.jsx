// src/components/SvgBlob.jsx
import React from 'react';

const SvgBlob = ({ top, left, right, bottom, className = '', animationDelay = '0s' }) => {
  const positionStyles = { top, left, right, bottom };

  return (
    <svg
      width="auto"
      height="auto"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
      style={{
        ...positionStyles,
        animationDelay: animationDelay,
      }}
    >

      <path
        d="M200 50 C300 0, 400 100, 350 200 C300 300, 100 350, 50 250 C0 150, 100 0, 200 50 Z"
        fill="url(#paint0_linear)"
        filter="url(#filter0_f)"
      />

      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F472B6" />
          <stop offset="1" stopColor="#FACC15" />
        </linearGradient>

        <filter id="filter0_f" x="-50" y="-50" width="500" height="400" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="30" />
        </filter>
      </defs>
    </svg>
  );
};

export default SvgBlob;