export type T1<A = any> = [A];
export type T2<A = any, B = A> = [A, B];
export type T3<A = any, B = A, C = B> = [A, B, C];
export type T4<A = any, B = A, C = B, D = C> = [A, B, C, D];
export type T5<A = any, B = A, C = B, D = C, E = D> = [A, B, C, D, E];

export type Fn0<R> = () => R;
export type Fn<R, P1 = R> = (p1: P1) => R;
export type Fn1<R, P1 = R> = Fn<R, P1>;
export type Fn2<R, P1 = R, P2 = P1> = (p1: P1, p2: P2) => R;
export type Fn3<R, P1 = R, P2 = P1, P3 = P2> = (p1: P1, p2: P2, p3: P3) => R;
export type Fn4<R, P1 = R, P2 = P1, P3 = P2, P4 = P3> = (p1: P1, p2: P2, p3: P3, p4: P4) => R;
export type Fn5<R, P1 = R, P2 = P1, P3 = P2, P4 = P3, P5 = P4> = (p1: P1, p2: P2, p3: P3, p4: P4, p5: P5) => R;
export type FnN<R, P extends readonly any[]> = (...args: P) => R;
export type FnT1<R, T extends T1> = (...args: T) => R;
export type FnT2<R, T extends T2> = (...args: T) => R;
export type FnT3<R, T extends T3> = (...args: T) => R;
export type FnT4<R, T extends T4> = (...args: T) => R;
export type FnT5<R, T extends T5> = (...args: T) => R;

export type IterationResult<T> = [T, number, readonly T[]];
export type IterationCallback<R, T> = FnT3<R, IterationResult<T>>;
export type MyIterator<T> = Generator<IterationResult<T>>;

export type JoinMarker = '‍‍‍';

export type Predicate<T> = Fn<boolean, T>;
export type Comparator<T, R> = Fn2<R, T>;
export type Equalizer<T> = Comparator<T, boolean>;
export type Sorter<T> = Comparator<T, number>;
export type Arrayifier<T> = Fn<T[], T>;

export type ToString<T> = T extends string | number ? `${T}` : never;
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
export type Nullish<T> = T | null | undefined;
export type Maybe<T> = T | undefined;
export type Many<T> = T | T[];
export type ConditionalKeys<T extends object, C> = { [K in keyof T]: T[K] extends C ? K : never }[keyof T];

export type Falsy = false | 0 | '' | null | undefined | 0n;
export type Primitive = string | number | boolean | bigint | null | undefined;

export type First<T extends readonly any[]> = T extends readonly [infer F, ...any[]] ? F : T extends readonly (infer E)[] ? E : unknown
export type WithoutFirst<T extends readonly any[]> = T extends readonly [any, ...infer R] ? R : T;
export type Last<T extends readonly any[]> = T extends readonly [...infer _, infer L] ? L : T extends readonly (infer E)[] ? E : unknown;
