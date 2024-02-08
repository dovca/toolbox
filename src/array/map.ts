import type {Fn, Fn3, IterationCallback} from '../types/types';
import {forwardIterator} from './utils/iterators';

export function map<I, O = I>(mapper: IterationCallback<I, O>): Fn<ReadonlyArray<I>, O[]> {
	return (values) => {
		const result: O[] = Array.from({length: values.length});
		for (const [value, index, array] of forwardIterator(values)) {
			result[index] = mapper(value, index, array);
		}
		return result;
	};
}

export function mapWithPrevInput<I, O = I>(mapper: Fn3<[I, I | undefined], number, ReadonlyArray<I>, O>): Fn<ReadonlyArray<I>, O[]> {
	return (values) => {
		const result: O[] = Array.from({length: values.length});
		let previous: I | undefined = undefined;
		for (const [value, index, array] of forwardIterator(values)) {
			result[index] = mapper([value, previous], index, array);
			previous = value;
		}
		return result;
	};
}

export function mapWithPrevOutput<I, O = I>(mapper: Fn3<[I, O | undefined], number, ReadonlyArray<I>, O>): Fn<ReadonlyArray<I>, O[]> {
	return (values) => {
		const result: O[] = Array.from({length: values.length});
		let previous: O | undefined = undefined;
		for (const [value, index, array] of forwardIterator(values)) {
			previous = result[index] = mapper([value, previous], index, array);
		}
		return result;
	};
}
