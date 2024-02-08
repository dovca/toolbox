import type {Fn, FnT2} from '../types/types';

export function zipWith<A, I, R>(zipper: FnT2<[I | undefined, A | undefined], R>): Fn<A[], Fn<I[], R[]>> {
	return (argValues) => (inputValues) => {
		const length = Math.max(inputValues.length, argValues.length);
		const result: R[] = Array.from({length});
		for (let i = 0; i < length; i++) {
			result[i] = zipper(inputValues[i], argValues[i]);
		}
		return result;
	}
}

export const zip: <I, V>(values: V[]) => (input: I[]) => [I | undefined, V | undefined][] = zipWith((a, b) => [a, b]);

