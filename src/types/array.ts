import type {AnyArray} from './utils';
import type {ToBoolean, ToString} from './convert';
import type {Equals, IsTuple} from './predicate';
import type {Decrement} from './number';

export type Shift<T extends AnyArray, N extends number = 1> = IsTuple<T> extends true
	? N extends 0
		? T
		: T extends readonly [infer _, ...infer Rest]
			? Shift<Rest, Decrement<N>>
			: T
	: T;

export type Pop<T extends AnyArray, N extends number = 1> = IsTuple<T> extends true
	? N extends 0
		? T
		: T extends readonly [...infer Rest, infer _]
			? Pop<Rest, Decrement<N>>
			: T
	: T;

export type Join<Arr extends AnyArray, Glue extends string = ''> = IsTuple<Arr> extends true
	? Arr extends readonly [infer Head, ...infer Rest]
		? Rest extends readonly []
			? ToString<Head>
			: `${ToString<Head>}${Glue}${Join<Rest, Glue>}`
		: ''
	: string;

export type Filter<Values extends AnyArray, Predicate> = IsTuple<Values> extends true
	? Values extends readonly [infer Head, ...infer Rest]
		? Head extends Predicate
			? [Head, ...Filter<Rest, Predicate>]
			: Filter<Rest, Predicate>
		: []
	: (Values[number] & Predicate)[];

export type Discard<
	Values extends AnyArray,
	Predicate,
	Result extends AnyArray = [],
> = IsTuple<Values> extends true
	? Values extends readonly [infer Head, ...infer Rest extends AnyArray]
		? Head extends Predicate
			? Discard<Rest, Predicate, Result>
			: Discard<Rest, Predicate, [...Result, Head]>
		: Result // Empty tuple
	: Equals<Values[number], Predicate> extends true
		? []
		: Exclude<Values[number], Predicate>[];

// Is `true` when all elements of the tuple are `true`.
export type Every<Values extends AnyArray> = IsTuple<Values> extends true
	? Values extends readonly [infer Head, ...infer Rest extends AnyArray]
		? ToBoolean<Head> extends true
			? Every<Rest>
			: false
		: true // Empty tuple
	: boolean;

// Is `true` when at least one element of the tuple is `true`.
export type Some<Values extends AnyArray> = IsTuple<Values> extends true
	? Values extends readonly [infer Head, ...infer Rest]
		? ToBoolean<Head> extends true
			? true
			: Some<Rest>
		: false // Empty tuple
	: boolean;

export type Push<Values extends AnyArray, New> = IsTuple<Values> extends true
	? [...Values, New]
	: (Values[number] | New)[];

export type Unshift<Values extends AnyArray, New> = IsTuple<Values> extends true
	? [New, ...Values]
	: (New | Values[number])[];

export type Nth<T extends AnyArray, N extends number, F = never> = N extends keyof T ? T[N] : F;
export type First<T extends AnyArray> = T extends readonly [infer F, ...any[]] ? F : T extends readonly (infer E)[] ? E : never;
export type Last<T extends AnyArray> = T extends readonly [...any[], infer L] ? L : T extends readonly (infer E)[] ? E : never;
export type Reverse<T extends AnyArray> = T extends readonly [infer F, ...infer R] ? [...Reverse<R>, F] : T;
export type Concat<T extends AnyArray, U extends AnyArray> = [...T, ...U];
