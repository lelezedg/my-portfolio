import React from "react";
import Link from "next/link";
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
  return (
    <Link className="flex flex-row text-end justify-end my-2" href={link}>
      {variant && (
        <Text
          variant={`${isActive ? "menu-active" : "menu-default"}`}
          className={`mr-1 ${isActive ? "text-active" : "text-gray-200"}`}
        >
          {variant === "web" ? "Web |" : "Mobile |"}
        </Text>
      )}

      <Text variant={`${isActive ? "menu-active" : "menu-default"}`}>
        {title}
      </Text>
    </Link>
  );
};
