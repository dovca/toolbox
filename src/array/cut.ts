import type {Fn} from '../types/types';

export function cut<T>(position: number): Fn<ReadonlyArray<T>, [T[], T[]]> {
	return (values) => [values.slice(0, position), values.slice(position)];
}
