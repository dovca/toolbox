import type {Fn} from '../types';

export function cut<T>(position: number): Fn<[T[], T[]], ReadonlyArray<T>> {
	return (values) => [values.slice(0, position), values.slice(position)];
}
