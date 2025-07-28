import type {Fn} from '../types/utils';

/**
 * Returns the product of all numbers in the array, that is multiplies all numbers together.
 * @param array The values to multiply.
 * @returns Product of all numbers in the array.
 * @example
 * ```typescript
 * product([1, 2, 3]); // 6
 * ```
 */
export const product: Fn<number, readonly number[]> = (array) => array.reduce((acc, val) => acc * val, 1);
