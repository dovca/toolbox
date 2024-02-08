import type {Fn} from '../types/types';

export function endsWith(str: string): Fn<string, boolean> {
	return (input) => input.endsWith(str);
}
