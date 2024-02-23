import type {Equalizer, Fn} from '../types';
import {isOneOf} from '../predicate';

export function intersection<T>(other: ReadonlyArray<T>): Fn<T[], ReadonlyArray<T>> {
	return (input) => input.filter(isOneOf(...other));
}

export function intersectionWith<T>(comparator: Equalizer<T>): Fn<Fn<T[], ReadonlyArray<T>>, ReadonlyArray<T>> {
	return (other) => (input) => input.filter((i) => other.some((o) => comparator(i, o)));
}
