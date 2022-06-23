import * as React from "react";

const SVGCode = (props) => (
  <svg {...props}>
    <defs>
      <pattern id="ufqzu" patternUnits="userSpaceOnUse" width={30} height={30}>
        <path
          d="M 0 7.5 l 7.5 0 l 0 -7.5 M 22.5 30 l 0 -7.5 l 7.5 0 M 7.5 15 l 0 7.5 l 7.5 0 M 15 7.5 l 7.5 0 l 0 7.5"
          fill="transparent"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth={1}
          strokeLinecap="square"
          shapeRendering="auto"
        />
      </pattern>
    </defs>
    <rect
      style={{
        fill: "url(#ufqzu)",
      }}
      x={0}
      y={0}
      height={3000}
      width={3000}
    />
  </svg>
);

export default SVGCode;
