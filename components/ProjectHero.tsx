import React from "react";
import Image from "next/image";
import { Text } from "./Text";
import { Button } from "./Button";

type TProjectHero = {
  title: string;
  subtile: string;
  coverImage: string;
  buttonLabel: string;
  navigationURL?: string;
};

export const ProjectHero = ({
  title,
  subtile,
  coverImage,
  navigationURL = "/",
  buttonLabel,
}: TProjectHero) => {
  return (
    <div className="flex flex-grow md:flex-row flex-col-reverse md:mb-32">
      <div className="flex flex-col md:justify-start md:items-start items-center">
        <Text variant="headline">{title}</Text>
        <Text variant="body" className="mt-2 mb-8 text-center md:text-start">
          {subtile}
        </Text>

        <div>
          <Button
            onClick={() => window.open(navigationURL, "_blank")}
            className="mb-24"
            label={buttonLabel}
          />
        </div>
      </div>

      <div className="md:justify-end items-center pb-8 ">
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
