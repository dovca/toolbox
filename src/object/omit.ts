import type {Fn} from '../types';

export function omit<T extends object, K extends keyof T>(...keys: K[]): Fn<Omit<T, K>, T> {
	return (object) => {
		const result = {...object};
		for (const key of keys) {
			delete result[key];
		}
		return result;
	};
}
