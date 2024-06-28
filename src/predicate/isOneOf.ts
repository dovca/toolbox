import type {Predicate} from '../types/utils';
import {some} from '../array/some';
import {isEqual} from './compare';

export function isOneOf<T>(...values: readonly T[]): Predicate<T> {
	return (searchValue) => some(isEqual(searchValue))(values);
}
