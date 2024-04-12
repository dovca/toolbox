import type {Equalizer, Fn} from '../types';
import {isOneOf} from '../predicate';
import {memoize} from '../function';
import {sameValueZero} from '../utils';

export function intersection<T>(other: readonly T[]): Fn<T[], readonly T[]> {
	return (input) => input.filter(isOneOf(...other));
}

export function intersectionWith<T>(comparator: Equalizer<T>): Fn<Fn<T[], readonly T[]>, readonly T[]> {
	const memComparator = memoize(comparator);
	return (other) => (input) => input.filter((i) => other.some((o) => memComparator(i, o)));
}

export function intersectionBy<T, M>(mapper: Fn<M, T>): Fn<Fn<T[], readonly T[]>, readonly T[]> {
	const memMapper = memoize(mapper);
	return intersectionWith((i, o) => sameValueZero(memMapper(i), memMapper(o)));
}
