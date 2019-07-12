// @flow
import * as React from 'react';
import { it, describe } from 'flow-typed-test';
import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import type {
  ClassNameMap,
  ClassKeyOfStyles$ClassKey,
  ClassKeyOfStyles$Rules,
  ClassKeyOfStyles$RulesCallback,
  WithStyles$ClassKey,
  WithStyles$Rules,
  WithStyles$RulesCallback,
  WithStyles,
} from '@material-ui/core/styles/withStyles';
import type { Theme } from '@material-ui/core/styles/createMuiTheme';

type CK1 = 'root' | 'class1A' | 'class1B';

type CK2 = 'root' | 'class2A' | 'class2B';

type P1 = {
  customProp: string,
  classes: ClassNameMap<CK1>,
};

const C = ({ customProp, classes }: P1) => (
  <div className={classes.root}>{customProp}</div>
);

describe('withStyles', () => {
  it('should passed when use properly', () => {
    withStyles<CK1, *, P1>({ root: {} })(C);
    withStyles<CK1, *, P1>({ root: () => ({}) })(C);
    withStyles<CK1, *, P1>({
      root: ({ customProp }) => {
        (customProp: string);
        return {};
      },
    })(C);
    withStyles<CK1, *, P1>({
      root: {
        display: 'flex',
        '& .inner-selector': { display: 'block' },
      },
    })(C);

    withStyles<CK1, *, P1>((theme: Theme) => ({ root: {} }))(C);
    withStyles<CK1, *, P1>((theme: Theme) => ({ root: () => ({}) }))(C);
    withStyles<CK1, *, P1>((theme: Theme) => ({
      root: ({ customProp }) => {
        (customProp: string);
        return {};
      },
    }))(C);
    withStyles<CK1, *, P1>((theme: Theme) => ({
      root: ({ customProp }) => ({
        display: 'flex',
        '& .inner-selector': { display: 'block' },
      }),
    }))(C);
  });

  it('should raises an error when invalid args provided', () => {
    // $ExpectError: `style` argument is mandatory
    withStyles<CK1, *, P1>()(C);
    // $ExpectError: `unknownClassName` is incompatible with enum
    withStyles<CK1, *, P1>({ unknownClassName: {} })(C);
    // $ExpectError: cannot provide an empty style rule
    withStyles<CK1, *, P1>({ root: undefined })(C);
    // $ExpectError: style rule must be an object or a function
    withStyles<CK1, *, P1>({ root: 'expects object or function' })(C);
    // $ExpectError: callable style rule must return CSS properties
    withStyles<CK1, *, P1>({ root: () => {} })(C);
    // $ExpectError: callable style rule must return valid CSS properties
    withStyles<CK1, *, P1>({ root: () => 'expects object' })(C);
    // $ExpectError: `unknownProp`is missing in `P`
    withStyles<CK1, *, P1>({
      root: ({ unknownProp }) => {
        (unknownProp: string);
        return {};
      },
    })(C);

    // $ExpectError: `unknownClassName` is incompatible with enum
    withStyles<CK1, *, P1>((theme: Theme) => ({ unknownClassName: {} }))(C);
    // $ExpectError: cannot provide an empty style rule
    withStyles<CK1, *, P1>((theme: Theme) => ({ root: undefined }))(C);
    // $ExpectError: style rule must be an object or a function
    withStyles<CK1, *, P1>((theme: Theme) => ({
      root: 'expects object or function',
    }))(C);
    // $ExpectError: callable style rule must return CSS properties
    withStyles<CK1, *, P1>((theme: Theme) => ({ root: () => {} }))(C);
    // $ExpectError: callable style rule must return valid CSS properties
    withStyles<CK1, *, P1>((theme: Theme) => ({
      root: () => 'expects object',
    }))(C);
    // $ExpectError: `unknownProp`is missing in `P`
    withStyles<CK1, *, P1>((theme: Theme) => ({
      root: ({ unknownProp }) => {
        (unknownProp: string);
        return {};
      },
    }))(C);
  });

  it('should export utility types', () => {
    const ck1Rules = { root: {}, class1A: {}, class1B: {} };
    const ck1Rules_partial = { root: {}, class1A: {} };
    const ck1RulesCallback = (theme: Theme) => ({
      root: {},
      class1A: {},
      class1B: {},
    });
    const ck1RulesCallback_partial = (theme: Theme) => ({
      root: {},
      class1A: {},
    });

    declare type CK1Rules = typeof ck1Rules;
    declare type CK1Rules_partial = typeof ck1Rules_partial;
    declare type CK1RulesCallback = typeof ck1RulesCallback;
    declare type CK1RulesCallback_partial = typeof ck1RulesCallback_partial;

    it('should export ClassKeyOfStyles types', () => {
      declare var ck_1: ClassKeyOfStyles$ClassKey<CK1>;
      (ck_1: CK1);
      // $ExpectError: incompatible class keys
      (ck_1: CK2);
      declare var ck_2: ClassKeyOfStyles$Rules<CK1Rules>;
      (ck_2: CK1);
      // $ExpectError: incompatible class keys
      (ck_2: CK2);
      declare var ck_3: ClassKeyOfStyles$RulesCallback<CK1RulesCallback>;
      (ck_3: CK1);
      // $ExpectError: incompatible class keys
      (ck_3: CK2);
    });

    it('should export WithStyles$ClassKey', () => {
      declare var ws$ck_1: WithStyles$ClassKey<CK1>;
      (ws$ck_1.classes: ClassNameMap<CK1>);
      // $ExpectError: incompatible class keys
      (ws$ck_1.classes: ClassNameMap<CK2>);
      declare var ws$ck_2: WithStyles$ClassKey<'root' | 'class1A', true>;
      // $ExpectError: incompatible class keys
      (ws$ck_2.classes: ClassNameMap<CK1>);
    });
    it('should export WithStyles$Rules', () => {
      declare var ws$r_1: WithStyles$Rules<CK1Rules>;
      (ws$r_1.classes: ClassNameMap<CK1>);
      // $ExpectError: incompatible class keys
      (ws$r_1.classes: ClassNameMap<CK2>);
      // $ExpectError: `theme` is missing in props
      (ws$r_1.theme: Theme);
      declare var ws$r_2: WithStyles$Rules<CK1Rules_partial, true>;
      // $ExpectError: missing class key
      (ws$r_2.classes: ClassNameMap<CK1>);
      (ws$r_2.theme: Theme);
    });
    it('should export WithStyles$RulesCallback', () => {
      declare var ws$rc_1: WithStyles$RulesCallback<CK1RulesCallback>;
      (ws$rc_1.classes: ClassNameMap<CK1>);
      // $ExpectError: incompatible class keys
      (ws$rc_1.classes: ClassNameMap<CK2>);
      // $ExpectError: `theme` is missing in props
      (ws$rc_1.theme: Theme);
      declare var ws$rc_2: WithStyles$RulesCallback<
        CK1RulesCallback_partial,
        true
      >;
      // $ExpectError: missing class key
      (ws$rc_2.classes: ClassNameMap<CK1>);
      (ws$rc_2.theme: Theme);
    });

    it('should export WithStyles', () => {
      declare var ws_1: WithStyles<CK1>;
      (ws_1.classes: ClassNameMap<CK1>);
      // $ExpectError: `theme` is missing in props
      (ws_1.theme: Theme);
      declare var ws_2: WithStyles<CK2, true>;
      // $ExpectError: incompatible class keys
      (ws_2.classes: ClassNameMap<CK1>);
      (ws_2.theme: Theme);

      declare var ws_3: WithStyles<CK1Rules>;
      (ws_3.classes: ClassNameMap<CK1>);
      // $ExpectError: incompatible class keys
      (ws_3.classes: ClassNameMap<CK2>);
      // $ExpectError: `theme` is missing in props
      (ws_3.theme: Theme);
      declare var ws_4: WithStyles<CK1Rules_partial, true>;
      // $ExpectError: missing class key
      (ws_4.classes: ClassNameMap<CK1>);
      (ws_4.theme: Theme);

      // declare var ws_5: WithStyles<CK1RulesCallback>;
      // (ws_5.classes: ClassNameMap<CK1>);
      // // $-disabled-ExpectError: incompatible class keys
      // (ws_5.classes: ClassNameMap<CK2>);
      // (ws_5.classes: ClassNameMap<string>);
      // // $-disabled-ExpectError: `theme` is missing in props
      // (ws_5.theme: Theme);
      // declare var ws_6: WithStyles<CK1RulesCallback_partial, true>;
      // // $-disabled-ExpectError: missing class key
      // (ws_6.classes: ClassNameMap<CK1>);
      // (ws_6.theme: Theme);
    });
  });
});
