import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";

type TProjectFinal = {
  link?: string;
};

export const ProjectFinal = ({ link }: TProjectFinal) => {
  return (
    <div className="flex flex-col items-center">
      <Text variant="title">Thank you!</Text>
      <Text variant="body" className="mt-2 mb-8 text-center">
        Click on the button if you’d like to check the prototype!
      </Text>

      <Button label="View Prototype" />
    </div>
  );
};
