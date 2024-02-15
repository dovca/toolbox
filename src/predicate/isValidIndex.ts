import type {Predicate} from '../types';

export function isValidIndex(index: number): Predicate<string | any[]> {
	return (input) => index >= -input.length && index < input.length;
}
