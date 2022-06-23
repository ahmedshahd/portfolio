import * as React from "react";

const SVGBio = (props) => (
  <svg {...props}>
    <defs>
      <pattern id="dbyyz" patternUnits="userSpaceOnUse" width={20} height={20}>
        <path
          d="M 5,5l10,10M15,5l10,-10 M5,15l-10,10M15,25l10,-10 M-5,5l10,-10"
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
        fill: "url(#dbyyz)",
      }}
      x={0}
      y={0}
      height={3000}
      width={3000}
    />
  </svg>
);

export default SVGBio;
