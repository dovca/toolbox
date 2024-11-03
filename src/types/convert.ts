import type {AnyArray, EmptySet, Falsy, Primitive, ReadonlyDeepSingle} from './utils';
import type {IsTuple, IsTypeLiteral} from './predicate';

export type ToNumber<T> =
	number extends T ? number :
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
	boolean extends T ? boolean :
		T extends boolean ? T :
			T extends Falsy ? false :
				// NaN is a number, but it's falsy, and it can't be distinguished from a number type-wise
				// So we can't assume that a number is truthy when it's not zero
				T extends number ? boolean :
					true;

export type ToString<T> =
// TODO figure out why boolean has to be checked this much explicitly
	boolean extends T ? string :
		T extends string ? T :
			T extends Primitive
				? IsTypeLiteral<T> extends true
					? `${T}`
					: string
				: T extends EmptySet ? '' :
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

export type ToTuple<T> = T extends AnyArray ? IsTuple<T> extends true ? T : [T[number]] : [T];

export type ToArray<T> = T extends AnyArray ? IsTuple<T> extends true ? T[number][] : T : T[];
