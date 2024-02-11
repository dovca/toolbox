import type {Predicate} from '../types';

export function includes(value: string): Predicate<string>;
export function includes<T>(value: T): Predicate<ReadonlyArray<T>>;
export function includes(value: any): Predicate<string | ReadonlyArray<unknown>> {
	return (input) => input.includes(value);
}
