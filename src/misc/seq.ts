import {add} from '../number/arithmetic';
import {isGreaterThanOrEqual, isLessThanOrEqual} from '../number/comparisons';
import {growWhile} from '../array/grow';

/**
 * Generates a sequence of numbers [1, 2, 3, ..., end]
 * @param end The end of the sequence (inclusive).
 * @example
 * ```typescript
 * seq(5); // [1, 2, 3, 4, 5]
 * ```
 */
export function seq(end: number): number[];
/**
 * Generates a sequence of numbers from `start` to `end` with an optional `step`.
 * If `step` is not provided, it defaults to 1.
 * If the step overshoots the end, `end` is not included in the sequence.
 * If `start` is greater than `end`, the sequence will be in descending order.
 * @param start The start of the sequence.
 * @param end The end of the sequence (inclusive).
 * @param step The step size, which must be positive even for descending sequences (defaults to 1).
 * @example
 * ```typescript
 * seq(3, 5); // [3, 4, 5]
 * seq(5, 3); // [5, 4, 3]
 * seq(1, 7, 2); // [1, 3, 5, 7]
 * seq(0, 25, 10); // [0, 10, 20]
 * ```
 */
export function seq(start: number, end: number, step?: number): number[];
export function seq(start: number, end?: number, step = 1): number[] {
	if (step <= 0) {
		throw new Error('Step must be a positive number.');
	}

	const [startValue, endValue] = end === undefined ? [1, start] : [start, end];
	const incrementing = startValue < endValue;
	const stepValue = incrementing ? step : -step;
	const predicate = incrementing
		? isLessThanOrEqual(endValue - step)
		: isGreaterThanOrEqual(endValue + step);

	return growWhile(predicate, add(stepValue))([startValue]);
}
