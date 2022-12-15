import React from "react";

type TCard = {
  title: string;
  subtitle: string;
};

export const Card = ({ title, subtitle }: TCard) => {
  return (
    <div className="md:w-1/2 flex flex-col mx-6 mb-12">
      <div className="md:h-96 h-64 mb-4 rounded bg-gradient-to-r from-blue-100 to-blue-200"></div>
      <h1 className="text-sm font-bold text-primary-dark mb-2">{title}</h1>
      <p className="text-sm font-regular text-body">{subtitle}</p>
    </div>
  );
};
