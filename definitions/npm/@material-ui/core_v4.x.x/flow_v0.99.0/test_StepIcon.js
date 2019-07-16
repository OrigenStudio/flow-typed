//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { StepIcon } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const StepIcon1 = require('@material-ui/core/StepIcon').default;
    const StepIcon0 = require('@material-ui/core/StepIcon/StepIcon').default;

    <StepIcon1 icon={<span />} />;
    <StepIcon0 icon={<span />} />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <StepIcon
      icon={<span />}
      classes={{
        root: 'str',
        text: 'str',
        active: 'str',
        completed: 'str',
        error: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <StepIcon
      icon={<span />}
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <StepIcon
      icon={<span />}
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <StepIcon active={true} completed={true} error={true} icon={<span />} />;

    <StepIcon
      active={undefined}
      completed={undefined}
      error={undefined}
      icon={<span />}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <StepIcon
      // $ExpectError
      active={'needs boolean'}
      // $ExpectError
      completed={'needs boolean'}
      // $ExpectError
      error={'needs boolean'}
      // $ExpectError: needs react node
      icon={() => {}}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <StepIcon icon={<span />} aria-hidden="true" />;
  });
});
