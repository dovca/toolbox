import type {Fn} from '../types/utils';

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
	return (input) => input.replace(searchValue, replaceValue as any);
}
