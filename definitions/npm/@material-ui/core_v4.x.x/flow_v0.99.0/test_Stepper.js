//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Stepper } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Stepper1 = require('@material-ui/core/Stepper').default;
    const Stepper0 = require('@material-ui/core/Stepper/Stepper').default;

    <Stepper1 children={<span />} />;
    <Stepper0 children={<span />} />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Stepper
      children={<span />}
      classes={{
        root: 'str',
        horizontal: 'str',
        vertical: 'str',
        alternativeLabel: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Stepper
      children={<span />}
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Stepper
      children={<span />}
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Stepper
      activeStep={100}
      alternativeLabel={true}
      connector={<span />}
      nonLinear={true}
      orientation={'horizontal'}
      children={<span />}
    />;

    <Stepper
      activeStep={undefined}
      alternativeLabel={undefined}
      connector={undefined}
      nonLinear={undefined}
      orientation={undefined}
      children={<span />}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: `children` is required
    <Stepper />;

    <Stepper
      // $ExpectError: `children` is mandatory
      children={undefined}
    />;

    <Stepper
      // $ExpectError
      activeStep={'needs number'}
      // $ExpectError
      alternativeLabel={'needs boolean'}
      // $ExpectError: needs React node
      children={() => {}}
      // $ExpectError: needs React node
      connector={() => {}}
      // $ExpectError
      nonLinear={'needs boolean'}
      // $ExpectError needs 'horizontal' | 'vertical'
      orientation={100}
    />;

    <Stepper
      children={<span />}
      // $ExpectError: `__left` is not in enum
      orientation={'__horizontal'}
    />;

    <Stepper
      children={<span />}
      // $ExpectError: `str` is not in `orientation`
      orientation={'str'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Stepper children={<span />} aria-hidden="true" />;
  });
});
