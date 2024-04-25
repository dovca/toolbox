import {modulo} from '../number';
import {isValidIndex} from '../predicate';

type Extractor = <T>(values: readonly T[]) => T;
type MultiExtractor = <T>(values: readonly T[]) => readonly T[];

/**
 * Produces the value at the given index of the flowing array.
 * @param index The index of the value to return. can be negative, in which case it will count from the end of the
 * array, -1 being the last index.
 * @returns Produces the value at the given index, or undefined if the index is out of bounds.
 * @example
 * ```typescript
 * at(1)([1, 2, 3]); // 2
 * at(-1)([1, 2, 3]); // 3
 * at(1, -1)([1, 2, 3]); // [2, 3]
 * ```
 */
export function at(index: number): Extractor;
export function at(...indices: readonly number[]): MultiExtractor;
export function at(...indices: number[]): Extractor | MultiExtractor {
	return (values) => {
		const result = indices.map((index) => (
			isValidIndex(index)(values)
				? values[modulo(values.length)(index)]
				: undefined
		));

		return (indices.length === 1 ? result[0] : result) as any;
	}
}
