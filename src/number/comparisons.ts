import {comparator, isEqual} from '../predicate';
import {negate} from '../function';
import {parity} from './arithmetic';
import {operatorGreaterThan, operatorGreaterThanOrEqual, operatorLessThan, operatorLessThanOrEqual} from '../lang';
import type {Fn, Predicate} from '../types';

export const isZero: Predicate<number> = isEqual(0);
export const isGreaterThan: Fn<Predicate<number>, number> = comparator(operatorGreaterThan);
export const isGreaterThanOrEqual: Fn<Predicate<number>, number> = comparator(operatorGreaterThanOrEqual);
export const isLessThan: Fn<Predicate<number>, number> = comparator(operatorLessThan);
export const isLessThanOrEqual: Fn<Predicate<number>, number> = comparator(operatorLessThanOrEqual);
export const isPositive: Predicate<number> = isGreaterThan(0);
export const isNegative: Predicate<number> = isLessThan(0);
export const isNonPositive: Predicate<number> = isLessThanOrEqual(0);
export const isNonNegative: Predicate<number> = isGreaterThanOrEqual(0);
export const isOdd: Predicate<number> = (value: number) => parity(value) === 1;
export const isEven: Predicate<number> = negate(isOdd);
export const isInteger: Predicate<number> = Number.isInteger;
export const isFinite: Predicate<number> = Number.isFinite;
