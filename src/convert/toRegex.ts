import type {Fn} from '../types';

export function toRegex(flags?: string): Fn<RegExp, string> {
	return (input) => new RegExp(input, flags);
}
