import {operatorStar} from '../lang/operators';
import type {Fn} from '../types/utils';
import {reduce} from './reduce';

/**
 * Returns the product of all numbers in the array, that is multiplies all numbers together.
 * @returns Product of all numbers in the array.
 * @example
 * ```typescript
 * product([1, 2, 3]); // 6
 * ```
 */
export const product: Fn<number, readonly number[]> = reduce(operatorStar, 1);
