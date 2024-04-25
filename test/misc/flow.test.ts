import {expect, test} from 'bun:test';
import {toArray, flow, fromCharCode, increment, upperCase} from '../../src';

test('flow 0 functions', () => {
	expect(flow(64)).toBe(64);
});

test('flow n functions', () => {
	expect(flow(64, increment, fromCharCode, upperCase, toArray)).toEqual(['A']);
});
