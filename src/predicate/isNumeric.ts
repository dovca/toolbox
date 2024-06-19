import {isFinite} from '../number';

export function isNumeric(value: number): value is number;
export function isNumeric(value: string): value is `${number}`;
export function isNumeric(value: unknown): value is number | `${number}`;
export function isNumeric(value: unknown): value is number | `${number}` {
	return typeof value === 'number' || (typeof value === 'string' && isFinite(Number(value)));
}
