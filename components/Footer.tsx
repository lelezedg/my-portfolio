import React from "react";
import { Text } from "./Text";

export const Footer = () => {
  return (
    <div className="py-4 border-t border-gray-100 border-opacity-50 flex justify-center md:mt-8 mt-24  ">
      <Text variant="body" className="text-xs md:text-sm">
        2022 All rights reserved © Elene Zedginidze
      </Text>
    </div>
  );
};
