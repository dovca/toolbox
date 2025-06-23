import type {ToString} from './convert';

export type Quote<S> = `"${ToString<S>}"`;

export type Unquote<S extends string> = S extends `"${infer U}"` ? U : S extends `'${infer U}'` ? U : S;

export type RemoveAllPrefixes<Str extends string, Prefix extends string> =
	Str extends `${Prefix}${infer Rest}`
		? RemoveAllPrefixes<Rest, Prefix>
		: Str;

export type RemoveAllSuffixes<Str extends string, Suffix extends string> =
	Str extends `${infer Rest}${Suffix}`
		? RemoveAllSuffixes<Rest, Suffix>
		: Str;

export type CollapseAllRepeats<Str extends string, Rep extends string> =
	Str extends `${infer Prefix}${Rep}${Rep}${infer Suffix}`
		? CollapseAllRepeats<`${Prefix}${Rep}${Suffix}`, Rep>
		: Str;
