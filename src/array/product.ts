import {reduce} from './reduce';

/**
 * Returns the product of all numbers in the array, that is multiplies all numbers together.
 */
export const product = reduce<number>((a, b) => a * b, 1);
