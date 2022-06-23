import * as React from "react";

const SVGPodcasts = (props) => (
  <svg {...props}>
    <defs>
      <pattern id="xdzes" patternUnits="userSpaceOnUse" width={20} height={20}>
        <path
          d="M 5 5 l 10 0 l 0 10 l -10 0 Z"
          fill="transparent"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth={1}
          strokeLinecap="square"
          shapeRendering="auto"
        />
      </pattern>
    </defs>
    <rect
      style={{
        fill: "url(#xdzes)",
      }}
      x={0}
      y={0}
      height={3000}
      width={3000}
    />
  </svg>
);

export default SVGPodcasts;
