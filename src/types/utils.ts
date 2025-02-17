import type {ToString} from './convert';

/** A single-element tuple. */
export type T1<A = any> = [A];
/** A two-element tuple. */
export type T2<A = any, B = A> = [A, B];
/** A three-element tuple. */
export type T3<A = any, B = A, C = B> = [A, B, C];
/** A four-element tuple. */
export type T4<A = any, B = A, C = B, D = C> = [A, B, C, D];
/** A five-element tuple. */
export type T5<A = any, B = A, C = B, D = C, E = D> = [A, B, C, D, E];


/** A function that takes a variable number of parameters. */
export type FnN<R, P extends readonly any[] = readonly any[]> = (...args: P) => R;
/** A function that takes one parameter. */
export type Fn<R, P1 = R> = FnN<R, T1<P1>>;
/** A function that takes two parameters. */
export type Fn2<R, P1 = R, P2 = P1> = FnN<R, T2<P1, P2>>;
/** A function that takes three parameters. */
export type Fn3<R, P1 = R, P2 = P1, P3 = P2> = FnN<R, T3<P1, P2, P3>>;
/** A function that takes four parameters. */
export type Fn4<R, P1 = R, P2 = P1, P3 = P2, P4 = P3> = FnN<R, T4<P1, P2, P3, P4>>;
/** A function that takes five parameters. */
export type Fn5<R, P1 = R, P2 = P1, P3 = P2, P4 = P3, P5 = P4> = FnN<R, T5<P1, P2, P3, P4, P5>>;
/** A function that takes a single parameter specified as a tuple. */
export type FnT1<R, T extends T1> = FnN<R, T>;
/** A function that takes two parameters specified as a tuple. */
export type FnT2<R, T extends T2> = FnN<R, T>;
/** A function that takes three parameters specified as a tuple. */
export type FnT3<R, T extends T3> = FnN<R, T>;
/** A function that takes four parameters specified as a tuple. */
export type FnT4<R, T extends T4> = FnN<R, T>;
/** A function that takes five parameters specified as a tuple. */
export type FnT5<R, T extends T5> = FnN<R, T>;
/** Constructs a tuple of functions that feed their results to each other. */
export type FnChain<T extends readonly any[]> = T extends [infer A, infer B, ...infer Rest]
	? [Fn<B, A>, ...FnChain<[B, ...Rest]>]
	: [];

/** A tuple representing the result of an array iteration: the value, index and the array  */
export type IterationResult<T> = [T, number, readonly T[]];
/** A function that is used to iterate over an array. */
export type IterationCallback<R, T> = FnT3<R, IterationResult<T>>;
/** A generator that yields the result of an array iteration. */
export type ToolboxGenerator<T> = Generator<IterationResult<T>>;
/** A generator function that iterates over an array. */
export type ToolboxGeneratorFunction<T> = Fn<ToolboxGenerator<T>, readonly T[]>;

/** Used as an invisible glue to join strings. */
export type JoinMarker = '‍‍‍';

/** A function that takes one parameter and returns true or false. */
export type Predicate<T> = Fn<boolean, T>;
/** A function that takes two parameters of the same type and returns a result. */
export type Comparator<T, R> = Fn2<R, T>;
/** A function that takes two parameters of the same type and returns a boolean. */
export type Equalizer<T> = Comparator<T, boolean>;
/** A function that takes two parameters of the same type and returns a number indicating their relative order. */
export type Sorter<T> = Comparator<T, number>;
/** A function that takes one parameter and returns it as an array. */
export type Arrayifier<T> = Fn<T[], T>;

/** An object with string keys and values of type T. */
export type Dictionary<T = any> = Record<string, T>;
/** The type of the keys of an object. */
export type StringKeys<T extends object> = ToString<keyof T>;
/** The type of the values of an object. */
export type Values<T extends object> = T[keyof T];
/** The type of the entries of an object. */
export type Entries<T extends object> = { [K in keyof T]-?: [K, T[K]]; }[keyof T];
/** The type of the object constructed from the given entries. */
export type FromEntries<T extends readonly [ValidIndex, any]> = { [K in T as K[0]]: K[1] };
/** The type T or `null` or `undefined`. */
export type Nullable<T> = T | null | undefined;
/** The type T or `undefined`. */
export type Maybe<T> = T | undefined;
/** A single value of type T or an array of them. */
export type Many<T> = T | readonly T[];
/** A single value of type T or a function that returns it. */
export type Indirectable<T> = T | (() => T);
/** The Type T or a promise of it. */
export type Awaitable<T> = T | Promise<T>;
/** Prettify the type of an object. */
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type Prettify<T> = { [K in keyof T]: T[K]; } & unknown;
/** The keys of an object that have values of type C. */
export type ConditionalKeys<T extends object, C> = { [K in keyof T]: T[K] extends C ? K : never }[keyof T];
/** Override some properties of type A with properties of type B. */
export type Override<Old extends object, New extends object> = Omit<Old, keyof New> & {
	[K in keyof New as New[K] extends never ? never : K]: New[K]
};
/** Require some properties of type T. */
export type SetRequired<T, K extends keyof T> = Prettify<Omit<T, K> & Required<Pick<T, K>>>;
/** Make some properties of type T optional. */
export type SetOptional<T, K extends keyof T> = Prettify<Omit<T, K> & Partial<Pick<T, K>>>;
/** Swap the keys and values of an object. */
export type Transpose<T extends Record<string, string | number>> = Record<Values<T>, keyof T>;
/** Union of types that can be used as an object's key */
export type ValidIndex = string | number | symbol;

/** The empty tuple type. */
export type EmptySet = readonly [];
/** A general array type. */
export type AnyArray = readonly any[];
/** A general function type. */
export type AnyFunction = (...args: AnyArray) => any;
/** The type of all falsy values. */
export type Falsy = false | 0 | '' | null | undefined | 0n;
/** The type of all primitive values. */
export type Primitive = string | number | boolean | bigint | null | undefined;
/** The type of objects than can be compared numerically. */
export type Numeric = number | { valueOf(): number; };

export type Indexable = object | AnyArray;

/** A single-element tuple of type containing either type T or itself recursively. */
export type ReadonlyDeepSingle<T> = readonly [T | ReadonlyDeepSingle<T>];

/** A helper type for getting negative number. */
export type Negative<T extends number> = number extends T
	? number
	: T extends 0
		? 0
		: `-${T}` extends `${infer R extends number}`
			? R
			: `${T}` extends `-${infer S extends number}`
				? S
				: never;

/** A helper type for tests. */
export type Expect<T extends true> = T;
