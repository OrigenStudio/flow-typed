//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Snackbar } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Snackbar1 = require('@material-ui/core/Snackbar').default;
    const Snackbar0 = require('@material-ui/core/Snackbar/Snackbar').default;

    <Snackbar1 open={true} />;
    <Snackbar0 open={true} />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Snackbar
      open={true}
      classes={{
        root: 'str',
        anchorOriginTopCenter: 'str',
        anchorOriginBottomCenter: 'str',
        anchorOriginTopRight: 'str',
        anchorOriginBottomRight: 'str',
        anchorOriginTopLeft: 'str',
        anchorOriginBottomLeft: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Snackbar
      open={true}
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Snackbar
      open={true}
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Snackbar
      action={<span />}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      autoHideDuration={1000}
      ClickAwayListenerProps={{ onClickAway: () => {} }}
      ContentProps={{ elevation: 1, 'aria-describedby': 'message-id' }}
      disableWindowBlurListener={true}
      message={<span id={'message-id'} />}
      onClose={() => {}}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      open={true}
      resumeHideDuration={100}
      TransitionComponent={() => <span />}
      transitionDuration={100}
      TransitionProps={{ onEntering: () => {} }}
    />;

    <Snackbar
      open={true}
      autoHideDuration={null}
    />;

    <Snackbar
      action={undefined}
      anchorOrigin={undefined}
      autoHideDuration={undefined}
      ClickAwayListenerProps={undefined}
      ContentProps={undefined}
      disableWindowBlurListener={undefined}
      message={undefined}
      onClose={undefined}
      onMouseEnter={undefined}
      onMouseLeave={undefined}
      open={true}
      resumeHideDuration={undefined}
      TransitionComponent={undefined}
      transitionDuration={undefined}
      TransitionProps={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Snackbar
      // $ExpectError: needs react node
      action={() => {}}
      // $ExpectError
      anchorOrigin={'needs object'}
      // $ExpectError
      autoHideDuration={'needs number'}
      // $ExpectError
      ClickAwayListenerProps={'needs object'}
      // $ExpectError
      ContentProps={'needs object'}
      // $ExpectError
      disableWindowBlurListener={'needs boolean'}
      // $ExpectError: needs react node
      message={() => {}}
      // $ExpectError
      onClose={'needs function'}
      // $ExpectError
      onMouseEnter={'needs function'}
      // $ExpectError
      onMouseLeave={'needs function'}
      // $ExpectError
      open={'needs boolean'}
      // $ExpectError
      resumeHideDuration={'needs number'}
      // $ExpectError: needs react element
      TransitionComponent={{}}
      // $ExpectError
      transitionDuration={'needs number'}
      // $ExpectError
      TransitionProps={'needs object'}
    />;

    // $ExpectError: missing `open`
    <Snackbar />;

    <Snackbar
      open={true}
      // $ExpectError: `__left` is not in enum
      anchorOrigin={{ horizontal: '__left', vertical: 'top' }}
      // $ExpectError
      ContentProps={{ elevation: 'needs number' }}
      // $ExpectError
      TransitionProps={{ onEntering: 'needs function' }}
    />;

    <Snackbar
      open={true}
      // $ExpectError: `__top` is not in enum
      anchorOrigin={{ horizontal: 'left', vertical: '__top' }}
    />;

    <Snackbar
      open={true}
      // $ExpectError: `unknownOption` is not in `SnackbarOrigin`
      anchorOrigin={{ horizontal: 'left', vertical: 'top', unknown: 'str' }}
    />;

    <Snackbar
      open={true}
      // $ExpectError: missing `horizontal`
      anchorOrigin={{ vertical: 'top' }}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Snackbar open={true} aria-hidden="true" />;
  });
});
