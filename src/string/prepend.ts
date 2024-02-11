import type {Join} from 'string-ts';
import type {Fn, JoinMarker} from '../types';

export function prepend<
	Input extends string,
	Prefix extends string,
	WithJoinMarker extends true,
>(prefix: Prefix): Fn<Join<[Prefix, Input], JoinMarker>, Input>;
export function prepend<
	Input extends string,
	Prefix extends string,
>(prefix: Prefix): Fn<Join<[Prefix, Input]>, Input>;
export function prepend<
	Input extends string,
	Prefix extends string,
>(prefix: Prefix): Fn<Join<[Input, Prefix]>, Input> {
	return (input) => (prefix + input) as Join<[Input, Prefix]>;
}
