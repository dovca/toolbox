import {expect, test} from 'bun:test';
import {log} from '../../src/misc/log';

test('log', () => {
	const x = 1;
	const y = {};

	expect(log(x)).toBe(x);
	expect(log(y)).toBe(y);
});
