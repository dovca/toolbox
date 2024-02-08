export function shift<T>(array: ReadonlyArray<T>): T[] {
	return array.slice(1);
}
