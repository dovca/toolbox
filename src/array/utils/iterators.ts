import type {MyIterator} from '../../types';

export function *forwardIterator<T>(values: ReadonlyArray<T>): MyIterator<T> {
	for (let i = 0; i < values.length; i++) {
		yield [values[i], i, values];
	}
}

export function *backwardIterator<T>(values: ReadonlyArray<T>): MyIterator<T> {
	for (let i = values.length - 1; i >= 0; i--) {
		yield [values[i], i, values];
	}
}

export function *reversedIterator<T>(values: ReadonlyArray<T>): MyIterator<T> {
	for (let i = values.length - 1, j = 0; i >= 0; i--, j++) {
		yield [values[i], j, values];
	}
}
