/**
 * Logs a value to the console and returns it.
 */
export function log<T>(value: T): T {
	console.log(value);
	return value;
}
