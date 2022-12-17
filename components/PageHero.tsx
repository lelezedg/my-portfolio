import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

type TPageHero = {
  title: string;
  subtile: string;
  coverImage: string;
  buttonLabel: string;
  navigationURL?: string;
};

export const PageHero = ({
  title,
  subtile,
  coverImage,
  navigationURL,
  buttonLabel,
}: TPageHero) => {
  const router = useRouter();

  return (
    <div className="flex flex-grow flex-row mb-32">
      <div className="flex flex-col self-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 font-regular text-lg mb-8">{subtile}</p>
        <button
          onClick={() => router.push(`/${navigationURL}`)}
          className="self-start mb-24 py-5 px-12 bg-blue-200 rounded-lg"
        >
          {buttonLabel}
        </button>
      </div>
      <div>
        <Image
          src={`/assets/${coverImage}.png`}
          width={900}
          height={500}
          alt="_"
        />
      </div>
    </div>
  );
};
