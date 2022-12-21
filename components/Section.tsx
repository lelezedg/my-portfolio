import React from "react";
import { BulletIcon, SectionTitleIcon } from "../icons";
import { Text } from "./Text";

type TSection = {
  title: string;
  body?: string;
  list?: string[];
  className?: string;
};

export const Section = ({ title, body, list, className }: TSection) => {
  const titleIconWidth = title.length * 7 + 36;

  return (
    <div className={`flex flex-col ${className}`}>
      {title && (
        <div className="mb-2 md:mb-4 flex flex-col items-start ">
          <Text variant="subtitle">
            {title}
            <div className="text-blue-200 pt-1">
              <SectionTitleIcon width={titleIconWidth} />
            </div>
          </Text>
        </div>
      )}

      {body && (
        <div className="md:mb-4 md:-ml-12">
          <Text variant="body" className="md:mx-12">
            {body}
          </Text>
        </div>
      )}

      {list &&
        list?.map((item) => {
          const uniqueKey = Math.random().toString(36).substring(2, 10);
          return (
            <div className="mb-2 flex flex-row" key={uniqueKey}>
              <div className="mr-2 mt-2">
                <BulletIcon />
              </div>

              <div className="md:-ml-12">
                <Text variant="body" className="md:mx-12">
                  {item}
                </Text>
              </div>
            </div>
          );
        })}
    </div>
  );
};
