import type {Fn, Fn2, Maybe} from '../types';

export function binaryOperation<T>(operation: Fn2<T>): (num?: Maybe<T>) => Fn<T> {
	return (b) => (a) => operation(a, b ?? a);
}

export function unsafeBinaryOperation<T extends number>(operation: Fn2<T, Maybe<T>>): Fn<Fn<T, Maybe<T>>, Maybe<T>> {
	return (b) => (a) => operation(a, b);
}
