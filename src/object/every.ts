import type {Predicate} from '../types/types';
import {values} from './values';
import {every as arrayEvery} from '../array';
import {pipe} from '../function/pipe';

export function some<T extends object, K extends keyof T>(predicate: Predicate<K>): Predicate<T> {
	return pipe(values, arrayEvery(predicate));
}
