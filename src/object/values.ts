import type {Dictionary} from '../types/types';

export function values<T>(object: Dictionary<T>): T[] {
	return Object.values(object);
}
