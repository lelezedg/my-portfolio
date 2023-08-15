import React from "react";

type TTypography =
  | "headline"
  | "title"
  | "subtitle"
  | "body"
  | "menu-default"
  | "menu-active";

type TText = {
  children: React.ReactNode;
  variant: TTypography;
  className?: string;
};

export const Text = ({ children, variant, className }: TText) => {
  switch (variant) {
    case "headline":
      return (
        <h1 className={`font-bold text-2xl text-gray-400 ${className}`}>
          {children}
        </h1>
      );

    case "title":
      return (
        <h3 className={`font-semibold text-xl text-gray-400 ${className}`}>
          {children}
        </h3>
      );

    case "subtitle":
      return (
        <h4 className={`font-medium text-base text-gray-400 ${className}`}>
          {children}
        </h4>
      );

    case "body":
      return (
        <p className={`font-normal text-sm text-gray-300 ${className}`}>
          {children}
        </p>
      );

    case "menu-default":
      return (
        <p className={`font-normal text-base text-gray-400 ${className}`}>
          {children}
        </p>
      );

    case "menu-active":
      return <p className={`font-medium text-base ${className}`}>{children}</p>;

    default:
      return <p className={className}>{children}</p>;
  }
};
