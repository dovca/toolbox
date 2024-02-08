import type {Fn} from '../types/types';

export function startsWith(str: string): Fn<string, boolean> {
	return (input) => input.startsWith(str);
}
