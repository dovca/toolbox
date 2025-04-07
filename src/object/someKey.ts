import type {Predicate, StringKeys} from '../types/utils';
import {some} from '../array/some';
import {keys} from './keys';

/**
 * Checks if any of the keys of the flowing object pass the predicate.
 * @param predicate The predicate function to test each key.
 * @returns Produces `true` if any of the keys pass the predicate, otherwise `false`.
 */
export function someKey<T extends object>(predicate: Predicate<StringKeys<T>>): Predicate<T> {
	return (obj) => some(predicate)(keys(obj));
}
