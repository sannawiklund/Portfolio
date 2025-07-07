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
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d1899b" />         {/* Kallrosa */}
          <stop offset="30%" stopColor="#e8a6d7" />        {/* Lavendel */}
          <stop offset="55%" stopColor="#B2556F" />        {/* Körsbärsrosa */}
          <stop offset="75%" stopColor="#F2C877" />        {/* Gulorange */}

        </linearGradient>

        {/*Blur-filter */}
        <filter id="filter0_f" x="-100" y="-100" width="600" height="500" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="50" />
        </filter>
      </defs>

      {/* Blob med både färg och blur */}
      <g filter="url(#filter0_f)">
        <path
          d="M200 50 C300 0, 400 100, 350 200 C300 300, 100 350, 50 250 C0 150, 100 0, 200 50 Z"
          fill="url(#paint0_linear)"
        />
      </g>
    </svg>

  );
};

export default SvgBlob;