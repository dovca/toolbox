import type {Arrayifier} from '../types';

export function split(separator: string | RegExp, limit?: number): Arrayifier<string> {
	return (input) => input.split(separator, limit);
}
