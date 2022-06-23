import * as React from "react";

const SVGGraveyard = (props) => (
  <svg {...props}>
    <defs>
      <pattern id="hnmuo" patternUnits="userSpaceOnUse" width={20} height={20}>
        <path
          d="M 5,5l10,10M5,15l10,-10"
          fill="transparent"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={1}
          strokeLinecap="square"
          shapeRendering="auto"
        />
      </pattern>
    </defs>
    <rect
      style={{
        fill: "url(#hnmuo)",
      }}
      x={0}
      y={0}
      height={3000}
      width={3000}
    />
  </svg>
);

export default SVGGraveyard;
