import type {Fn, Values} from '../types';

export function pickValues<T extends object, K extends keyof T = keyof T>(...keys: K[]): Fn<Values<Pick<T, K>>[], T> {
	return (object) => {
		const result = [] as Values<Pick<T, K>>[];
		for (const key of keys) {
			result.push(object[key]);
		}
		return result;
	};
}
