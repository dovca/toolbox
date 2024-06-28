import type {Fn} from '../types/utils';

export function search(searchValue: string | RegExp): Fn<number, string> {
	return (input) => input.search(searchValue);
}
