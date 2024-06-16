import type {AnyArray, Override, Prettify} from './utils';

type _Access<Obj, Key extends string> = Obj extends object | AnyArray
	? Key extends keyof Obj
		? Obj[Key]
		: Key extends `${number}`
			? Obj extends AnyArray
				? Obj[number]
				: undefined
			: undefined
	: undefined;

/**
 * Extracts a deeply nested property type from an object type.
 * @example
 * ```typescript
 * type Obj = { a: { b: { c: number } } };
 * type Result = Access<Obj, 'a.b.c'>; // number
 * ```
 */
export type Access<
	Obj,
	Path extends string,
	Sep extends string = '.',
> = Obj extends object | AnyArray
	? Path extends `${infer Key}${Sep}${infer Rest}`
		? Access<_Access<Obj, Key>, Rest, Sep>
		: _Access<Obj, Path>
	: undefined;

type _Assign<Obj, Key extends string, Value> = Obj extends object
	? Key extends `${number}`
		? Value[]
		: Prettify<Override<Obj, { [K in Key]: Value }>>
	: undefined;

/**
 * Overrides a deeply nested property of an object type with the given value type.
 * @example
 * ```typescript
 * type Obj = { a: { b: { c: number } } };
 * type Result = Assign<Obj, 'a.b.c', string>; // { a: { b: { c: string } } }
 * ```
 */
export type Assign<
	Obj extends object | AnyArray,
	Path extends string,
	Value,
	Sep extends string = '.',
> = Path extends `${infer Key}${Sep}${infer Rest}`
	// eslint-disable-next-line @typescript-eslint/ban-types
	? _Assign<Obj, Key, Assign<{}, Rest, Value, Sep>>
	: _Assign<Obj, Path, Value>;
