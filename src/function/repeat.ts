import type {Fn} from '../types';

/**
 * Repeats the function `times` times. The result of the previous function call is passed as the argument to the next function call.
 *
 * @param times The number of times to repeat the function.
 * @param fn The function to repeat.
 * @returns The return value of the last function call.
 */
export function repeat<T>(times: number, fn: Fn<T>): Fn<T> {
	return (value) => {
		for (let i = times; i--;) {
			value = fn(value);
		}
		return value;
	};
}
