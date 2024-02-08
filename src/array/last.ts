export function last<T>(input: ReadonlyArray<T>): T | undefined {
	return input[input.length - 1];
}
