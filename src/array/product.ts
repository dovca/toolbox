import {reduce} from './reduce';
import {operatorStar} from '../lang';
import type {Fn} from '../types';

/**
 * Returns the product of all numbers in the array, that is multiplies all numbers together.
 * @returns Product of all numbers in the array.
 * @example
 * ```typescript
 * product([1, 2, 3]); // 6
 * ```
 */
export const product: Fn<number, readonly number[]> = reduce(operatorStar, 1);
