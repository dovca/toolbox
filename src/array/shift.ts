/**
 * Returns a new array with the first value removed.
 * @param array
 */
export function shift<T>(array: ReadonlyArray<T>): T[] {
	return array.slice(1);
}
