import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";

type TProjectFinal = {
  navigationURL?: string;
  label?: string;
  buttonLabel?: string;
};

export const ProjectFinal = ({
  navigationURL = "/",
  label = "Click on the button if you’d like to check the prototype!",
  buttonLabel = "View Prototype",
}: TProjectFinal) => {
  return (
    <div className="flex flex-col items-center">
      <Text variant="title">Thank you!</Text>
      <Text variant="body" className="mt-2 mb-8 text-center">
        {label}
      </Text>

      <Button
        label={buttonLabel}
        onClick={() => window.open(navigationURL, "_blank")}
      />
    </div>
  );
};
