import type {Join} from 'string-ts';
import type {Fn, JoinMarker} from '../types';

export function append(): Fn<string>;
export function append<
	Input extends string = string,
>(): Fn<Join<[Input, Input]>, Input>;
export function append<
	Input extends string,
	Suffix extends string,
	WithJoinMarker extends true,
>(suffix: Suffix): Fn<Join<[Input, Suffix], JoinMarker>, Input>;
export function append<
	Input extends string,
	Suffix extends string,
>(suffix: Suffix): Fn<Join<[Input, Suffix]>, Input>;
export function append(suffix?: string): Fn<string> {
	return (input) => input + (suffix ?? input);
}
