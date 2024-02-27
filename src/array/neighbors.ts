/**
 * Returns an array of tuples where each tuple contains two adjacent elements from the input array.
 * If the input array has less than two elements, an empty array is returned.
 * @param values The array to get the neighbors of.
 * @returns An array of tuples containing two adjacent elements from the input array.
 */
export function neighbors<T>(values: readonly T[]): [T, T][] {
	const result: [T, T][] = Array.from({length: values.length - 1});
	for (let i = 0; i < values.length - 1; i++) {
		result[i] = [values[i], values[i + 1]];
	}
	return result;
}
