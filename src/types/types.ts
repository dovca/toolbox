export type Fn<R, P1 = R> = (p1: P1) => R;
export type Fn2<R, P1 = R, P2 = P1> = (p1: P1, p2: P2) => R;
export type Fn3<R, P1 = R, P2 = P1, P3 = P2> = (p1: P1, p2: P2, p3: P3) => R;
export type Fn4<R, P1 = R, P2 = P1, P3 = P2, P4 = P3> = (p1: P1, p2: P2, p3: P3, p4: P4) => R;
export type Fn5<R, P1 = R, P2 = P1, P3 = P2, P4 = P3, P5 = P4> = (p1: P1, p2: P2, p3: P3, p4: P4, p5: P5) => R;
export type FnT2<R, T extends [any, any]> = (...args: T) => R;
export type FnT3<R, T extends [any, any, any]> = (...args: T) => R;
export type FnT4<R, T extends [any, any, any, any]> = (...args: T) => R;
export type FnT5<R, T extends [any, any, any, any, any]> = (...args: T) => R;

export type IterationResult<T> = [T, number, ReadonlyArray<T>];

export type IterationCallback<R, T> = FnT3<R, IterationResult<T>>;

export type MyIterator<T> = Generator<IterationResult<T>>;

export type JoinMarker = '___join___';
export type RemoveJoinMarker<T extends string> = T extends `${infer P}${JoinMarker}${infer S}` ? `${P}${S}` : T;

export type Predicate<T> = Fn<boolean, T>;
export type IndexedPredicate<T> = Fn2<boolean, T, number>;
export type Comparator<T, R = boolean> = Fn2<R, T>;

export type Append<Base extends string, Suffix extends string, Glue extends string = ''> = `${Base}${Glue}${Suffix}`;
export type Prepend<Base extends string, Prefix extends string, Glue extends string = ''> = `${Prefix}${Glue}${Base}`;

export type Dictionary<T> = Record<string, T>;
export type StringKeys<T extends object> = keyof T & string;
export type Values<T extends object> = T[StringKeys<T>];

export type Falsy = false | 0 | '' | null | undefined | 0n;

