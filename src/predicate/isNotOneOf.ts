import type {Predicate} from '../types';
import {every} from '../array';
import {isNotEqual} from './compare';

export function isNotOneOf<T>(...values: readonly T[]): Predicate<T> {
	return (searchValue) => every(isNotEqual(searchValue))(values);
}
