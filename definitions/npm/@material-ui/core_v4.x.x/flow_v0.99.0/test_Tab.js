//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Tab } from '@material-ui/core';
//import type { TabProps } from '@material-ui/core/Tab';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Tab1 = require('@material-ui/core/Tab').default;
    const Tab0 = require('@material-ui/core/Tab/Tab').default;

    <Tab1 />;
    <Tab0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Tab
      classes={{
        root: 'str',
        labelIcon: 'str',
        textColorInherit: 'str',
        textColorPrimary: 'str',
        textColorSecondary: 'str',
        selected: 'str',
        disabled: 'str',
        fullWidth: 'str',
        wrapped: 'str',
        wrapper: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Tab
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Tab
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Tab
      disableFocusRipple={true}
      fullWidth={true}
      icon={'string'}
      label={<span />}
      onChange={() => {}}
      onClick={() => {}}
      selected={true}
      textColor={'primary'}
      value={null}
      wrapped={true}
    />;

    <Tab
      disableFocusRipple={undefined}
      fullWidth={undefined}
      icon={undefined}
      label={undefined}
      onChange={undefined}
      onClick={undefined}
      selected={undefined}
      textColor={undefined}
      value={undefined}
      wrapped={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Tab
      // $ExpectError
      disableFocusRipple={'need boolean'}
      // $ExpectError
      fullWidth={'need boolean'}
      // $ExpectError: need String | React$Element
      icon={25}
      // $ExpectError: need React$Node
      label={() =>{}}
      // $ExpectError: need (event: React$ChangeEvent<{ checked: boolean }>, value: any)
      onChange={({ checked: true }, { value: any })}
      // $ExpectError
      onClick={'need (event: SyntheticEvent<>) => mixed'}
      // $ExpectError
      selected={'need boolean'}
      // $ExpectError: need String
      textColor={() => {}}
      // $ExpectError
      wrapped={'need boolean'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Tab aria-hidden="true" />;
  });
});
