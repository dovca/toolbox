import {expect, test} from 'bun:test';
import {toLocaleUpperCase} from '../../src';

test('toLocaleUpperCase', () => {
	const input = 'istanbul';
	const enResult = 'ISTANBUL';
	const trResult = 'İSTANBUL';

	expect(toLocaleUpperCase('en')(input)).toBe(enResult);
	expect(toLocaleUpperCase('tr')(input)).toBe(trResult);
	expect(enResult).not.toEqual(trResult);
});
