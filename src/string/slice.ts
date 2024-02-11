import type {Fn} from '../types/types';
import {type Slice, slice as typedSlice} from 'string-ts';

export function slice<T extends string, S extends number = 0, E extends number = -1>(start?: S, end?: E): Fn<Slice<T, S, E>, T> {
	return (input) => typedSlice(input, start, end);
}
