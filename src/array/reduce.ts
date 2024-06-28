import type {Fn, Fn3, Maybe, MyGeneratorFunction} from '../types/utils';
import {backwardIterator} from '../iterators/backward';
import {forwardIterator} from '../iterators/forward';
import {reversedIterator} from '../iterators/reversed';

type Reduce = <A, V = A>(
	reducer: Fn3<A, A | V, V, number>,
	start?: Maybe<A>,
) => Fn<A, readonly V[]>

function reduceFactory<A, V = A>(generator: MyGeneratorFunction<V>, maxIterations?: number): (
	reducer: Fn3<A, A | V, V, number>,
	start?: Maybe<A>,
) => Fn<A, readonly V[]> {
	return (reducer, start) => (values) => {
		if (values.length === 0 && start === undefined) {
			throw new TypeError('Reduce of empty array with no initial value');
		}

		let acc: Maybe<A | V> = start;
		let skippedFirst = false;
		let iterations = maxIterations ?? values.length;

		for (const [value, index] of generator(values)) {
			if (start === undefined && !skippedFirst) {
				acc = value;
				skippedFirst = true;
				continue;
			}

			if (iterations-- <= 0) {
				break;
			}

			acc = reducer(acc!, value, index);
		}

		return acc as A;
	};
}

/**
 * Reduces a flowing array to a single value.
 * @example
 * ```typescript
 * reduce(concat)(['a', 'b', 'c']); // 'abc'
 * ```
 */
export const reduce: Reduce = reduceFactory(forwardIterator);

/**
 * Reduces a flowing array to a single value, iterating from right to left.
 * @example
 * ```typescript
 * reduceRight(concat)(['a', 'b', 'c']); // 'cba'
 * ```
 */
export const reduceRight: Reduce = reduceFactory(backwardIterator);

/**
 * Reduces a flowing array to a single value, iterating from right to left, with index counting from right as well.
 * @example
 * ```typescript
 * reduceReversed(concat)(['a', 'b', 'c']); // 'cba'
 * ```
 */
export const reduceReversed: Reduce = reduceFactory(reversedIterator);

/**
 * Reduces a flowing array to a single value, with a maximum number of iterations.
 * @example
 * ```typescript
 * reduceAtMost(2)(concat)(['a', 'b', 'c']); // 'ab'
 * ```
 */
export function reduceAtMost(maxIterations: number): Reduce {
	return reduceFactory(forwardIterator, maxIterations);
}
