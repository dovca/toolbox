import type {Predicate} from '../types/utils';

export function startsWith(prefix: string | RegExp): Predicate<string> {
	return (input) => input.search(prefix) === 0;
}
