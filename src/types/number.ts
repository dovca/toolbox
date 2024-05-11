export type Negative<T extends number> = number extends T
	? number
	: `${T}` extends `-${infer R extends number}`
		? R
		: `-${T}` extends `${infer S extends number}`
			? S
			: never;

export type Decrement<N extends number> = number extends N
	? number
	: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19][N];
