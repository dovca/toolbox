import {upperCase} from 'string-ts';

export function toUpperCase<T extends string>(str: T): Uppercase<T> {
	return upperCase(str) as Uppercase<T>;
}
