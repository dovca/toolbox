import type {Fn} from '../types/utils';

/**
 * Converts a flowing string into a regular expression.
 * @param flags
 */
export function toRegex(flags?: string): Fn<RegExp, string> {
	return (input) => new RegExp(input, flags);
}
