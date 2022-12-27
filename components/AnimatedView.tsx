import React, { useState, useEffect, ReactNode } from "react";

type TAnimatedView = {
  children: ReactNode;
  className?: string;
  duration?: number;
};

export const AnimatedView = ({
  children,
  className,
  duration = 700,
}: TAnimatedView) => {
  const [opacity, setOpacity] = useState("opacity-0");

  useEffect(() => {
    setOpacity("opacity-100");
  }, []);

  return (
    <div
      className={`transition-opacity ease-in duration-${duration} ${opacity} ${className}`}
    >
      {children}
    </div>
  );
};
