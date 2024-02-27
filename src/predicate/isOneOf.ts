import type {Predicate} from '../types';
import {isEqual} from './compare';
import {some} from '../array';

export function isOneOf<T>(...values: readonly T[]): Predicate<T> {
	return (searchValue) => some(isEqual(searchValue))(values);
}
