import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Text } from "./Text";

type TMenuItemVariant = "web" | "mobile";

type TMenuItem = {
  title: string;
  variant?: TMenuItemVariant;
  isActive?: boolean;
  link?: string;
};

export const MenuItem = ({
  title,
  variant,
  isActive = false,
  link = "/",
}: TMenuItem) => {
  const { pathname } = useRouter();
  const [color, setColor] = useState("");

  useEffect(() => {
    switch (pathname) {
      case "/learn-first-aid-app":
        setColor("text-blue-400");
        break;
      case "/gluten-free-finder-app":
        setColor("text-green-400");
        break;
    }
  }, []);

  return (
    <Link className="flex flex-row text-end justify-end my-2" href={link}>
      {variant && (
        <Text
          variant={`${isActive ? "menu-active" : "menu-default"}`}
          className={`mr-1 ${isActive ? color : "text-gray-200"}`}
        >
          {variant === "web" ? "Web |" : "Mobile |"}
        </Text>
      )}

      <Text
        variant={`${isActive ? "menu-active" : "menu-default"}`}
        className={`${isActive && color}`}
      >
        {title}
      </Text>
    </Link>
  );
};
