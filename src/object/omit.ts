import type {Fn} from '../types';

export function omit<T extends object>(...keys: (keyof T)[]): Fn<Omit<T, keyof T>, T> {
	return (object) => {
		const result = {...object};
		for (const key of keys) {
			delete result[key];
		}
		return result;
	};
}
