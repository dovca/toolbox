import type {Fn, Predicate} from '../types';
import {keys} from './keys';
import {isOneOf} from '../predicate/isOneOf';

export function pickBy<T extends object, K extends keyof T>(picker: Predicate<K>): Fn<Pick<T, K>, T>;
export function pickBy<T extends object>(picker: Predicate<keyof T>): Fn<Partial<T>, T> {
	return (object) => {
		const result: Partial<T> = {};
		for (const key of keys(object)) {
			if (picker(key)) {
				result[key] = object[key];
			}
		}
		return result;
	};
}

export const pick = <T extends object, K extends keyof T>(...keys: K[]) => pickBy<T, K>(isOneOf(keys));
