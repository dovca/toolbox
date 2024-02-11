import type {Append, Fn, JoinMarker, Prepend} from '../types/types';

export function append<
	Input extends string,
	Suffix extends string,
	WithJoinMarker extends true,
>(suffix: Suffix): Fn<Append<Input, Suffix, JoinMarker>, Input>;
export function append<
	Input extends string,
	Suffix extends string,
>(suffix: Suffix): Fn<Append<Input, Suffix>, Input>;
export function append<
	Input extends string,
	Suffix extends string,
>(suffix: Suffix): Fn<Append<Input, Suffix>, Input> {
	return (input) => (input + suffix) as Append<Input, Suffix>;
}

export function prepend<
	Input extends string,
	Prefix extends string,
	WithJoinMarker extends true,
>(prefix: Prefix): Fn<Prepend<Input, Prefix, JoinMarker>, Input>;
export function prepend<
	Input extends string,
	Prefix extends string,
>(prefix: Prefix): Fn<Prepend<Input, Prefix>, Input>;
export function prepend<
	Input extends string,
	Prefix extends string,
>(prefix: Prefix): Fn<Prepend<Input, Prefix>, Input> {
	return (input) => (prefix + input) as Prepend<Input, Prefix>;
}
