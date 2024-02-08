import type {Fn, Fn3, MyIterator} from '../types/types';
import {backwardIterator, forwardIterator, reversedIterator} from './utils/iterators';

type Reduce = <T, U = T>(
	reducer: Fn3<T | U, T, number, U>,
	start?: U | undefined,
) => Fn<ReadonlyArray<T>, U>

export function reduceFactory<T, U = T>(generator: Fn<ReadonlyArray<T>, MyIterator<T>>): (
	reducer: Fn3<T | U, T, number, U>,
	start?: U | undefined,
) => Fn<ReadonlyArray<T>, U> {
	return (reducer, start) => (values) => {
		if (values.length === 0 && start === undefined) {
			throw new TypeError('Reduce of empty array with no initial value');
		}

		let acc: T | U | undefined = start;
		let skippedFirst = false;

		for (const [value, index] of generator(values)) {
			if (start === undefined && !skippedFirst) {
				acc = value;
				skippedFirst = true;
				continue;
			}
			acc = reducer(acc!, value, index);
		}

		return acc as U;
	};
}

export const reduce: Reduce = reduceFactory(forwardIterator);

export const reduceRight: Reduce = reduceFactory(backwardIterator);

export const reduceReversed: Reduce = reduceFactory(reversedIterator);
