import * as React from "react";

const SVGWriting = (props) => (
  <svg {...props}>
    <defs>
      <pattern id="osjsb" patternUnits="userSpaceOnUse" width={20} height={20}>
        <circle
          cx={10}
          cy={10}
          r={1}
          fill="rgba(0,0,0,0.3)"
          stroke="#343434"
          strokeWidth={0}
        />
      </pattern>
    </defs>
    <rect
      style={{
        fill: "url(#osjsb)",
      }}
      x={0}
      y={0}
      height={3000}
      width={3000}
    />
  </svg>
);

export default SVGWriting;
