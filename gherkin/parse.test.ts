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
    // Given
    const expected: Feature = {
      shortText: "Guess the word",
    };

    const feature = "Feature: Guess the word";

    // When
    const actual = parse(feature);

    // Then
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
    // Given
    const expected: Feature = {
      shortText: "Guess the word",
    };

    const feature = "      Feature: Guess the word";

    // When
    const actual = parse(feature);

    // Then
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
    // Given
    const expected: Error = new Error(
      "Invalid Feature node: Short text missing!",
    );
    const feature = "Feature:";

    // When
    const actual = parse(feature);

    // Then
    assertEquals(actual, expected);
  },
);
