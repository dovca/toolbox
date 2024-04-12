import type {Equalizer, Fn} from '../types';
import {removeAll, removeWith} from './remove';
import {memoize} from '../function';
import {sameValueZero} from '../utils';

export function union<T>(other: readonly T[]): Fn<T[], readonly T[]> {
	return (input) => input.concat(removeAll<T>(...input)(other));
}

export function unionWith<T>(comparator: Equalizer<T>): Fn<Fn<T[], readonly T[]>, readonly T[]> {
	const memComparator = memoize(comparator);
	return (other) => (input) => input.concat(removeWith<T>((o) => input.some((i) => memComparator(i, o)))(other));
}

export function unionBy<T, M>(mapper: Fn<M, T>): Fn<Fn<T[], readonly T[]>, readonly T[]> {
	const memMapper = memoize(mapper);
	return unionWith((i, o) => sameValueZero(memMapper(i), memMapper(o)));
}
