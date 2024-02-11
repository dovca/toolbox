import type {Predicate} from '../types';

export function every<T>(predicate: Predicate<T>): Predicate<ReadonlyArray<T>> {
	  return (values) => values.every(predicate);
}
