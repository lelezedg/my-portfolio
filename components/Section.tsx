import React from "react";
import Image from "next/image";

type TSection = {
  title: string;
  body?: string;
  list?: string[];
  style?: string;
};

export const Section = ({ title, body, list, style }: TSection) => {
  const underlineIconWidth = title.length * 13;

  return (
    <div className={`flex flex-col basis-1/3 ${style}`}>
      {title && (
        <div className="mb-2 md:mb-4">
          <h1 className="font-semibold md:font-bold text-sm md:text-base">
            {title}
          </h1>
          <Image
            src="/assets/underline.svg"
            width={underlineIconWidth}
            height={6}
            alt="icon"
          />
        </div>
      )}

      {body && (
        <div className="md:mb-4">
          <h1 className="font-regular text-sm md:text-base">{body}</h1>
        </div>
      )}

      {list &&
        list?.map((item) => {
          const uniqueKey = Math.random().toString(36).substring(2, 10);
          return (
            <div className="mb-2 flex flex-row" key={uniqueKey}>
              <div className="mr-2 mt-1">
                <Image
                  src="/assets/section-icon.svg"
                  width={15}
                  height={12}
                  alt="icon"
                />
              </div>
              <h1 className="font-regular text-sm md:text-base">{item}</h1>
            </div>
          );
        })}
    </div>
  );
};
