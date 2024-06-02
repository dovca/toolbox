import type {Fn} from '../types';

/**
 * Gets the value of a flowing object's property. A single-depth version of `access`.
 * @param prop The property to get the value of.
 * @returns Produces the value of the given property.
 * @example
 * ```typescript
 * property('a')({a: 1, b: 2}); // 1
 * ```
 */
export function property<T extends object, P extends keyof T>(prop: P): Fn<T[P], T> {
	return (obj) => obj[prop];
}
