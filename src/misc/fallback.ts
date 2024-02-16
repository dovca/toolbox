import type {Fn, Nullish} from '../types';
import {unwrap} from '../function';

export function fallback<T, F = T>(fallback: F | Fn<F, void>): Fn<T | F, Nullish<T>> {
	return (value) => value ?? unwrap(fallback);
}
