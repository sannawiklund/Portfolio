
import React from 'react';

const SvgFlux = ({ 
  width = "100%", 
  height = "100%", 
  viewBox = "0 0 100% 100%",
  gradientId = "ffflux-gradient",
  filterId = "ffflux-filter",
  stopColor1 = "hsl(0, 0%, 100%)",
  stopColor2 = "hsl(334, 87%, 47%)",
  gradientRotate = "150",
  baseFrequency = "0.005 0.003",
  stdDeviation = "20 0",
  className = "",
  style = {}
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnsSvgjs="http://svgjs.dev/svgjs"
      viewBox={viewBox}
      width={width} 
      height={height}
      className={className}
      style={style}
    >
      <defs>
        <linearGradient
          gradientTransform={`rotate(${gradientRotate}, 0.5, 0.5)`}
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id={gradientId}
        >
          <stop stopColor={stopColor1} stopOpacity="1" offset="0%"></stop>
          <stop stopColor={stopColor2} stopOpacity="1" offset="100%"></stop>
        </linearGradient>
        <filter
          id={filterId}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves="2"
            seed="2"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feGaussianBlur
            stdDeviation={stdDeviation}
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            edgeMode="duplicate"
            result="blur"
          ></feGaussianBlur>
          <feBlend
            mode="color-dodge"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            in2="blur"
            result="blend"
          ></feBlend>
        </filter>
      </defs>
      <rect
        width="100%"
        height="100%" 
        fill={`url(#${gradientId})`}
        filter={`url(#${filterId})`}
      ></rect>
    </svg>
  );
};

export default SvgFlux; 