//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { StepLabel } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const StepLabel1 = require('@material-ui/core/StepLabel').default;
    const StepLabel0 = require('@material-ui/core/StepLabel/StepLabel').default;

    <StepLabel1 children={<span />} />;
    <StepLabel0 children={<span />} />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <StepLabel
      children={<span />}
      classes={{
        root: 'str',
        horizontal: 'str',
        vertical: 'str',
        active: 'str',
        completed: 'str',
        alternativeLabel: 'str',
        error: 'str',
        disabled: 'str',
        label: 'str',
        iconContainer: 'str',
        labelContainer: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <StepLabel
      children={<span />}
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <StepLabel
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
    <StepLabel
      active={true}
      alternativeLabel={true}
      children={<span />}
      completed={true}
      disabled={true}
      error={true}
      icon={50}
      last={true}
      optional={<span />}
      orientation={'horizontal'}
      StepIconComponent={'div'}
      StepIconProps={{ active: true }}
    />;

    <StepLabel
      active={undefined}
      alternativeLabel={undefined}
      children={<span />}
      completed={undefined}
      disabled={undefined}
      error={undefined}
      icon={undefined}
      last={undefined}
      optional={undefined}
      orientation={undefined}
      StepIconComponent={undefined}
      StepIconProps={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <StepLabel
      // $ExpectError
      active={'needs boolean'}
      // $ExpectError
      alternativeLabel={'needs boolean'}
      // $ExpectError: needs React node
      children={() => {}}
      // $ExpectError
      completed={'needs boolean'}
      // $ExpectError
      disabled={'needs boolean'}
      // $ExpectError
      error={'needs boolean'}
      // $ExpectError: needs React node
      icon={() => {}}
      // $ExpectError
      last={'needs boolean'}
      // $ExpectError: needs React node
      optional={() => {}}
      // $ExpectError: needs 'horizontal' | 'vertical'
      orientation={100}
      // $ExpectError: needs React$ElementType
      StepIconComponent={() => {}}
      // $ExpectError: needs 'StepIconProps`
      StepIconProps={{ active: 'need boolean' }}
    />;

    <StepLabel
      children={<span />}
      // $ExpectError: `str` is not in `orientation`
      orientation={'str'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <StepLabel children={<span />} aria-hidden="true" />;
  });
});
