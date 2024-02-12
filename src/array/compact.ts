import {filter} from './filter';
import {isTruthy} from '../predicate/isTruthy';
import type {Falsy} from '../types';

/**
 * Removes all falsy values from the given array.
 * @param values The array to compact.
 * @returns The compacted array.
 */
export const compact: <T>(values: ReadonlyArray<T>) => Exclude<T, Falsy>[] = filter(isTruthy);
