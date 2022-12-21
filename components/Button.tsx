import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Text } from "./Text";

type TButton = {
  label: string;
  className?: string;
  onClick?: Function;
};

export const Button = ({ label, className, onClick = () => {} }: TButton) => {
  const { pathname } = useRouter();
  const [color, setColor] = useState("");

  useEffect(() => {
    switch (pathname) {
      case "/learn-first-aid-app":
        setColor("bg-blue-200");
        break;
      case "/gluten-free-finder-app":
        setColor("bg-green-200");
        break;
    }
  }, []);

  return (
    <button
      onClick={() => onClick()}
      className={`"mb-24 py-3 px-6 rounded-lg ${color} ${className}`}
    >
      <Text variant="body" className="text-gray-400">
        {label}
      </Text>
    </button>
  );
};
