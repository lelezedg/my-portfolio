import React from "react";
import Image from "next/image";

type TCard = {
  title: string;
  subtitle: string;
  image?: string;
  backgroundStyle?: string;
};

export const Card = ({ title, subtitle, image, backgroundStyle }: TCard) => {
  return (
    <div className="md:w-1/2 flex flex-col mx-6 mb-12">
      <div
        className={`md:h-96 h-64 mb-4 rounded flex justify-center items-center ${backgroundStyle}`}
      >
        {image && (
          <Image
            src={`/assets/${image}.png`}
            width={390}
            height={507}
            alt="1"
            quality={30}
          />
        )}
      </div>
      <h1 className="text-sm font-bold text-primary-dark mb-2">{title}</h1>
      <p className="text-sm font-regular text-body">{subtitle}</p>
    </div>
  );
};
