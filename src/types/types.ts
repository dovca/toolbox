export type T1<A = any> = [A];
export type T2<A = any, B = A> = [A, B];
export type T3<A = any, B = A, C = B> = [A, B, C];
export type T4<A = any, B = A, C = B, D = C> = [A, B, C, D];
export type T5<A = any, B = A, C = B, D = C, E = D> = [A, B, C, D, E];

export type Fn<R, P1 = R> = (p1: P1) => R;
export type Fn2<R, P1 = R, P2 = P1> = (p1: P1, p2: P2) => R;
export type Fn3<R, P1 = R, P2 = P1, P3 = P2> = (p1: P1, p2: P2, p3: P3) => R;
export type Fn4<R, P1 = R, P2 = P1, P3 = P2, P4 = P3> = (p1: P1, p2: P2, p3: P3, p4: P4) => R;
export type Fn5<R, P1 = R, P2 = P1, P3 = P2, P4 = P3, P5 = P4> = (p1: P1, p2: P2, p3: P3, p4: P4, p5: P5) => R;
export type FnN<R, P extends readonly any[] = readonly any[]> = (...args: P) => R;
export type FnT1<R, T extends T1> = (...args: T) => R;
export type FnT2<R, T extends T2> = (...args: T) => R;
export type FnT3<R, T extends T3> = (...args: T) => R;
export type FnT4<R, T extends T4> = (...args: T) => R;
export type FnT5<R, T extends T5> = (...args: T) => R;

export type IterationResult<T> = [T, number, readonly T[]];
export type IterationCallback<R, T> = FnT3<R, IterationResult<T>>;
export type MyGeneratorFunction<T> = Fn<MyGenerator<T>, readonly T[]>;
export type MyGenerator<T> = Generator<IterationResult<T>>;

export type JoinMarker = '‍‍‍';

export type Predicate<T> = Fn<boolean, T>;
export type Comparator<T, R> = Fn2<R, T>;
export type Equalizer<T> = Comparator<T, boolean>;
export type Sorter<T> = Comparator<T, number>;
export type Arrayifier<T> = Fn<T[], T>;

export type Negative<T extends number> = number extends T
	? number
	: `${T}` extends `-${infer R extends number}`
		? R
		: `-${T}` extends `${infer S extends number}`
			? S
			: never;

export type Dictionary<T> = Record<string, T>;
export type StringKeys<T extends object> = ToString<keyof T>;
export type Values<T extends object> = T[keyof T];
export type Nullable<T> = T | null | undefined;
export type Maybe<T> = T | undefined;
export type Many<T> = T | readonly T[];
export type Indirectable<T> = T | (() => T);
export type ConditionalKeys<T extends object, C> = { [K in keyof T]: T[K] extends C ? K : never }[keyof T];
export type Override<A extends object, B extends object> = Omit<A, keyof B> & {
	[K in keyof B as B[K] extends never | void ? never : K]: B[K]
};
export type Transpose<T extends Record<string, string | number>> = Record<Values<T>, keyof T>;

// Are the types A and B equal?
export type AreEqual<A, B> =
	A extends B
		? B extends A
			? true
			: false
		: false;

// Does the type T contain null or undefined?
export type IsNullable<T> =
	null extends T
		? true
		: undefined extends T
			? true
			: false;

// Is the type T exactly null or undefined?
export type IsNullish<T> =
	AreEqual<T, null> extends true
		? true
		: AreEqual<T, undefined> extends true
			? true
			: false;

export type EmptySet = readonly [];
export type AnyArray = readonly any[];
export type Falsy = false | 0 | '' | null | undefined | 0n;
export type Primitive = string | number | boolean | bigint | null | undefined;

export type Nth<T extends readonly any[], N extends number, F = never> = N extends keyof T ? T[N] : F;
export type First<T extends readonly any[]> = T extends readonly [infer F, ...any[]] ? F : T extends readonly (infer E)[] ? E : unknown
export type WithoutFirst<T extends readonly any[]> = T extends readonly [any, ...infer R] ? R : T;
export type Last<T extends readonly any[]> = T extends readonly [...infer _, infer L] ? L : T extends readonly (infer E)[] ? E : unknown;
export type Reverse<T extends readonly any[]> = T extends readonly [infer F, ...infer R] ? [...Reverse<R>, F] : T;

export type ReadonlyDeepSingle<T> = readonly [T | ReadonlyDeepSingle<T>];

export type ToNumber<T> =
	T extends number ? T : // Number(1) -> 1
		T extends true ? 1 : // Number(true) -> 1
			T extends false | null | '' | EmptySet ? 0 : // Number(false) -> 0
				T extends string
					? T extends `${infer N extends number}`
						? N // Number('1') -> 1
						: number // Number('a') -> NaN
					: T extends AnyArray
						? T extends ReadonlyDeepSingle<infer N>
							? ToNumber<N> // Number([[[1]]]) -> 1
							: number // Number([1, 2]) -> NaN
						: T extends object
							? keyof T extends never
								? number // Number({}) -> NaN
								: T extends { valueOf(): infer N }
									? ToNumber<N> // Number({valueOf: () => 1}) -> 1
									: number // Number({a: 1}) -> NaN
							: number; // Number(undefined) -> NaN

export type ToBoolean<T> =
	T extends boolean ? T :
		T extends Falsy ? false :
			// NaN is a number, but it's falsy, and it can't be distinguished from a number type-wise
			// So we can't assume that a number is truthy when it's not zero
			T extends number ? boolean :
				true;

export type ToString<T> =
	T extends string ? T :
		T extends Primitive ? `${T}` :
			T extends EmptySet ? '' :
				T extends AnyArray
					? T extends readonly [infer F, ...infer R]
						? R extends EmptySet
							? F extends undefined
								? '' // String([undefined]) -> ''
								: ToString<F> // String([1]) -> '1'
							: F extends undefined
								? `,${ToString<R>}` // String([, 1]) -> ',1'
								: `${ToString<F>},${ToString<R>}` // String([1, 2]) -> '1,2'
						: string // Array of unknown length, can't construct a concrete string
					: T extends object
						? keyof T extends never
							? '[object Object]' // String({}) -> '[object Object]'
							: T extends { toString(): infer S }
								? ToString<S> // String({toString: () => 'a'}) -> 'a'
								: string // String({a: 1}) -> '[object Object]'
						: string;
