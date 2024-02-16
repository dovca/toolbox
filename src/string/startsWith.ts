import type {Predicate} from '../types';

export function startsWith(prefix: string | RegExp): Predicate<string> {
	return (input) => input.search(prefix) === 0;
}
