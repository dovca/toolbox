import type {Predicate} from '../types/utils';
import {every} from '../array/every';
import {isNotEqual} from './compare';

export function isNotOneOf<T>(...values: readonly T[]): Predicate<T> {
	return (searchValue) => every(isNotEqual(searchValue))(values);
}
