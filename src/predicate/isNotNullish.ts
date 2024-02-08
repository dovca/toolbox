export function isNotNullish<T>(input: T): input is Exclude<T, null | undefined> {
	return input !== null && input !== undefined;
}
