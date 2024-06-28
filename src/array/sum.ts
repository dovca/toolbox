import {reduce} from './reduce';
import {operatorPlus} from '../lang/operators';
import type {Fn} from '../types/utils';

/**
 * Returns the sum of all elements in the array.
 * @param array The values to sum.
 * @returns The sum of all elements in the array.
 * @example
 * ```typescript
 * sum([1, 2, 3, 4]); // 10
 * ```
 */
export const sum: Fn<number, readonly number[]> = reduce(operatorPlus, 0);
