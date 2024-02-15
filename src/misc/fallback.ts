import type {Fn, Nullish} from '../types';
import {invoke} from '../function';

export function fallback<T, F = T>(fallback: F | Fn<F, void>): Fn<T | F, Nullish<T>> {
	return (value) => value ?? invoke(fallback);
}
