import type {Fn, Fn2, Maybe} from '../types/utils';
import {gather} from '../function/gather';
import {identity} from '../misc/identity';
import {forwardIterator} from '../iterators/forward';

/**
 * Combines two arrays into a single array. Each new value is produced by the zipper function. In case the arrays are of
 * different lengths, the result will be the length of the longer array and the zipper function will receive `undefined`
 * for missing values.
 * @param zipper A function that combines the flowing values with argument values.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * zipWith((a, b) => a + b)([1, 2, 3])([4, 5, 6]); // [5, 7, 9]
 * zipWith(safeOperatorPlus)([1, 2, 3])([4]); // [5, 2, 3]
 * ```
 */
export function zipWith<A, I, R>(zipper: Fn2<R, Maybe<I>, Maybe<A>>): Fn<Fn<R[], readonly I[]>, readonly A[]> {
	return (argValues) => (inputValues) => {
		const length = Math.max(inputValues.length, argValues.length);
		const result: R[] = Array.from({length});
		for (let i = 0; i < length; i++) {
			result[i] = zipper(inputValues[i], argValues[i]);
		}
		return result;
	}
}

/**
 * Combines two arrays into a single array of tuples. Flowing values come first, argument values come second.
 * If the arrays are of different lengths, the result will be the length of the longer array and missing values will
 * be filled in by `undefined`.
 * @param values The values to combine with the input.
 * @returns Produces a new array of tuples.
 */
export function zip<I, A>(values: readonly A[]): Fn<[Maybe<I>, Maybe<A>][], readonly I[]> {
	return zipWith((a, b) => [a, b] as [Maybe<I>, Maybe<A>])(values);
}

export function zipObject<K extends string | number, V>(keys: readonly K[], values: readonly V[]): Record<K, V> {
	const result: Record<K, V> = {} as any;
	for (const [key, index] of forwardIterator(keys)) {
		result[key] = values[index];
	}
	return result;
}

