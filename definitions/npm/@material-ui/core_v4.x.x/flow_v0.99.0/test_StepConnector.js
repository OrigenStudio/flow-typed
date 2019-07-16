//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { StepConnector } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const StepConnector1 = require('@material-ui/core/StepConnector').default;
    const StepConnector0 = require('@material-ui/core/StepConnector/StepConnector')
      .default;

    <StepConnector1 />;
    <StepConnector0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <StepConnector
      classes={{
        root: 'str',
        horizontal: 'str',
        vertical: 'str',
        alternativeLabel: 'str',
        active: 'str',
        completed: 'str',
        disabled: 'str',
        line: 'str',
        lineHorizontal: 'str',
        lineVertical: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <StepConnector
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <StepConnector
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <StepConnector
      active={true}
      alternativeLabel={true}
      completed={true}
      disabled={true}
      index={100}
      orientation={'horizontal'}
    />;

    <StepConnector
      active={undefined}
      alternativeLabel={undefined}
      completed={undefined}
      disabled={undefined}
      index={undefined}
      orientation={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <StepConnector
      // $ExpectError
      active={'needs boolean'}
      // $ExpectError
      alternativeLabel={'needs boolean'}
      // $ExpectError
      completed={'needs boolean'}
      // $ExpectError
      disabled={'needs boolean'}
      // $ExpectError
      index={'needs number'}
      // $ExpectError needs 'horizontal' | 'vertical'
      orientation={100}
    />;

    <StepConnector
      // $ExpectError: `str` is not in `orientation`
      orientation={'str'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <StepConnector aria-hidden="true" />;
  });
});
