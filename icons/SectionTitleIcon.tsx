import React from "react";

export const SectionTitleIcon = ({ width = 100, height = 6 }: any) => {
  return (
    <>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        <path
          d="M1 4.81457C72.9304 3.8414 235.433 2.4789 310 4.81457C232.21 3.61223 49.7909 -1.44376 1 3.61223C83.4925 2.52473 259.81 1.00207 305.143 3.61223"
          stroke="currentColor"
          strokeWidth="1.04167"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
