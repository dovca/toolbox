import type {Fn, Fn3, MyIterator} from '../types/types';
import {backwardIterator, forwardIterator, reversedIterator} from './utils/iterators';

type Reduce = <A, V = A>(
	reducer: Fn3<A, A | V, V, number>,
	start?: A | undefined,
) => Fn<A, ReadonlyArray<V>>

export function reduceFactory<A, V = A>(generator: Fn<MyIterator<V>, ReadonlyArray<V>>): (
	reducer: Fn3<A, A | V, V, number>,
	start?: A | undefined,
) => Fn<A, ReadonlyArray<V>> {
	return (reducer, start) => (values) => {
		if (values.length === 0 && start === undefined) {
			throw new TypeError('Reduce of empty array with no initial value');
		}

		let acc: A | V | undefined = start;
		let skippedFirst = false;

		for (const [value, index] of generator(values)) {
			if (start === undefined && !skippedFirst) {
				acc = value;
				skippedFirst = true;
				continue;
			}
			acc = reducer(acc!, value, index);
		}

		return acc as A;
	};
}

export const reduce: Reduce = reduceFactory(forwardIterator);

export const reduceRight: Reduce = reduceFactory(backwardIterator);

export const reduceReversed: Reduce = reduceFactory(reversedIterator);
