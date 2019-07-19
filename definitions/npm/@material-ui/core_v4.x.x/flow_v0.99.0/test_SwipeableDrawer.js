//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { SwipeableDrawer } from '@material-ui/core';
//import type { SwipeableDrawerProps } from '@material-ui/core/SwipeableDrawer';

describe('imports', () => {
  it('should passes when used properly', () => {
    const SwipeableDrawer1 = require('@material-ui/core/SwipeableDrawer')
      .default;
    const SwipeableDrawer0 = require('@material-ui/core/SwipeableDrawer/SwipeableDrawer')
      .default;

    <SwipeableDrawer1 onClose={() => {}} onOpen={() => {}} open={true} />;
    <SwipeableDrawer0 onClose={() => {}} onOpen={() => {}} open={true} />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <SwipeableDrawer
      disableBackdropTransition={true}
      disableDiscovery={true}
      disableSwipeToOpen={true}
      hysteresis={120}
      minFlingVelocity={100}
      onClose={() => {}}
      onOpen={() => {}}
      open={true}
      SwipeAreaProps={{ prop: 'value' }}
      swipeAreaWidth={110}
    />;

    <SwipeableDrawer
      disableBackdropTransition={undefined}
      disableDiscovery={undefined}
      disableSwipeToOpen={undefined}
      hysteresis={undefined}
      minFlingVelocity={undefined}
      onClose={() => {}}
      onOpen={() => {}}
      open={true}
      SwipeAreaProps={undefined}
      swipeAreaWidth={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <SwipeableDrawer
      // $ExpectError:
      disableBackdropTransition={'need boolean'}
      // $ExpectError:
      disableDiscovery={'need boolean'}
      // $ExpectError:
      disableSwipeToOpen={'need boolean'}
      // $ExpectError:
      hysteresis={'need number'}
      // $ExpectError:
      minFlingVelocity={'need number'}
      // $ExpectError: need ReactEventHandler
      onClose={true}
      // $ExpectError: need ReactEventHandler
      onOpen={true}
      // $ExpectError:
      open={'need number'}
      // $ExpectError: need object
      SwipeAreaProps={true}
      // $ExpectError:
      swipeAreaWidth={'need number'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <SwipeableDrawer
      onClose={() => {}}
      onOpen={() => {}}
      open={true}
      aria-hidden="true"
    />;
  });
});
