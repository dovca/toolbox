import {map} from '../array';
import {keys} from './keys';
import type {StringKeys} from '../types';

export function toPairs<T extends object, K extends StringKeys<T> = StringKeys<T>>(obj: T): [K, T[K]][] {
	return map<K, [K, T[K]]>((key) => [key, obj[key]])(keys<T, K>(obj));
}
