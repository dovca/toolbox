import type {Fn, Fn3, Maybe, MyIterator} from '../types';
import {backwardIterator, forwardIterator, reversedIterator} from './utils';
import {max} from '../number';

type Reduce = <A, V = A>(
	reducer: Fn3<A, A | V, V, number>,
	start?: Maybe<A>,
) => Fn<A, ReadonlyArray<V>>

function reduceFactory<A, V = A>(generator: Fn<MyIterator<V>, ReadonlyArray<V>>, maxIterations?: number): (
	reducer: Fn3<A, A | V, V, number>,
	start?: Maybe<A>,
) => Fn<A, ReadonlyArray<V>> {
	return (reducer, start) => (values) => {
		if (values.length === 0 && start === undefined) {
			throw new TypeError('Reduce of empty array with no initial value');
		}

		maxIterations ??= values.length;

		let acc: Maybe<A | V> = start;
		let skippedFirst = false;

		for (const [value, index] of generator(values)) {
			if (start === undefined && !skippedFirst) {
				acc = value;
				skippedFirst = true;
				continue;
			}
			acc = reducer(acc!, value, index);

			if (!--maxIterations) {
				break;
			}
		}

		return acc as A;
	};
}

/**
 * Reduces a flowing array to a single value.
 */
export const reduce: Reduce = reduceFactory(forwardIterator);

/**
 * Reduces a flowing array to a single value, iterating from right to left.
 */
export const reduceRight: Reduce = reduceFactory(backwardIterator);

/**
 * Reduces a flowing array to a single value, iterating from right to left, with index counting from right as well.
 */
export const reduceReversed: Reduce = reduceFactory(reversedIterator);

export function reduceAtMost(maxIterations: number): Reduce {
	return reduceFactory(forwardIterator, maxIterations);
}
