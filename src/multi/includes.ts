import type {Predicate} from '../types/utils';

export function includes(value: string): Predicate<string>;
export function includes<T>(value: T): Predicate<readonly T[]>;
export function includes(value: any): Predicate<string | readonly unknown[]> {
	return (input) => input.includes(value);
}
