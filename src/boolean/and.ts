import type {Fn} from '../types';

export function and(b: boolean): Fn<boolean> {
	return (a) => a && b;
}
