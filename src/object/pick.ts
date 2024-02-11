import type {Fn, Predicate} from '../types';
import {keys} from './keys';
import {isOneOf} from '../predicate';

export function pickBy<T extends object>(picker: Predicate<keyof T>): Fn<Pick<T, keyof T>, T>;
export function pickBy<T extends object>(picker: Predicate<keyof T>): Fn<Partial<T>, T> {
	return (object) => {
		const result: Partial<T> = {};
		for (const key of keys<T, true>(object)) {
			if (picker(key)) {
				result[key] = object[key];
			}
		}
		return result;
	};
}

export const pick = <T extends object>(...keys: (keyof T)[]) => pickBy(isOneOf(keys));
