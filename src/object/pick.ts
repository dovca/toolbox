import type {Fn, Predicate, StringKeys} from '../types';
import {keys} from './keys';
import {isOneOf} from '../predicate';

export function pickBy<T extends object, K extends StringKeys<T>>(picker: Predicate<K>): Fn<Pick<T, K>, T>;
export function pickBy<T extends object>(picker: Predicate<StringKeys<T>>): Fn<Partial<T>, T> {
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

export const pick = <T extends object, K extends StringKeys<T>>(...keys: K[]) => pickBy<T, K>(isOneOf(keys));
