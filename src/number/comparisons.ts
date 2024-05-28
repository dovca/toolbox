import {comparator, isEqual} from '../predicate';
import {negate} from '../function';
import {parity} from './arithmetic';
import {operatorGreaterThan, operatorGreaterThanOrEqual, operatorLessThan, operatorLessThanOrEqual} from '../lang';

export const isZero = isEqual(0);
export const isGreaterThan = comparator(operatorGreaterThan);
export const isGreaterThanOrEqual = comparator(operatorGreaterThanOrEqual);
export const isLessThan = comparator(operatorLessThan);
export const isLessThanOrEqual = comparator(operatorLessThanOrEqual);
export const isPositive = isGreaterThan(0);
export const isNegative = isLessThan(0);
export const isNonPositive = isLessThanOrEqual(0);
export const isNonNegative = isGreaterThanOrEqual(0);
export const isOdd = (value: number) => parity(value) === 1;
export const isEven = negate(isOdd);
export const isInteger = Number.isInteger;
export const isFinite = Number.isFinite;
