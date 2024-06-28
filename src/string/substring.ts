import type {Fn} from '../types/utils';

export function substring(start: number, end?: number): Fn<string> {
	return (input) => input.substring(start, end);
}
