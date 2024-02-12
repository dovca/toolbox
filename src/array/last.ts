/**
 * Returns the last element of an array.
 * @param input The array to get the last element of.
 * @returns The last element of the array, or undefined if the array is empty.
 */
export function last<T>(input: ReadonlyArray<T>): T | undefined {
	return input[input.length - 1];
}
