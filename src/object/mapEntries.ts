import {entries} from './entries';
import type {Fn, StringKeys, Values} from '../types';

export function mapEntries<I extends object, O extends object>(
	mapper: Fn<[StringKeys<O>, Values<O>], [StringKeys<I>, Values<I>]>,
): Fn<O, I> {
	return (input) => {
		const result = {} as any;
		for (const entry of entries(input)) {
			const [newKey, newValue] = mapper(entry);
			result[newKey] = newValue;
		}
		return result as O;
	};
}
