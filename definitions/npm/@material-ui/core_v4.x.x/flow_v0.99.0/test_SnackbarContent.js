//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { SnackbarContent } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const SnackbarContent1 = require('@material-ui/core/SnackbarContent')
      .default;
    const SnackbarContent0 = require('@material-ui/core/SnackbarContent/SnackbarContent')
      .default;

    <SnackbarContent1 />;
    <SnackbarContent0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <SnackbarContent
      classes={{
        root: 'str',
        message: 'str',
        action: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <SnackbarContent
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <SnackbarContent
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <SnackbarContent action={<span />} message={<span />} />;

    <SnackbarContent action={undefined} message={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <SnackbarContent
      // $ExpectError: need react node
      action={() => {}}
      // $ExpectError: need react node
      message={() => {}}
    />;
  });
});

describe('inherited SnackbarContentBase props', () => {
  it('should passes when used properly', () => {
    <SnackbarContent component={() => null} elevation={100} square={true} />;

    <SnackbarContent
      component={undefined}
      elevation={undefined}
      square={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <SnackbarContent
      // $ExpectError
      component={{}}
      // $ExpectError
      elevation={'needs number'}
      // $ExpectError
      square={'needs boolean'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <SnackbarContent aria-hidden="true" />;
  });
});
