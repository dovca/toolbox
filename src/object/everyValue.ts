import type {Predicate, Values} from '../types/utils';
import {values} from './values';
import {every} from '../array/every';

/**
 * Checks if all values of the flowing object pass the predicate.
 * @param predicate The predicate function to test each value.
 * @returns Produces `true` if all values pass the predicate, otherwise `false`.
 */
export function everyValue<T extends object>(predicate: Predicate<Values<T>>): Predicate<T> {
	return (obj) => every(predicate)(values(obj));
}
