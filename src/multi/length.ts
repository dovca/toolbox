import type {Length} from 'string-ts';

export function length<T extends string | readonly any[]>(input: T): T extends string ? Length<T> : T['length'] {
	return input.length as any;
}
