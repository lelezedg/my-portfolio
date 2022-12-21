import React from "react";
import Link from "next/link";

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
        <h1
          className={`text-base mr-1 ${
            isActive ? "text-active font-semibold" : "text-gray font-regular"
          }`}
        >
          {variant === "web" ? "Web |" : "Mobile |"}
        </h1>
      )}

      <h1
        className={`text-base ${
          isActive ? "text-active font-semibold" : "text-body font-regular"
        }`}
      >
        {title}
      </h1>
    </Link>
  );
};
