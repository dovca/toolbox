import type {Fn} from '../types';

/**
 * Combines a flowing boolean with the given boolean using the logical AND operator.
 */
export function and(b: boolean): Fn<boolean> {
	return (a) => a && b;
}
