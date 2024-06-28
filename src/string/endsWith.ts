import type {Predicate} from '../types/utils';

export function endsWith(str: string): Predicate<string> {
	return (input) => input.endsWith(str);
}
