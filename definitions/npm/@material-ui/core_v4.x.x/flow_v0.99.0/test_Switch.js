//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Switch } from '@material-ui/core';
import type { SwitchProps } from '@material-ui/core/Switch';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Switch1 = require('@material-ui/core/Switch').default;
    const Switch0 = require('@material-ui/core/Switch/Switch').default;

    <Switch1 />;
    <Switch0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Switch
      classes={{
        root: 'str',
        checked: 'str',
        disabled: 'str',
        input: 'str',
        colorPrimary: 'str',
        colorSecondary: 'str',
        edgeStart: 'str',
        edgeEnd: 'str',
        switchBase: 'str',
        colorPrimary: 'str',
        colorSecondary: 'str',
        thumb: 'str',
        track: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Switch
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Switch
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Switch
      checkedIcon={<i />}
      color={'primary'}
      icon={<i />}
      edge={'start'}
    />;

    <Switch
      checkedIcon={undefined}
      color={undefined}
      icon={undefined}
      edge={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Switch
      // $ExpectError: need react node
      checkedIcon={() => null}
      // $ExpectError: `__primary` is missing in enum
      color={'__primary'}
      // $ExpectError: need react node
      icon={() => null}
      // $ExpectError: `__start` is missing in enum
      edge={'__start'}
    />;
  });
});

describe('inherited SwitchBase props', () => {
  it('should passes when used properly', () => {
    <Switch
      checkedIcon={<i />}
      icon={<i />}
      autoFocus={false}
      checked={false}
      defaultChecked={false}
      disabled={false}
      disableRipple={false}
      inputProps={{}}
      inputRef={React.createRef()}
      name={'name'}
      onChange={() => {}}
      readOnly={false}
      required={false}
      tabIndex={0}
      value={'any'}
    />;

    <Switch
      onChange={async (event, checked) => {
        (checked: boolean);

        // $ExpectError: check any
        (checked: string);
      }}
    />;

    <Switch
      checkedIcon={undefined}
      icon={undefined}
      autoFocus={undefined}
      checked={undefined}
      defaultChecked={undefined}
      disabled={undefined}
      disableRipple={undefined}
      inputProps={undefined}
      inputRef={undefined}
      name={undefined}
      onChange={undefined}
      readOnly={undefined}
      required={undefined}
      tabIndex={undefined}
      value={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Switch
      // $ExpectError: need react node
      checkedIcon={{}}
      // $ExpectError: need react node
      icon={{}}
      // $ExpectError
      autoFocus={'need boolean'}
      // $ExpectError
      checked={'need boolean'}
      // $ExpectError
      defaultChecked={'need boolean'}
      // $ExpectError
      disabled={'need boolean'}
      // $ExpectError
      disableRipple={'need boolean'}
      // $ExpectError: need object
      inputProps={123}
      // $ExpectError: need react ref
      inputRef={{}}
      // $ExpectError: need string
      name={123}
      // $ExpectError: need function
      onChange={123}
      // $ExpectError
      readOnly={'need boolean'}
      // $ExpectError
      required={'need boolean'}
      // $ExpectError: need number
      tabIndex={'0'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Switch aria-hidden="true" />;
  });
});

describe('exported props', () => {
  it("shouldn't be any", () => {
    declare var testProps: SwitchProps;

    (testProps.checkedIcon: ?React.Node);

    // $ExpectError: check any
    (testProps.checkedIcon: ?() => React.Node);
  });
});
