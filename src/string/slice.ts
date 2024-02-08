import type {Fn} from '../types/types';

export function slice(start?: number, end?: number): Fn<string> {
	return (input) => input.slice(start, end);
}
