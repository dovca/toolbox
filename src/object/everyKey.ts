import type {Predicate, StringKeys} from '../types/utils';
import {every} from '../array/every';
import {keys} from './keys';

/**
 * Checks if all keys of the flowing object pass the predicate.
 * @param predicate The predicate function to test each key.
 * @returns Produces `true` if all keys pass the predicate, otherwise `false`.
 */
export function everyKey<T extends object>(predicate: Predicate<StringKeys<T>>): Predicate<T> {
	return (obj) => every(predicate)(keys(obj));
}
