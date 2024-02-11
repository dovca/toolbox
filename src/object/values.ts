import type {Dictionary} from '../types/types';

export function values<T extends object, K extends keyof T>(object: T): T[K][] {
	return Object.values(object);
}
