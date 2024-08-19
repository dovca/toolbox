import type {Fn, IterationCallback, ToolboxGeneratorFunction} from '../types/utils';
import {forwardIterator} from '../iterators/forward';
import {reversedIterator} from '../iterators/reversed';

type ForEachFn = <T>(callback: IterationCallback<void, T>) => Fn<readonly T[], readonly T[]>;

function forEachFactory<T>(generator: ToolboxGeneratorFunction<T>): Fn<Fn<readonly T[]>, IterationCallback<void, T>> {
	return (callback) => (values) => {
		for (const result of generator(values)) {
			callback(...result);
		}
		return values;
	}
}

/**
 * Iterates over the flowing array, calling a callback for each value.
 * @param callback The callback to call for each value.
 * @returns Produces the original array.
 * @example
 * ```typescript
 * forEach(log)([1, 2, 3]); // Logs 1, 2, 3 and returns [1, 2, 3]
 * ```
 */
export const forEach: ForEachFn = forEachFactory(forwardIterator);

/**
 * Iterates over the flowing array in reverse, calling a callback for each value.
 * @param callback The callback to call for each value.
 * @returns Produces the original array.
 * @example
 * ```typescript
 * forEachReversed(log)([1, 2, 3]); // Logs 3, 2, 1 and returns [1, 2, 3]
 * ```
 */
export const forEachReversed: ForEachFn = forEachFactory(reversedIterator);
