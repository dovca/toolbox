import type {ToBoolean} from '../types';

export function toBoolean(): false;
export function toBoolean<T>(value: T): ToBoolean<T>;
export function toBoolean<T>(value?: T): ToBoolean<T> {
	return Boolean(value) as ToBoolean<T>;
}
