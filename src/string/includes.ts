import type {Fn} from '../types/types';

export function includes(substr: string): Fn<string, boolean> {
	return (input) => input.includes(substr);
}
