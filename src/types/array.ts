import type {AnyArray} from './utils';
import type {ToBoolean, ToString} from './convert';
import type {Equals, IsTuple} from './predicate';

/**
 * Removes the first N elements from a tuple.
 * @example
 * ```typescript
 * type Result = Shift<[1, 2, 3, 4], 2>; // [3, 4]
 * ```
 */
export type Shift<T extends AnyArray, N extends number = 1, Shifted extends AnyArray = []> = IsTuple<T> extends true
	? N extends Shifted['length']
		? T
		: T extends readonly [infer Head, ...infer Rest]
			? Shift<Rest, N, [...Shifted, Head]>
			: T
	: T;

/**
 * Removes the last N elements from a tuple.
 * @example
 * ```typescript
 * type Result = Pop<[1, 2, 3, 4], 2>; // [1, 2]
 * ```
 */
export type Pop<T extends AnyArray, N extends number = 1, Popped extends AnyArray = []> = IsTuple<T> extends true
	? N extends Popped['length']
		? T
		: T extends readonly [...infer Rest, infer Tail]
			? Pop<Rest, N, [...Popped, Tail]>
			: T
	: T;

/**
 * Joins the types of a tuple into a string type.
 * @example
 * ```typescript
 * type Result = Join<[1, 2, 3], '-'>; // '1-2-3'
 * ```
 */
export type Join<Arr extends AnyArray, Glue extends string = ''> = IsTuple<Arr> extends true
	? Arr extends readonly [infer Head, ...infer Rest]
		? Rest extends readonly []
			? ToString<Head>
			: `${ToString<Head>}${Glue}${Join<Rest, Glue>}`
		: ''
	: string;

/**
 * Filters the elements of a tuple based on a predicate.
 * @example
 * ```typescript
 * type Result = Filter<[1, 'foo', false, number], number>; // [1, number]
 * ```
 */
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

/**
 * Removes the elements of a tuple based on a predicate.
 * @example
 * ```typescript
 * type Result = Discard<[1, 'foo', false, number], number>; // ['foo', false]
 * ```
 */
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

/**
 * Is the literal type `true` when all elements of the tuple are `true`.
 * @example
 * ```typescript
 * type Result = Every<[true, true, true]>; // true
 * ```
 */
export type Every<Values extends AnyArray> = IsTuple<Values> extends true
	? Values extends readonly [infer Head, ...infer Rest extends AnyArray]
		? ToBoolean<Head> extends true
			? Every<Rest>
			: false
		: true // Empty tuple
	: boolean;

/** Is the literal type `true` when at least one element of the tuple is `true`.
 * @example
 * ```typescript
 * type Result = Some<[false, false, true]>; // true
 * ```
 */
export type Some<Values extends AnyArray> = IsTuple<Values> extends true
	? Values extends readonly [infer Head, ...infer Rest]
		? ToBoolean<Head> extends true
			? true
			: Some<Rest>
		: false // Empty tuple
	: boolean;

/** Is the literal type `true` when at least one element of the tuple is assignable to the `Search` type.
 * @example
 * ```typescript
 * type Result = Includes<[1, 'foo', false], number>; // true
 * ```
 */
export type Includes<Values extends AnyArray, Search> = IsTuple<Values> extends true
	? Values extends readonly [infer Head, ...infer Rest]
		? [Head] extends [Search]
			? true
			: Includes<Rest, Search>
		: false // Empty tuple
	: Values extends readonly (infer Element)[]
		? Element extends Search
			? true
			: false
		: false;

/**
 * Appends a new element to the end of a tuple.
 * @example
 * ```typescript
 * type Result = Push<[1, 2, 3], 4>; // [1, 2, 3, 4]
 * ```
 */
export type Push<Values extends AnyArray, New> = IsTuple<Values> extends true
	? [...Values, New]
	: (Values[number] | New)[];

/**
 * Prepends a new element to the beginning of a tuple.
 * @example
 * ```typescript
 * type Result = Unshift<[1, 2, 3], 0>; // [0, 1, 2, 3]
 * ```
 */
export type Unshift<Values extends AnyArray, New> = IsTuple<Values> extends true
	? [New, ...Values]
	: (New | Values[number])[];

/**
 * Takes the first N elements from a tuple.
 * @example
 * ```typescript
 * type Result = Take<[1, 2, 3, 4], 2>; // [1, 2]
 * ```
 */
