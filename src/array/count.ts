import type {Fn} from '../types';
import {identity} from '../misc';

export function countWith<T extends string | number>(
	mapper: Fn<string | number, T>,
): Fn<Record<string | number, number>, readonly T[]> {
	return (values) => values.reduce((acc, value) => {
		const mapped = mapper(value);
		acc[mapped] = (acc[mapped] ?? 0) + 1;
		return acc;
	}, {} as Record<string | number, number>);
}

export function count<T extends string | number>(values: readonly T[]) {
	return countWith(identity)(values);
}
