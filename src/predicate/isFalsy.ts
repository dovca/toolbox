export function isFalsy(input: unknown): input is false | '' | 0 | null | undefined | 0n {
	return !input;
}
