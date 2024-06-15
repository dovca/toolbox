import {isFalsy} from './isFalsy';

export function isTruthy(value: unknown): boolean {
	return !isFalsy(value);
}
