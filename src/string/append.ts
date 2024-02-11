import type {Join} from 'string-ts';
import type {Fn, JoinMarker} from '../types';

export function append<
	Input extends string,
	Suffix extends string,
	WithJoinMarker extends true,
>(suffix: Suffix): Fn<Join<[Input, Suffix], JoinMarker>, Input>;
export function append<
	Input extends string,
	Suffix extends string,
>(suffix: Suffix): Fn<Join<[Input, Suffix]>, Input>;
export function append<
	Input extends string,
	Suffix extends string,
>(suffix: Suffix): Fn<Join<[Input, Suffix]>, Input> {
	return (input) => (input + suffix) as Join<[Input, Suffix]>;
}
