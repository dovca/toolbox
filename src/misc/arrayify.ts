import {flat} from '../array';

/**
 * Convert a value to an array if it's not already an array.
 * @param input
 */
export const arrayify = <T>(input: T | T[]) => flat<(T | T[])[], 1>()([input]);
