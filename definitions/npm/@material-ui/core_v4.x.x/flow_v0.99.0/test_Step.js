//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Step } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Step1 = require('@material-ui/core/Step').default;
    const Step0 = require('@material-ui/core/Step/Step').default;

    <Step1 />;
    <Step0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Step
      classes={{
        root: 'str',
        horizontal: 'str',
        vertical: 'str',
        alternativeLabel: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Step
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Step
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Step
      active={true}
      alternativeLabel={true}
      children={<span />}
      completed={true}
      connector={<span />}
      disabled={true}
      index={100}
      last={true}
      orientation={'horizontal'}
    />;

    <Step
      active={undefined}
      alternativeLabel={undefined}
      children={<span />}
      completed={undefined}
      connector={undefined}
      disabled={undefined}
      index={undefined}
      last={undefined}
      orientation={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Step
      // $ExpectError
      active={'needs boolean'}
      // $ExpectError
      alternativeLabel={'needs boolean'}
      // $ExpectError: needs react node
      children={() => {}}
      // $ExpectError
      completed={'needs boolean'}
      // $ExpectError: needs react node
      connector={() => {}}
      // $ExpectError
      disabled={'needs boolean'}
      // $ExpectError
      index={'needs number'}
      // $ExpectError
      last={'needs boolean'}
      // $ExpectError needs 'horizontal' | 'vertical'
      orientation={100}
    />;

    <Step
      children={<span />}
      // $ExpectError: `__left` is not in enum
      orientation={'__horizontal'}
    />;

    <Step
      children={<span />}
      // $ExpectError: `str` is not in `orientation`
      orientation={'str'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Step children={<span />} aria-hidden="true" />;
  });
});
