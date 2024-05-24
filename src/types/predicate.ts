import type {AnyArray, Primitive} from './utils';
import type {Some} from './array';

// Are the types A and B equal?
export type Equals<X, Y> =
	(<T>() => T extends X ? 1 : 2) extends
		(<T>() => T extends Y ? 1 : 2) ? true : false;

// Does the type T contain null or undefined?
export type IsNullable<T> =
	null extends T
		? true
		: undefined extends T
			? true
			: false;

// Is the type T exactly null or undefined?
export type IsNullish<T> = Some<[Equals<T, null>, Equals<T, undefined>]>

export type IsEmpty<T> = T extends '' | null | undefined
	? true
	: T extends AnyArray
		? T extends readonly []
			? true // The array is definitely empty
			: number extends T['length']
				? boolean // Can't determine if the array is empty because it can have some items at runtime
				: false // The array is definitely a non-empty tuple
		: T extends object
			? Equals<T, object> extends true
				? boolean // Can't determine if the object is empty because it can have some properties at runtime
				: keyof T extends never
					? true // The object is definitely empty, it has no keys
					: false // The object is definitely not empty, it has at least one key
				: boolean; // We just don't know

export type IsTuple<T extends AnyArray> = number extends T['length']
	? false
	: true;

export type IsNegative<T extends number> = number extends T
	? boolean
	: `${T}` extends `-${number}`
		? true
		: false;

export type IsTypeLiteral<T> =
	// TODO figure out why boolean can't be checked with `Equals<T, boolean>`
	boolean extends T ? false :
	T extends Primitive
		? T extends null | undefined
			? true
			: Some<[
				Equals<T, string>,
				Equals<T, number>,
				Equals<T, bigint>,
				Equals<T, symbol>,
			]> extends true
				? false
				: true
		: false;
