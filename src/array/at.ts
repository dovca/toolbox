import {modulo} from '../number/arithmetic';
import {isValidIndex} from '../predicate/isValidIndex';
import type {Maybe} from '../types/utils';

type Extractor = <T>(values: readonly T[]) => Maybe<T>;
type MultiExtractor = <T>(values: readonly T[]) => readonly Maybe<T>[];
type LooseExtractor = <T>(values: readonly T[]) => T;
type LooseMultiExtractor = <T>(values: readonly T[]) => readonly T[];

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
	return ((values) => {
		const result = indices.map((index) => (
			isValidIndex(index)(values)
				? values[modulo(values.length)(index)]
				: undefined
		));

		return (indices.length === 1 ? result[0] : result);
	}) as Extractor | MultiExtractor;
}

/**
 * Behaves like `at`, but is not type-safe. It will still return undefined if the index is out of bounds.
 * @param index The index of the value to return. can be negative, in which case it will count from the end of the
 * array, -1 being the last index.
 * @returns Produces the value at the given index, or undefined if the index is out of bounds.
 * @example
 * ```typescript
 * atLoose(1)([1, 2, 3]); // 2
 * atLoose(-1)([1, 2, 3]); // 3
 * atLoose(1, -1)([1, 2, 3]); // [2, 3]
 */
export function atLoose(index: number): LooseExtractor;
export function atLoose(...indices: readonly number[]): LooseMultiExtractor;
export function atLoose(...indices: number[]): LooseExtractor | LooseMultiExtractor {
	return at(...indices) as LooseExtractor | LooseMultiExtractor;
}
