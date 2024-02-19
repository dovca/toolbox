import type {Fn} from '../types';

/**
 * Combines a flowing boolean with the given boolean using the logical OR operator.
 */
export function or(b: boolean): Fn<boolean> {
	return (a) => a || b;
}
