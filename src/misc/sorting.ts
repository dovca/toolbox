import type {Fn, Numeric, Sorter} from '../types/utils';
import {identity} from './identity';

interface SortingAlgorithm {
	<T extends string | number>(): Sorter<T>;
	<T>(mapper: Fn<string, T> | Fn<number, T>): Sorter<T>;
}

function sorter<T extends string | Numeric>(a: T, b: T): number {
	if (typeof a === 'string' || typeof b === 'string') {
		if (typeof a !== 'string' || typeof b !== 'string') {
			throw new Error('Cannot compare a string with a non-string value.');
		}

		return a.localeCompare(b);
	} else {
		const numericA = a.valueOf();
		const numericB = b.valueOf();

		if (!isNaN(numericA) && !isNaN(numericB)) {
			return numericA - numericB;
		}
	}

	throw new Error('Expected both values to be either strings or coercible to numbers.');
}

function sortFactory(sort: Sorter<any> = sorter): SortingAlgorithm {
	return function <T>(mapper: Fn<string, T> | Fn<number, T> = identity): Sorter<T> {
		return (a, b) => sort(mapper(a), mapper(b));
	}
}

export const ascending: SortingAlgorithm = sortFactory();

export const descending: SortingAlgorithm = sortFactory((a, b) => sorter(b, a));
