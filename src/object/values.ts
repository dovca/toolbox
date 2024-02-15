import type {Values} from '../types';

export function values<T extends object>(object: T): Values<T>[] {
	return Object.values(object);
}
