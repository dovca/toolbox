import {reduce} from './reduce';
import {operatorStar} from '../lang';

/**
 * Returns the product of all numbers in the array, that is multiplies all numbers together.
 * @returns Product of all numbers in the array.
 * @example
 * ```typescript
 * product([1, 2, 3]); // 6
 * ```
 */
export const product = reduce(operatorStar, 1);
