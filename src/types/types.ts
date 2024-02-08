export type Fn<I, O = I> = (input: I) => O;
export type Fn2<I1, I2 = I1, O = I2> = (i1: I1, i2: I2) => O;
export type FnT2<T extends [any, any], O> = (...args: T) => O;
export type Fn3<I1, I2 = I1, I3 = I2, O = I3> = (i1: I1, i2: I2, i3: I3) => O;
export type FnT3<T extends [any, any, any], O> = (...args: T) => O;
export type Fn4<I1, I2 = I1, I3 = I2, I4 = I3, O = I4> = (i1: I1, i2: I2, i3: I3, i4: I4) => O;
export type Fn5<I1, I2 = I1, I3 = I2, I4 = I3, I5 = I4, O = I5> = (i1: I1, i2: I2, i3: I3, i4: I4, i5: I5) => O;

export type IterationResult<T> = [T, number, ReadonlyArray<T>];

export type IterationCallback<T, R> = FnT3<IterationResult<T>, R>;

export type MyIterator<T> = Generator<IterationResult<T>>;

export type Predicate<T> = Fn<T, boolean>;
export type IndexedPredicate<T> = Fn2<T, number, boolean>;

export type Comparator<T> = Fn2<T, T, boolean>;

export type Dictionary<T> = Record<string, T>;

export type Falsy = false | 0 | '' | null | undefined | 0n;
