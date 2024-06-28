import type {Predicate} from '../types/utils';

export function isValidIndex(index: number): Predicate<string | readonly any[]> {
	return (input) => index >= -input.length && index < input.length;
}
