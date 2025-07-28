import type {Predicate, Values} from '../types/utils';
import {values} from './values';

/**
 * Checks if any of the values of the flowing object pass the predicate.
 * @param predicate The predicate function to test each value.
 * @returns Produces `true` if any of the values pass the predicate, otherwise `false`.
 */
export function someValue<T extends object>(predicate: Predicate<Values<T>>): Predicate<T> {
	return (obj) => values(obj).some(predicate);
}
