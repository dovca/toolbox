/**
 * Returns the negation of the input.
 * @param input
 */
export function not(input: false | '' | 0 | null | undefined | 0n): true;
export function not(input: true | 1): false;
export function not(input: boolean): boolean;
export function not(input: unknown): boolean;
export function not(input: any): boolean {
	return !input;
}
