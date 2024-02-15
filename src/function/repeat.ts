import type {Fn} from '../types';

export function repeat<T>(times: number, fn: Fn<T>): Fn<T> {
	return (value) => {
		for (let i = 0; i < times; i++) {
			value = fn(value);
		}
		return value;
	};
}
