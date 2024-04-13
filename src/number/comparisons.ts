import {comparator, isEqual} from '../predicate';
import {negate} from '../function';
import {modulo} from './arithmetic';

export const isZero = isEqual(0);
export const isGreaterThan = comparator<number>((input, value) => input > value);
export const isGreaterThanOrEqual = comparator<number>((input, value) => input >= value);
export const isLessThan = comparator<number>((input, value) => input < value);
export const isLessThanOrEqual = comparator<number>((input, value) => input <= value);
export const isPositive = isGreaterThan(0);
export const isNegative = isLessThan(0);
export const isNonPositive = isLessThanOrEqual(0);
export const isNonNegative = isGreaterThanOrEqual(0);
export const isOdd = (value: number) => modulo(2)(value) === 1;
export const isEven = negate(isOdd);
