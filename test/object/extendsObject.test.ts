import {expect, test} from 'bun:test';
import {extendsObject} from '../../src/object/extendsObject';

test('extendsObject', () => {
	expect(extendsObject({})({a: 1, b: 2})).toBe(true);
	expect(extendsObject({a: 1, b: 2})({a: 1, b: 2})).toBe(true);
	expect(extendsObject({a: 1, b: 2})({a: 1})).toBe(false);
	expect(extendsObject({a: 3, b: 2})({a: 1, b: 2})).toBe(false);
});