export type Take<Values extends AnyArray, N extends number, Result extends AnyArray = []> = IsTuple<Values> extends true
	? N extends Result['length']
		? Result
		: Values extends readonly [infer Head, ...infer Rest]
			? Take<Rest, N, [...Result, Head]>
			: Result
	: Values;

/**
 * Takes the last N elements from a tuple.
 * @example
 * ```typescript
 * type Result = TakeRight<[1, 2, 3, 4], 2>; // [3, 4]
 * ```
 */
export type TakeRight<Values extends AnyArray, N extends number, Result extends AnyArray = []> = IsTuple<Values> extends true
	? N extends Result['length']
		? Result
		: Values extends readonly [...infer Rest, infer Tail]
			? TakeRight<Rest, N, [Tail, ...Result]>
			: Result
	: Values;

/**
 * Takes elements from a tuple while the predicate returns `true`.
 * @example
 * ```typescript
 * type Result = TakeWhile<[1, 2, 3, 'foo'], number>; // [1, 2, 3]
 * ```
 */
export type TakeWhile<Values extends AnyArray, Predicate> = IsTuple<Values> extends true
	? Values extends readonly [infer Head, ...infer Rest]
		? Head extends Predicate
			? [Head, ...TakeWhile<Rest, Predicate>]
			: []
		: [] // Empty tuple
	: Extract<Values[number], Predicate>[];

/**
 * Takes elements from a tuple while the predicate returns `true` starting from the end.
 * Order of the elements is preserved.
 * @example
 * ```typescript
 * type Result = TakeRightWhile<['foo', 1, 2, 3], number>; // [1, 2, 3]
 * ```
 */
export type TakeRightWhile<Values extends AnyArray, Predicate> = IsTuple<Values> extends true
	? Values extends readonly [...infer Rest, infer Last]
		? Last extends Predicate
			? [...TakeRightWhile<Rest, Predicate>, Last]
			: []
		: [] // Empty tuple
	: Extract<Values[number], Predicate>[];

/**
 * Removes elements from a tuple while the predicate returns `true`.
 * @example
 * ```typescript
 * type Result = DropWhile<[1, 2, 3, 'foo'], number>; // ['foo']
 * ```
 */
export type DropWhile<Values extends AnyArray, Predicate> = IsTuple<Values> extends true
	? Values extends readonly [infer Head, ...infer Rest]
		? Head extends Predicate
			? DropWhile<Rest, Predicate>
			: Values
		: Values // Empty tuple
	: Exclude<Values[number], Predicate>[];

/**
 * Removes elements from a tuple while the predicate returns `true` starting from the end.
 * Order of the elements is preserved.
 * @example
 * ```typescript
 * type Result = DropRightWhile<['foo', 1, 2, 3], number>; // ['foo']
 * ```
 */
export type DropRightWhile<Values extends AnyArray, Predicate> = IsTuple<Values> extends true
	? Values extends readonly [...infer Rest, infer Last]
		? Last extends Predicate
			? DropRightWhile<Rest, Predicate>
			: Values
		: Values // Empty tuple
	: Exclude<Values[number], Predicate>[];

/**
 * Returns the Nth element of a tuple.
 * @example
 * ```typescript
 * type Result = Nth<[1, 2, 3], 1>; // 2
 * ```
 */
export type Nth<T extends AnyArray, N extends number, F = never> = N extends keyof T ? T[N] : F;

/**
 * Returns the first element of a tuple.
 * @example
 * ```typescript
 * type Result = First<[1, 2, 3]>; // 1
 * ```
 */
export type First<T extends AnyArray> = T extends readonly [infer F, ...any[]] ? F : T extends readonly (infer E)[] ? E : never;

/**
 * Returns the last element of a tuple.
 * @example
 * ```typescript
 * type Result = Last<[1, 2, 3]>; // 3
 * ```
 */
export type Last<T extends AnyArray> = T extends readonly [...any[], infer L] ? L : T extends readonly (infer E)[] ? E : never;

/**
 * Reverses the order of a tuple.
 * @example
 * ```typescript
 * type Result = Reverse<[1, 2, 3]>; // [3, 2, 1]
 * ```
 */
export type Reverse<T extends AnyArray> = T extends readonly [infer F, ...infer R] ? [...Reverse<R>, F] : T;

/**
 * Concatenates two tuples.
 * @example
 * ```typescript
 * type Result = Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]
 * ```
 */
export type Concat<T extends AnyArray, U extends AnyArray> = [...T, ...U];
