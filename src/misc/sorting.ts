import type {Fn, Sorter} from '../types';
import {identity} from './identity';

interface SortingAlgorithm {
	<T extends string | number>(): Sorter<T>;
	<T>(mapper: Fn<string, T> | Fn<number, T>): Sorter<T>;
}

function sorter<T extends string | number>(a: T, b: T): number {
	if (typeof a === 'number' && typeof b === 'number') {
		return a - b;
	} else if (typeof a === 'string' && typeof b === 'string') {
		return a.localeCompare(b);
	}

	throw new Error('Expected both values to be either strings or numbers.');
}

function sortFactory(sort: Sorter<any> = sorter): SortingAlgorithm {
	return function <T>(mapper: Fn<string, T> | Fn<number, T> = identity): Sorter<T> {
		return (a, b) => sort(mapper(a), mapper(b));
	}
}

export const ascending: SortingAlgorithm = sortFactory();

export const descending: SortingAlgorithm = sortFactory((a, b) => sorter(b, a));
