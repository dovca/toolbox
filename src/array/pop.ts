import type {AnyArray} from '../types/utils';
import type {Pop} from '../types/array';

type Popper<N extends number> = <T extends AnyArray>(values: T) => Pop<T, N>;

/**
 * Returns a new array with the last N values removed.
 * @param count The number of values to remove from the end of the array. Defaults to 1.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * pop(2)([1, 2, 3, 4, 5]); // [1, 2, 3]
 * ```
 */
export function pop<N extends number>(count?: N): Popper<N> {
	return (values) => values.slice(0, -(count ?? 1)) as Pop<typeof values, N>;
}
