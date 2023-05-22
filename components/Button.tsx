import { useRouter } from "next/router";
import React, { useState, useEffect, ReactNode } from "react";
import { Text } from "./Text";

type TButton = {
  label?: string;
  className?: string;
  onClick?: Function;
  children?: ReactNode;
};

export const Button = ({
  label,
  className,
  onClick = () => {},
  children,
}: TButton) => {
  const { pathname } = useRouter();
  const [color, setColor] = useState("");

  useEffect(() => {
    switch (pathname) {
      case "/learn-first-aid-app":
        setColor("bg-blue-200 hover:bg-blue-300 transition duration-300");
        break;
      case "/gluten-free-finder-app":
        setColor("bg-green-200 hover:bg-green-300 transition duration-300");
        break;
      case "/reduce-food-waste-app":
        setColor("bg-orange-200 hover:bg-orange-300 transition duration-300");
        break;
      case "/fashion-designer-portfolio":
        setColor("bg-purple-200 hover:bg-purple-300 transition duration-300");
        break;
      case "/task-management-app":
        setColor("bg-glacier-200 hover:bg-glacier-300 transition duration-300");
        break;
      case "/cleaning-company-website":
        setColor("bg-pink-200 hover:bg-pink-300 transition duration-300");
        break;
    }
  }, [pathname]);

  return (
    <button
      onClick={() => onClick()}
      className={`mb-24 rounded-lg ${color} ${className}`}
    >
      <div className="flex transition py-3 px-6 duration-500 md:hover:scale-105">
        {label && (
          <Text variant="body" className="text-gray-400">
            {label}
          </Text>
        )}
      </div>
      {children}
    </button>
  );
};
