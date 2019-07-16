//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { StepButton } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const StepButton1 = require('@material-ui/core/StepButton').default;
    const StepButton0 = require('@material-ui/core/StepButton/StepButton')
      .default;

    <StepButton1 />;
    <StepButton0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <StepButton
      classes={{
        root: 'str',
        vertical: 'str',
        touchRipple: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <StepButton
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <StepButton
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <StepButton
      active={true}
      alternativeLabel={true}
      completed={true}
      disabled={true}
      icon={'StepButtonIcon'}
      last={true}
      optional={<span />}
      orientation={'horizontal'}
    />;

    <StepButton
      active={undefined}
      alternativeLabel={undefined}
      completed={undefined}
      disabled={undefined}
      icon={undefined}
      last={undefined}
      optional={undefined}
      orientation={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <StepButton
      // $ExpectError
      active={'needs boolean'}
      // $ExpectError
      alternativeLabel={'needs boolean'}
      // $ExpectError
      completed={'needs boolean'}
      // $ExpectError
      disabled={'needs boolean'}
      // $ExpectError needs React$ElementType | String | Number | Null
      icon={{}}
      // $ExpectError
      last={'needs boolean'}
      // $ExpectError: needs React node
      optional={() => {}}
      // $ExpectError needs 'horizontal' | 'vertical'
      orientation={100}
    />;

    <StepButton
      // $ExpectError: object is not in `icon`
      icon={{}}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <StepButton aria-hidden="true" />;
  });
});
