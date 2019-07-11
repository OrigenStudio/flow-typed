//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { TextField } from '@material-ui/core';
import type { TextFieldProps } from '@material-ui/core/TextField';

describe('imports', () => {
  it('should passes when used properly', () => {
    const TextField1 = require('@material-ui/core/TextField').default;
    const TextField0 = require('@material-ui/core/TextField/TextField')
      .default;

    <TextField1 />;
    <TextField0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <TextField
      classes={{
        root: 'str',
        marginNormal: 'str',
        marginDense: 'str',
        fullWidth: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <TextField
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <TextField
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <TextField
      autoComplete={'off'}
      autoFocus={true}
      defaultValue={'str'}
      FormHelperTextProps={{ margin: 'dense' }}
      helperText={'str'}
      InputLabelProps={{ shrink: true }}
      label={'str'}
      multiline={true}
      name={'str'}
      onChange={() => {}}
      placeholder={'str'}
      rows={5}
      rowsMax={5}
      select={true}
      SelectProps={{ native: true }}
      type={'text'}
      value={'str'}
    />;

    <TextField onChange={async () => {}} rows={'5'} rowsMax={'5'} />;

    <TextField
      autoComplete={undefined}
      autoFocus={undefined}
      defaultValue={undefined}
      FormHelperTextProps={undefined}
      helperText={undefined}
      InputLabelProps={undefined}
      label={undefined}
      multiline={undefined}
      name={undefined}
      onChange={undefined}
      placeholder={undefined}
      rows={undefined}
      rowsMax={undefined}
      select={undefined}
      SelectProps={undefined}
      type={undefined}
      value={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <TextField
      // $ExpectError: need string
      autoComplete={true}
      // $ExpectError
      autoFocus={'need boolean'}
      // $ExpectError: `__dense` is not in enum
      FormHelperTextProps={{ margin: '__dense' }}
      // $ExpectError: need react node
      helperText={() => {}}
      // $ExpectError
      InputLabelProps={{ shrink: 'need boolean' }}
      // $ExpectError: need react node
      label={() => {}}
      // $ExpectError
      multiline={'need boolean'}
      // $ExpectError: need string
      name={5}
      // $ExpectError
      onChange={'need callback'}
      // $ExpectError: need react node
      placeholder={() => {}}
      // $ExpectError: need string or number
      rows={true}
      // $ExpectError: need string or number
      rowsMax={true}
      // $ExpectError
      select={'need boolean'}
      // $ExpectError
      SelectProps={{ native: 'need boolean' }}
      // $ExpectError
      type={true}
    />;
  });
});

describe('inherited FormControl props', () => {
  it('should passes when used properly', () => {
    <TextField
      disabled={false}
      error={false}
      fullWidth={false}
      margin={'dense'}
      onBlur={() => {}}
      onFocus={() => {}}
      required={false}
      variant={'standard'}
    />;

    <TextField onBlur={async () => {}} onFocus={async () => {}} />;

    <TextField
      disabled={undefined}
      error={undefined}
      fullWidth={undefined}
      margin={undefined}
      onBlur={undefined}
      onFocus={undefined}
      required={undefined}
      // variant={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <TextField
      // $ExpectError
      disabled={'need boolean'}
      // $ExpectError
      error={'need boolean'}
      // $ExpectError
      fullWidth={'need boolean'}
      // $ExpectError: `__dense` is missing in enum
      margin={'__dense'}
      // $ExpectError: need function
      onBlur={'need function'}
      // $ExpectError: need function
      onFocus={'need function'}
      // $ExpectError
      required={'need boolean'}
      // $ExpectError: `__standard` is missing in enum
      variant={'__standard'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <TextField aria-hidden="true" />;
  });
});

describe('exported props', () => {
  it('should not be any', () => {
    declare var testProps: TextFieldProps<>;

    (testProps.type: ?string);

    // $ExpectError: check any
    (testProps.type: ?number);
  });
});
