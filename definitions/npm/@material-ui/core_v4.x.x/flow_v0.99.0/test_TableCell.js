//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { TableCell } from '@material-ui/core';
//import type { TableCellProps } from '@material-ui/core/TableCell';

describe('imports', () => {
  it('should passes when used properly', () => {
    const TableCell1 = require('@material-ui/core/TableCell').default;
    const TableCell0 = require('@material-ui/core/TableCell/TableCell').default;

    <TableCell1 />;
    <TableCell0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <TableCell
      classes={{
        root: 'str',
        head: 'str',
        body: 'str',
        footer: 'str',
        alignLeft: 'str',
        alignCenter: 'str',
        alignRight: 'str',
        alignJustify: 'str',
        sizeSmall: 'str',
        paddingCheckbox: 'str',
        paddingNone: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <TableCell
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <TableCell
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <TableCell
      align={'left'}
      component={'div'}
      padding={'none'}
      size={'small'}
      sortDirection={'asc'}
      variant={'body'}
    />;

    <TableCell
      align={undefined}
      component={undefined}
      padding={undefined}
      size={undefined}
      sortDirection={undefined}
      variant={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <TableCell
      // $ExpectError: need 'inherit' | 'left' | 'center' | 'right' | 'justify'
      align={'other'}
      // $ExpectError: need React$ElementType
      component={true}
      // $ExpectError: need 'default' | 'checkbox' | 'none'
      padding={'other'}
      // $ExpectError: need 'small' | 'medium'
      size={'other'}
      // $ExpectError: need 'asc' | 'desc' | false
      sortDirection={true}
      // $ExpectError: need 'head' | 'body' | 'footer'
      variant={'other'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <TableCell aria-hidden="true" />;
  });
});
