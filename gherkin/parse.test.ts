import { assertEquals, test } from "../devDependencies.ts";
import { Feature } from "./types/feature.ts";
import { parse } from "./parse.ts";

test(
  `
    Given a feature
    When parse the feature
    Then a feature node is returned containing the feature information
`,
  () => {
    const expected: Feature = {
      shortText: "Guess the word",
    };

    const feature = "Feature: Guess the word";

    const actual = parse(feature);

    assertEquals(actual, expected);
  },
);

test(
  `
    Given a feature with bad indentation
    When parse the feature
    Then a feature node is returned containing the feature information
`,
  () => {
    const expected: Feature = {
      shortText: "Guess the word",
    };

    const feature = "      Feature: Guess the word";

    const actual = parse(feature);

    assertEquals(actual, expected);
  },
);

test(
  `
    Given a feature without short text
    When parse the feature
    Then an error is returned 
`,
  () => {
    const expected: Error = new Error(
      "Invalid Feature node: Short text missing!",
    );
    const feature = "Feature:";

    const actual = parse(feature);

    assertEquals(actual, expected);
  },
);
