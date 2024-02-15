import type {Primitive} from '../types';

export function toString<T extends Primitive>(value: T): `${T}` {
	return String(value) as `${T}`;
}
