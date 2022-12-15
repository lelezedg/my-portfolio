import React from "react";

type TCard = {
  title: string;
  subtitle: string;
};

export const Card = ({ title, subtitle }: TCard) => {
  return (
    <div className="w-1/2 flex flex-col mx-6">
      <div className="bg-blue-400 h-96 mb-4 rounded"></div>
      <h1 className="text-sm font-bold text-primary-dark mb-2">{title}</h1>
      <p className="text-sm font-regular text-body">{subtitle}</p>
    </div>
  );
};
