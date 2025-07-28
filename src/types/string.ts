import type {ToString} from './convert';

/**
 * Quotes a string by surrounding it with quotes.
 * @example
 * ```typescript
 * type DoubleQuoted = Quote<'foo'>; // '"foo"'
 * type SingleQuoted = Quote<'foo', "'">; // "'foo'"
 * type CustomQuoted = Quote<'foo', '(', ')'>; // '(foo)'
 * ```
 */
export type Quote<S, QLeft extends string = '"', QRight extends string = QLeft> = `${QLeft}${ToString<S>}${QRight}`;

/**
 * Unquotes a string by removing surrounding quotes.
 * @example
 * ```typescript
 * type Result = Unquote<'"foo"'>; // 'foo'
 * type Result = Unquote<"'foo'">; // 'foo'
 * ```
 */
export type Unquote<S extends string> = S extends `"${infer U}"` ? U : S extends `'${infer U}'` ? U : S;

/**
 * Removes all occurrences of a substring from the beginning of a string.
 * @example
 * ```typescript
 * type Result = RemoveAllPrefixes<'aabaabaa', 'a'>; // 'baabaa'
 * ```
 */
export type RemoveAllPrefixes<Str extends string, Prefix extends string> =
	Str extends `${Prefix}${infer Rest}`
		? RemoveAllPrefixes<Rest, Prefix>
		: Str;

/**
 * Removes all occurrences of a substring from the end of a string.
 * @example
 * ```typescript
 * type Result = CollapseAllRepeats<'aabaabaa', 'a'>; // 'aabaab'
 * ```
 */
export type RemoveAllSuffixes<Str extends string, Suffix extends string> =
	Str extends `${infer Rest}${Suffix}`
		? RemoveAllSuffixes<Rest, Suffix>
		: Str;

/**
 * Collapses all repeated consecutive occurrences of a substring into a single one.
 * @example
 * ```typescript
 * type Result = CollapseAllRepeats<'aabaabaa', 'b'>; // 'ababa'
 * ```
 */
export type CollapseAllRepeats<Str extends string, Rep extends string> =
	Str extends `${infer Prefix}${Rep}${Rep}${infer Suffix}`
		? CollapseAllRepeats<`${Prefix}${Rep}${Suffix}`, Rep>
		: Str;
