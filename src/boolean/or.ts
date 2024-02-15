import type {Fn} from '../types';

export function or(b: boolean): Fn<boolean> {
	return (a) => a || b;
}
