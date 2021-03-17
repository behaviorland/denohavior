import { Feature } from "./types/feature.ts";

type Parse = (feature: string) => Feature | Error;

const featureNodeName = "Feature";

const parse: Parse = (feature) => {
  const shortText = feature.split(":")[1].trim();

  return !shortText ?  new Error(
    "Invalid Feature node: Short text missing!",
  ) : {
    shortText,
  };
};

export { parse };
