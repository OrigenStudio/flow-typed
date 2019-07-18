//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { StepContent } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const StepContent1 = require('@material-ui/core/StepContent').default;
    const StepContent0 = require('@material-ui/core/StepContent/StepContent')
      .default;

    <StepContent1 children={<span />} />;
    <StepContent0 children={<span />} />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <StepContent
      children={<span />}
      classes={{
        root: 'str',
        last: 'str',
        transition: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <StepContent
      children={<span />}
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <StepContent
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
    <StepContent
      active={true}
      alternativeLabel={true}
      children={<span />}
      completed={true}
      last={true}
      optional={true}
      orientation={'horizontal'}
      TransitionComponent={() => null}
      transitionDuration={{ enter: 1 }}
      TransitionProps={{ mountOnEnter: false }}
    />;

    <StepContent children={<span />} transitionDuration={'auto'} />;

    <StepContent
      active={undefined}
      alternativeLabel={undefined}
      children={<span />}
      completed={undefined}
      last={undefined}
      optional={undefined}
      orientation={undefined}
      TransitionComponent={undefined}
      transitionDuration={undefined}
      TransitionProps={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <StepContent
      // $ExpectError
      active={'needs boolean'}
      // $ExpectError
      alternativeLabel={'needs boolean'}
      // $ExpectError: needs React node
      children={() => {}}
      // $ExpectError
      completed={'needs boolean'}
      // $ExpectError
      last={'needs boolean'}
      // $ExpectError: needs boolean
      optional={() => {}}
      // $ExpectError: needs 'horizontal' | 'vertical'
      orientation={100}
      // $ExpectError
      TransitionComponent={{ need: 'React component' }}
      // $ExpectError
      TransitionProps={{ mountOnEnter: 'need boolean' }}
    />;

    // $ExpectError: `enter` must be number
    <StepContent transitionDuration={{ enter: '69' }} />;

    // $ExpectError: `exit` must be number
    <StepContent transitionDuration={{ exit: '69' }} />;

    // $ExpectError:  exact type test, `exit___` missing
    <StepContent transitionDuration={{ exit___: 69 }} />;

    <StepContent
      children={<span />}
      // $ExpectError: `str` is not in `orientation`
      orientation={'str'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <StepContent children={<span />} aria-hidden="true" />;
  });
});
