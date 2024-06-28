import {add} from '../number/arithmetic';
import {isGreaterThanOrEqual, isLessThanOrEqual} from '../number/comparisons';
import {growWhile} from '../array/grow';

export function seq(end: number): number[];
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
