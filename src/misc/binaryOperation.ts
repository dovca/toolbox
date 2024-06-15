import type {Fn2, Maybe} from '../types';

export type BinaryOperation<T = number> = (b?: Maybe<T>) => (a: T) => T;

export type UnsafeBinaryOperation<T = number> = (b: Maybe<T>) => (a: Maybe<T>) => T;

export function binaryOperation<T>(operation: Fn2<T>): BinaryOperation<T> {
	return (b) => (a) => operation(a, b ?? a);
}

export function unsafeBinaryOperation<T extends number>(operation: Fn2<T, Maybe<T>>): UnsafeBinaryOperation<T> {
	return (b) => (a) => operation(a, b);
}


