import React from "react";
import { BulletIcon } from "../icons";
import { SectionHeader } from "./SectionHeader";
import { Text } from "./Text";

type TSection = {
  title: string;
  body?: string;
  list?: string[];
  className?: string;
};

export const Section = ({ title, body, list, className }: TSection) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {title && <SectionHeader title={title} />}

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
