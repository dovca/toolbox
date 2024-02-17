import {expect, test} from 'bun:test';
import {wrap} from '../../src';

test('wrap', () => {
	const val = 1;
	const fn = (a: number) => a + 1;
	const wrapped = wrap(fn);

	expect(wrapped).toBe(fn);
	expect(wrapped(2)).toBe(3);
	expect(wrap(val)).toBeFunction();
	expect(wrap(val)()).toBe(val);
});
