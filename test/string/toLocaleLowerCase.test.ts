import {expect, test} from 'bun:test';
import {toLocaleLowerCase} from '../../src';

test('toLocaleLowerCase', () => {
	const input = 'İstanbul';
	const enResult = 'i̇stanbul';
	const trResult = 'istanbul';

	expect(toLocaleLowerCase('en')(input)).toBe(enResult);
	expect(toLocaleLowerCase('tr')(input)).toBe(trResult);
	expect(enResult).not.toEqual(trResult);
});
