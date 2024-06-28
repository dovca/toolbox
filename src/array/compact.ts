import {filter} from './filter';
import {isTruthy} from '../predicate/isTruthy';
import type {Falsy} from '../types/utils';

/**
 * Removes all falsy values from the given array.
 * @param values The array to compact.
 * @returns Returns the compacted array.
 * @example
 * ```typescript
 * compact([1, '', 3, 'false', false]); // => [1, 3, 'false']
 * ```
 */
export const compact: <T>(values: readonly T[]) => Exclude<T, Falsy>[] = filter(isTruthy);
