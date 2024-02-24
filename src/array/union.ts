import type {Equalizer, Fn} from '../types';
import {removeAll, removeWith} from './remove';
import {memoize} from '../function';

export function union<T>(other: ReadonlyArray<T>): Fn<T[], ReadonlyArray<T>> {
	return (input) => input.concat(removeAll<T>(...input)(other));
}

export function unionWith<T>(comparator: Equalizer<T>): Fn<Fn<T[], ReadonlyArray<T>>, ReadonlyArray<T>> {
	const memComparator = memoize(comparator);
	return (other) => (input) => input.concat(removeWith<T>((o) => input.some((i) => memComparator(i, o)))(other));
}

export function unionBy<T, M>(mapper: Fn<M, T>): Fn<Fn<T[], ReadonlyArray<T>>, ReadonlyArray<T>> {
	const memMapper = memoize(mapper);
	return unionWith((i, o) => memMapper(i) === memMapper(o));
}
