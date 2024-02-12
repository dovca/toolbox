import {reduce} from './reduce';

/**
 * Returns the sum of all elements in the array.
 * @param array The array to sum.
 * @returns The sum of all elements in the array.
 */
export const sum = reduce<number>((a, b) => a + b, 0);
