import type {Fn, Fn3, IterationCallback} from '../types';
import {forwardIterator} from './utils';

/**
 * Maps a flowing array.
 * @param mapper The function to transform each value with.
 * @returns Produces a new array of mapped values.
 */
export function map<I, O = I>(mapper: IterationCallback<O, I>): Fn<O[], ReadonlyArray<I>> {
	return (values) => values.map(mapper);
}

/**
 * Maps a flowing array.
 * @param mapper The function to transform each value with. The first parameter is a
 * couple of the current input value and the previous input value.
 * @returns Produces a new array of mapped values.
 */
export function mapWithPrevInput<I, O = I>(mapper: Fn3<O, [I, I | undefined], number, ReadonlyArray<I>>): Fn<O[], ReadonlyArray<I>> {
	return (values) => {
		const result: O[] = Array.from({length: values.length});
		let previous: I | undefined = undefined;
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
export function mapWithPrevOutput<I, O = I>(mapper: Fn3<O, [I, O | undefined], number, ReadonlyArray<I>>): Fn<O[], ReadonlyArray<I>> {
	return (values) => {
		const result: O[] = Array.from({length: values.length});
		let previous: O | undefined = undefined;
		for (const [value, index, array] of forwardIterator(values)) {
			previous = result[index] = mapper([value, previous], index, array);
		}
		return result;
	};
}
