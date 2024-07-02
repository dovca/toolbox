import type {Join} from 'string-ts';
import type {Fn, JoinMarker} from '../types/utils';

/**
 * Appends the flowing string to itself.
 * @returns Produces the flowing string appended to itself.
 * @example
 * ```typescript
 * append()('abc'); // 'abcabc'
 * ```
 */
export function append(): Fn<string>;

/**
 * Appends the flowing string to itself.
 * @returns Produces the flowing string appended to itself.
 * @example
 * ```typescript
 * append()('abc'); // 'abcabc'
 * ```
 */
export function append<
	Input extends string = string,
>(): Fn<Join<[Input, Input]>, Input>;

/**
 * Appends the given suffix to the flowing string.
 * @param suffix The suffix to append.
 * @returns Produces the flowing string with the suffix appended.
 * @example
 * ```typescript
 * append('def')('abc'); // 'abcdef'
 * ```
 */
export function append<
	Input extends string,
	Suffix extends string,
	_WithJoinMarker extends true,
>(suffix: Suffix): Fn<Join<[Input, Suffix], JoinMarker>, Input>;

/**
 * Appends the given suffix to the flowing string.
 * @param suffix The suffix to append.
 * @returns Produces the flowing string with the suffix appended.
 * @example
 * ```typescript
 * append('def')('abc'); // 'abcdef'
 * ```
 */
export function append<
	Input extends string,
	Suffix extends string,
>(suffix: Suffix): Fn<Join<[Input, Suffix]>, Input>;
export function append(suffix?: string): Fn<string> {
	return (input) => input + (suffix ?? input);
}
