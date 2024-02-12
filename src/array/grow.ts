import type {Fn} from '../types';
import {last} from './last';

/**
 * Appends a new value to the flowing array, created by transforming the last value.
 * If the array is empty, the function does nothing.
 * @param mapper The function to transform the last value with.
 * @returns Produces a new array.
 */
export function grow<T>(mapper: Fn<T>): Fn<T[]> {
	return (values) => values.length
		? [...values, mapper(last(values)!)]
		: values;
}
