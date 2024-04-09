import {entries} from './entries';
import type {Fn, Values} from '../types';

export function mapEntries<I extends object, O extends object>(
	mapper: Fn<[keyof O, Values<O>], [keyof I, Values<I>]>,
): Fn<O, I> {
	return (input) => {
		const result = {} as O;
		for (const entry of entries(input)) {
			const [newKey, newValue] = mapper(entry);
			result[newKey] = newValue;
		}
		return result;
	};
}
