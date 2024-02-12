import {gather, type Gather2} from '../function';
import type {Fn, Fn2} from '../types';

/**
 * Combines two arrays into a single array. Each new value is produced by the zipper function.
 * @param zipper A function that combines the flowing values with argument values.
 * @returns Produces a new array.
 */
export function zipWith<A, I, R>(zipper: Fn2<R, I | undefined, A | undefined>): Fn<Fn<R[], I[]>, A[]> {
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
export const zip: <I, A>(values: A[]) => (input: I[]) => [I | undefined, A | undefined][] = zipWith(gather as Gather2);

