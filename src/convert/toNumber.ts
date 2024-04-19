import type {ToNumber} from '../types';

export function toNumber(): 0;
export function toNumber<T>(value: T): ToNumber<T>;
export function toNumber<T>(value?: T): ToNumber<T> {
	return Number(value) as ToNumber<T>;
}

const n = toNumber(undefined);
