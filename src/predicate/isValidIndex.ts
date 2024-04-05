import type {Predicate} from '../types';

export function isValidIndex(index: number): Predicate<string | readonly any[]> {
	return (input) => index >= -input.length && index < input.length;
}
