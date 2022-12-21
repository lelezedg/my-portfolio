import React from "react";
import { BulletIcon, SectionTitleIcon } from "../icons";

type TSection = {
  title: string;
  body?: string;
  list?: string[];
  style?: string;
};

export const Section = ({ title, body, list, style }: TSection) => {
  const titleIconWidth = title.length * 7 + 36;

  return (
    <div className={`flex flex-col basis-1/3 ${style}`}>
      {title && (
        <div className="mb-2 md:mb-4 flex flex-col items-start ">
          <h1 className="font-semibold md:font-bold text-sm md:text-base">
            {title}

            <div className="text-blue-200 pt-1">
              <SectionTitleIcon width={titleIconWidth} />
            </div>
          </h1>
        </div>
      )}

      {body && (
        <div className="md:mb-4 md:-ml-8">
          <h1 className="font-regular text-sm md:text-base md:mx-8">{body}</h1>
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
              <h1 className="font-regular text-sm md:text-base">{item}</h1>
            </div>
          );
        })}
    </div>
  );
};
