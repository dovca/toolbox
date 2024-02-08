import type {Fn} from '../types/types';

export function omit<T extends object, K extends keyof T>(...keys: K[]): Fn<T, Omit<T, K>> {
	return (object) => {
		const result = {...object};
		for (const key of keys) {
			delete result[key];
		}
		return result;
	};
}
