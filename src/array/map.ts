import type {Fn, Fn3, IterationCallback, Maybe} from '../types';
import {forwardIterator} from './utils';

/**
 * Maps a flowing array.
 * @param mapper The function to transform each value with.
 * @returns Produces a new array of mapped values.
 */
export function map<I, O = I>(mapper: IterationCallback<O, I>): Fn<O[], readonly I[]> {
	return (values) => values.map(mapper);
}

/**
 * Maps a flowing array.
 * @param mapper The function to transform each value with. The first parameter is a
 * couple of the current input value and the previous input value.
 * @returns Produces a new array of mapped values.
 */
export function mapWithPrevInput<I, O = I>(mapper: Fn3<O, [I, Maybe<I>], number, readonly I[]>): Fn<O[], readonly I[]> {
	return (values) => {
		const result: O[] = Array.from({length: values.length});
		let previous: Maybe<I> = undefined;
		for (const [value, index, array] of forwardIterator(values)) {
			result[index] = mapper([value, previous], index, array);
			previous = value;
		}
		return result;
	};
}

/**
 * Maps a flowing array.
 * @param mapper The function to transform each value with. The first parameter is a
 * couple of the current input value and the previous output value.
 * @returns Produces a new array of mapped values.
 */
export function mapWithPrevOutput<I, O = I>(mapper: Fn3<O, [I, Maybe<O>], number, readonly I[]>): Fn<O[], readonly I[]> {
	return (values) => {
		const result: O[] = Array.from({length: values.length});
		let previous: Maybe<O> = undefined;
		for (const [value, index, array] of forwardIterator(values)) {
			previous = result[index] = mapper([value, previous], index, array);
		}
		return result;
	};
}
