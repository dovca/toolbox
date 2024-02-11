export type Gather2 = <A, B>(p1: A, p2: B) => [A, B];
export type Gather3 = <A, B, C>(p1: A, p2: B, p3: C) => [A, B, C];
export type Gather4 = <A, B, C, D>(p1: A, p2: B, p3: C, p4: D) => [A, B, C, D];
export type Gather5 = <A, B, C, D, E>(p1: A, p2: B, p3: C, p4: D, p5: E) => [A, B, C, D, E];

export function gather<A>(p1: A): [A];
export function gather<A, B>(p1: A, p2: B): [A, B];
export function gather<A, B, C>(p1: A, p2: B, p3: C): [A, B, C];
export function gather<A, B, C, D>(p1: A, p2: B, p3: C, p4: D): [A, B, C, D];
export function gather<A, B, C, D, E>(p1: A, p2: B, p3: C, p4: D, p5: E): [A, B, C, D, E];
export function gather(...args: any[]): any[] {
	return args;
}
