// @flow
import * as React from 'react';
import { it, describe } from "flow-typed-test";
import useMediaQuery from "@material-ui/core/useMediaQuery";

describe("useMediaQuery", () => {
  it("should passed when use properly", () => {
    const C = () => {
      const matches1: boolean = useMediaQuery('@media (min-width: 600px)');
      const matches2: boolean = useMediaQuery('@media (min-width: 600px)', {});
      const matches3: boolean = useMediaQuery('@media (min-width: 600px)', {
        defaultMatches: true,
      });
      const matches4: boolean = useMediaQuery('@media (min-width: 600px)', {
        noSsr: true,
      });
      const matches5: boolean = useMediaQuery('@media (min-width: 600px)', {
        ssrMatchMedia: (query: string) => ({
          matches: true,
        }),
      });
      return null;
    };
    <C />;
  });

  it("should raises an error when invalid args provided", () => {
    const C = () => {
      // $ExpectError: first parameter is mandatory
      useMediaQuery();
      // $ExpectError: first parameter must be a string
      useMediaQuery(123);
      // $ExpectError: first parameter must be a string
      useMediaQuery({});
      // $ExpectError: `options` enum does not include `unknownProperty`
      useMediaQuery('@media (min-width: 600px)', { unknownProperty: '' });
      return null;
    };
    <C />;
  });
});
