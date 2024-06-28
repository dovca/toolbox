import type {IsEmpty} from '../types/predicate';

export function isEmpty<T>(value: T): IsEmpty<T> {
	return (
		typeof value === 'undefined'
			|| value === ''
			|| value === null
			|| (Array.isArray(value) && !value.length)
			|| (typeof value === 'object' && !Object.keys(value).length)
	) as IsEmpty<T>;
}
