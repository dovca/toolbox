import type {Fn} from '../types/types';

export function split(separator: string | RegExp, limit?: number): Fn<string, string[]> {
	return (input) => input.split(separator, limit);
}
