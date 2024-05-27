import type {AnyArray, Values} from './utils';
import type {ToBoolean, ToString} from './convert';
import type {Equals, IsTuple} from './predicate';

export type Shift<T extends AnyArray, N extends number = 1, Shifted extends AnyArray = []> = IsTuple<T> extends true
	? N extends Shifted['length']
		? T
		: T extends readonly [infer Head, ...infer Rest]
			? Shift<Rest, N, [...Shifted, Head]>
			: T
	: T;

export type Pop<T extends AnyArray, N extends number = 1, Popped extends AnyArray = []> = IsTuple<T> extends true
	? N extends Popped['length']
		? T
		: T extends readonly [...infer Rest, infer Tail]
			? Pop<Rest, N, [...Popped, Tail]>
			: T
	: T;

export type Join<Arr extends AnyArray, Glue extends string = ''> = IsTuple<Arr> extends true
	? Arr extends readonly [infer Head, ...infer Rest]
		? Rest extends readonly []
			? ToString<Head>
			: `${ToString<Head>}${Glue}${Join<Rest, Glue>}`
		: ''
	: string;

export type Filter<Values extends AnyArray, Predicate> =
	[Predicate] extends [never]
	? []
	: IsTuple<Values> extends true
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
> = [Predicate] extends [never]
	? Values
	: IsTuple<Values> extends true
		? Values extends readonly [infer Head, ...infer Rest extends AnyArray] // Take the next value
			? Head extends Predicate // If the value is assignable to the predicate
				? Discard<Rest, Predicate, Result> // Discard the value and continue
				: Discard<Rest, Predicate, [...Result, Head]> // Keep the value and continue
			: Result // Values are empty, nothing left to discard
		// Values are an array of unknown length
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

export type Take<Values extends AnyArray, N extends number, Result extends AnyArray = []> = IsTuple<Values> extends true
	? N extends Result['length']
		? Result
		: Values extends readonly [infer Head, ...infer Rest]
			? Take<Rest, N, [...Result, Head]>
			: Result
	: Values;

export type TakeRight<Values extends AnyArray, N extends number, Result extends AnyArray = []> = IsTuple<Values> extends true
	? N extends Result['length']
		? Result
		: Values extends readonly [...infer Rest, infer Tail]
			? TakeRight<Rest, N, [Tail, ...Result]>
			: Result
	: Values;

export type TakeWhile<Values extends AnyArray, Predicate> = IsTuple<Values> extends true
	? Values extends readonly [infer Head, ...infer Rest]
		? Head extends Predicate
			? [Head, ...TakeWhile<Rest, Predicate>]
			: []
		: [] // Empty tuple
	: Extract<Values[number], Predicate>[];

export type TakeRightWhile<Values extends AnyArray, Predicate> = IsTuple<Values> extends true
	? Values extends readonly [...infer Rest, infer Last]
		? Last extends Predicate
			? [...TakeRightWhile<Rest, Predicate>, Last]
			: []
		: [] // Empty tuple
	: Extract<Values[number], Predicate>[];

export type DropWhile<Values extends AnyArray, Predicate> = IsTuple<Values> extends true
	? Values extends readonly [infer Head, ...infer Rest]
		? Head extends Predicate
			? DropWhile<Rest, Predicate>
			: Values
		: Values // Empty tuple
	: Exclude<Values[number], Predicate>[];

export type DropRightWhile<Values extends AnyArray, Predicate> = IsTuple<Values> extends true
	? Values extends readonly [...infer Rest, infer Last]
		? Last extends Predicate
			? DropRightWhile<Rest, Predicate>
			: Values
		: Values // Empty tuple
	: Exclude<Values[number], Predicate>[];

export type Nth<T extends AnyArray, N extends number, F = never> = N extends keyof T ? T[N] : F;
export type First<T extends AnyArray> = T extends readonly [infer F, ...any[]] ? F : T extends readonly (infer E)[] ? E : never;
export type Last<T extends AnyArray> = T extends readonly [...any[], infer L] ? L : T extends readonly (infer E)[] ? E : never;
export type Reverse<T extends AnyArray> = T extends readonly [infer F, ...infer R] ? [...Reverse<R>, F] : T;
export type Concat<T extends AnyArray, U extends AnyArray> = [...T, ...U];
