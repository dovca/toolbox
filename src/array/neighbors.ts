export function neighbors<T>(values: T[]): [T, T][] {
	const result: [T, T][] = Array.from({length: values.length - 1});
	for (let i = 0; i < values.length - 1; i++) {
		result[i] = [values[i], values[i + 1]];
	}
	return result;
}
