import type {Predicate} from '../types';

export function startsWith(str: string): Predicate<string> {
	return (input) => input.startsWith(str);
}
