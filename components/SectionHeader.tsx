import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { SectionTitleIcon } from "../icons";
import { Text } from "./Text";

type TSectionHeader = {
  title: string;
  className?: string;
};

export const SectionHeader = ({ title, className }: TSectionHeader) => {
  const titleIconWidth = title.length * 7 + 36;
  const { pathname } = useRouter();
  const [iconColor, setIconColor] = useState("");

  useEffect(() => {
    switch (pathname) {
      case "/learn-first-aid-app":
        setIconColor("text-blue-200");
        break;
      case "/gluten-free-finder-app":
        setIconColor("text-green-200");
        break;
      case "/reduce-food-waste-app":
        setIconColor("text-orange-200");
        break;
      case "/fashion-designer-portfolio":
        setIconColor("text-purple-200");
        break;
      case "/task-management-app":
        setIconColor("text-glacier-200");
        break;
      case "/cleaning-company-website":
        setIconColor("text-pink-200");
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <div className={`flex flex-col ${className}`}>
      {title && (
        <div className="mb-2 md:mb-4 flex flex-col items-start ">
          <Text variant="subtitle">
            {title}
            <div className={`${iconColor} pt-1`}>
              <SectionTitleIcon width={titleIconWidth} />
            </div>
          </Text>
        </div>
      )}
    </div>
  );
};
