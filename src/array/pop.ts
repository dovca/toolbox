/**
 * Returns a new array with the last value removed.
 * @param array
 */
export function pop<T>(array: ReadonlyArray<T>): T[] {
	return array.slice(0, -1);
}
