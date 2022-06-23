import * as React from "react";

const SVGProjects = (props) => (
  <svg {...props}>
    <defs>
      <pattern id="nlkdz" patternUnits="userSpaceOnUse" width={20} height={20}>
        <path
          d="M 5,15l5,-10l5,10"
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
        fill: "url(#nlkdz)",
      }}
      x={0}
      y={0}
      height={3000}
      width={3000}
    />
  </svg>
);

export default SVGProjects;
