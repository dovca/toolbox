import type {Join} from 'string-ts';
import type {Fn, JoinMarker} from '../types';

export function prepend(): Fn<string>;
export function prepend<
	Input extends string = string,
>(): Fn<Join<[Input, Input]>, Input>;
export function prepend<
	Input extends string,
	Prefix extends string,
	_WithJoinMarker extends true,
>(prefix: Prefix): Fn<Join<[Prefix, Input], JoinMarker>, Input>;
export function prepend<
	Input extends string,
	Prefix extends string,
>(prefix: Prefix): Fn<Join<[Prefix, Input]>, Input>;
export function prepend(prefix?: string): Fn<string> {
	return (input) => (prefix ?? input) + input;
}
