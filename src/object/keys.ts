import type {StringKeys} from '../types';

export function keys<T extends object, K extends StringKeys<T> = StringKeys<T>>(obj: T): K[] {
	return Object.keys(obj) as K[];
}
