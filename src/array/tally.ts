import type {Fn, Predicate} from '../types/utils';
import {isTruthy} from '../predicate/isTruthy';

/**
 * Counts the number of elements in the array that pass a given predicate.
 * @param filter A predicate function that determines whether to count an element.
 * If not provided, it defaults to counting all truthy values.
 * @returns Produces the number of elements that pass the predicate
 * @example
 * ```typescript
 * tally()([0, 1, 2, 0, 4]); // 3
 * tally(isEven)([1, 2, 3, 4, 5]); // 2
 * ```
 */
export function tally<T>(filter: Predicate<T> = isTruthy): Fn<number, readonly T[]> {
	return (values) => {
		let count = 0;
		for (const value of values) {
			if (filter(value)) {
				count++
			}
		}
		return count;
	};
}
