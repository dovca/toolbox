export function choose<T>(array: readonly T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}
