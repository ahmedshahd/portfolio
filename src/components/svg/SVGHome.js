import * as React from "react";

const SVGHome = (props) => (
  <svg {...props}>
    <defs>
      <pattern id="vmhpt" patternUnits="userSpaceOnUse" width={20} height={20}>
        <circle
          cx={10}
          cy={10}
          r={4}
          fill="transparent"
          stroke="rgba(0,0,0,0.13)"
          strokeWidth={1}
        />
      </pattern>
    </defs>
    <rect
      style={{
        fill: "url(#vmhpt)",
      }}
      x={0}
      y={0}
      height={3000}
      width={3000}
    />
  </svg>
);

export default SVGHome;
