import type {MyIterator} from '../../types';
import {modulo} from '../../number';

export function *forwardIterator<T>(values: readonly T[]): MyIterator<T> {
	for (let i = 0; i < values.length; i++) {
		yield [values[i], i, values];
	}
}

export function *backwardIterator<T>(values: readonly T[]): MyIterator<T> {
	for (let i = values.length - 1; i >= 0; i--) {
		yield [values[i], i, values];
	}
}

export function *reversedIterator<T>(values: readonly T[]): MyIterator<T> {
	for (let i = values.length - 1, j = 0; i >= 0; i--, j++) {
		yield [values[i], j, values];
	}
}

export function *circularIterator<T>(values: readonly T[], startIndex = 0): MyIterator<T> {
	const mod = modulo(values.length);

	for (let i = 0; i < values.length; i++) {
		const index = mod(startIndex + i);
		yield [values[index], index, values];
	}
}

export function *infiniteIterator<T>(values: readonly T[]): MyIterator<T> {
	while (true) {
		yield *forwardIterator(values);
	}
}
