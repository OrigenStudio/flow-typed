//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Table } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Table1 = require('@material-ui/core/Table').default;
    const Table0 = require('@material-ui/core/Table/Table').default;

    <Table1 />;
    <Table0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Table
      classes={{
        root: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Table
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Table
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Table component={'div'} padding={'none'} size={'small'} />;

    <Table component={undefined} padding={undefined} size={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Table
      // $ExpectError: React$ElementType
      component={true}
      // $ExpectError: need 'default' | 'checkbox' | 'none'
      padding={true}
      // $ExpectError: need 'small' | 'medium'
      size={true}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Table aria-hidden="true" />;
  });
});
