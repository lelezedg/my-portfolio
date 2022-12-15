import React from "react";

type TMenuItemVariant = "web" | "mobile";

type TMenuItem = {
  title: string;
  variant?: TMenuItemVariant;
  isActive?: boolean;
};

export const MenuItem = ({ title, variant, isActive = false }: TMenuItem) => {
  return (
    <div className="flex flex-row text-end justify-end my-2">
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
    </div>
  );
};
