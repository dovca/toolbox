import type {Fn, Predicate} from '../types';
import {lastLoose} from './last';
import {identity} from '../misc';

/**
 * Appends a new value to the flowing array, created by transforming the last value.
 * If the array is empty, the function does nothing.
 * @param mapper The function to transform the last value with.
 * @returns Produces a new array.
 */
export function grow<T>(mapper?: Fn<T>): Fn<T[], readonly T[]>;
export function grow<T, U = T>(mapper: Fn<U, T>): Fn<(T | U)[], readonly T[]>;
export function grow<T>(mapper: Fn<T> = identity<T>): Fn<T[], readonly T[]> {
	return (values) => values.length
		? [...values, mapper(lastLoose(values))]
		: [];
}

export function growWhile<T>(predicate: Predicate<T>, mapper: Fn<T> = identity): Fn<T[], readonly T[]> {
	return (values) => {
		if (!values.length) {
			return [];
		}

		const result = [...values];
		let lastValue = lastLoose(values);

		while (predicate(lastValue)) {
			result.push(lastValue = mapper(lastValue));
		}

		return result;
	};
}
