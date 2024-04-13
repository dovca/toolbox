/**
 * Shuffles the given array.
 * @param array The array to shuffle.
 * @returns Produces a new array.
 * @example
 * ```typescript
 * shuffle([1, 2, 3, 4]); // [3, 1, 4, 2] or any other random permutation
 * ```
 */
export function shuffle<T>(array: readonly T[]): T[] {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
}
