import type {Fn, Sorter} from '../../types';

export function descending<T extends string | number>(): Sorter<T>;
export function descending<T>(mapper: Fn<string, T> | Fn<number, T>): Sorter<T>;
export function descending<T>(mapper?: Fn<string, T> | Fn<number, T>): Sorter<T> {
	return (a, b) => {
		const mappedA = mapper?.(a) ?? a;
		const mappedB = mapper?.(b) ?? b;

		if (typeof mappedA === 'number' && typeof mappedB === 'number') {
			return mappedB - mappedA;
		} else if (typeof mappedA === 'string' && typeof mappedB === 'string') {
			return mappedB.localeCompare(mappedA);
		}

		throw new Error('descending: Expected both values to be either strings or numbers.');
	};
}
