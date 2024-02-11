import type {Fn, Fn2} from '../types/types';
import {gather, type Gather2} from '../function/gather';

export function zipWith<A, I, R>(zipper: Fn2<R, I | undefined, A | undefined>): Fn<Fn<R[], I[]>, A[]> {
	return (argValues) => (inputValues) => {
		const length = Math.max(inputValues.length, argValues.length);
		const result: R[] = Array.from({length});
		for (let i = 0; i < length; i++) {
			result[i] = zipper(inputValues[i], argValues[i]);
		}
		return result;
	}
}

export const zip: <A, I>(values: A[]) => (input: I[]) => [I | undefined, A | undefined][] = zipWith(gather as Gather2);

