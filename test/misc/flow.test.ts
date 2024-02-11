import {expect, test} from 'bun:test';
import {flow} from '../../src/misc/flow';
import {increment} from '../../src/number/arithmetic';
import {fromCharCode, toUpperCase} from '../../src/string';
import {arrayify} from '../../src/misc/arrayify';

test('flow 0 functions', () => {
	expect(flow(64)).toBe(64);
});

test('flow n functions', () => {
	expect(flow(64, increment, fromCharCode, toUpperCase, arrayify)).toEqual(['A']);
});
