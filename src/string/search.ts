import type {Fn} from '../types/types';

export function search(searchValue: string | RegExp): Fn<string, number> {
	return (input) => input.search(searchValue);
}
