import type {Fn} from '../types';

export function search(searchValue: string | RegExp): Fn<number, string> {
	return (input) => input.search(searchValue);
}
