import type {Fn} from '../types';

export function replace(
	searchValue: string | RegExp,
	replaceValue?: string,
): Fn<string>;
export function replace(
	searchValue: string | RegExp,
	replacer: (substring: string, ...args: any[]) => string,
): Fn<string>;
export function replace(
	searchValue: string | RegExp,
	replaceValue: string | ((substring: string, ...args: any[]) => string) = '',
): Fn<string> {
	// @ts-ignore
	return (input) => input.replace(searchValue, replaceValue);
}
