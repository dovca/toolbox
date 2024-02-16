import {expect, test} from 'bun:test';
import {noop} from '../../src';

test('noop', () => {
	expect(noop()).toBe(undefined);
	expect(noop(1)).toBe(undefined);
	expect(noop(1, 2)).toBe(undefined);
});
