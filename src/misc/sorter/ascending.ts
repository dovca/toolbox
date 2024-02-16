import type {Fn, Sorter} from '../../types';

export function ascending<T extends string | number>(): Sorter<T>;
export function ascending<T>(mapper: Fn<string, T> | Fn<number, T>): Sorter<T>;
export function ascending<T>(mapper?: Fn<string, T> | Fn<number, T>): Sorter<T> {
	return (a, b) => {
		const mappedA = mapper?.(a) ?? a;
		const mappedB = mapper?.(b) ?? b;

		if (typeof mappedA === 'number' && typeof mappedB === 'number') {
			return mappedA - mappedB;
		} else if (typeof mappedA === 'string' && typeof mappedB === 'string') {
			return mappedA.localeCompare(mappedB);
		}

		throw new Error('ascending: Expected both values to be either strings or numbers.');
	};
}
