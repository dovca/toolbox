export function pop<T>(array: ReadonlyArray<T>): T[] {
	return array.slice(0, -1);
}
