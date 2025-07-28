import type {Fn, FnChain} from '../types/utils';

/**
 * Constructs something similar to a pipe function, but the first argument being the initial value to be passed through.
 * @example
 * ```typescript
 * flow(1, double, increment); // 3
 * flow(1, increment, square); // 4
 * ```
 */
export function flow<V>(value: V): V;
export function flow<V, A>(value: V, ...fns: FnChain<[V, A]>): A;
export function flow<V, A, B>(value: V, ...fns: FnChain<[V, A, B]>): B;
export function flow<V, A, B, C>(value: V, ...fns: FnChain<[V, A, B, C]>): C;
export function flow<V, A, B, C, D>(value: V, ...fns: FnChain<[V, A, B, C, D]>): D;
export function flow<V, A, B, C, D, E>(value: V, ...fns: FnChain<[V, A, B, C, D, E]>): E;
export function flow<V, A, B, C, D, E, F>(value: V, ...fns: FnChain<[V, A, B, C, D, E, F]>): F;
export function flow<V, A, B, C, D, E, F, G>(value: V, ...fns: FnChain<[V, A, B, C, D, E, F, G]>): G;
export function flow<V, A, B, C, D, E, F, G, H>(value: V, ...fns: FnChain<[V, A, B, C, D, E, F, G, H]>): H;
export function flow<V, A, B, C, D, E, F, G, H, I>(value: V, ...fns: FnChain<[V, A, B, C, D, E, F, G, H, I]>): I;
export function flow<V, A, B, C, D, E, F, G, H, I, J>(value: V, ...fns: FnChain<[V, A, B, C, D, E, F, G, H, I, J]>): J;
export function flow(value: any, ...fns: Fn<any>[]): any {
	return fns.reduce((x, f) => f(x), value);
}

export {flow as _};
