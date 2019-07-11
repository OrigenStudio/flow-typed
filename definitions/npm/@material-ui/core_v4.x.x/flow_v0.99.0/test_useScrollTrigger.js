// @flow
import * as React from 'react';
import { it, describe } from "flow-typed-test";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

describe("useScrollTrigger", () => {
  it("should passed when use properly", () => {
    const C = () => {
      const trigger1: boolean = useScrollTrigger();
      const trigger2: boolean = useScrollTrigger({
        disableHysteresis: true,
      });
      const trigger3: boolean = useScrollTrigger({
        threshold: 200,
      });
      return null;
    };
    <C />;
  });

  it("should raises an error when invalid args provided", () => {
    const C = () => {
      // $ExpectError
      useScrollTrigger('expects object');
      // $ExpectError
      useScrollTrigger({ disableHysteresis: 'expects boolean' });
      // $ExpectError
      useScrollTrigger({ threshold: 'expects number' });
      // $ExpectError: `options` enum does not include `unknownProperty`
      useScrollTrigger({ unknownProperty: '' });
      return null;
    };
    <C />;
  });
});
