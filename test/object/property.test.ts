import {expect, test} from 'bun:test';
import {property, propertyOf} from '../../src';

test('property', () => {
	const obj = {a: 1, b: 2, c: 3};

	expect(property('a')(obj)).toBe(1);
	expect(property('b')(obj)).toBe(2);
	expect(property('c')(obj)).toBe(3);
	expect(property('d')({} as any)).toBe(undefined);
});

test('propertyOf', () => {
	const propObject = propertyOf({a: 1, b: 2, c: 3});
	const propArray = propertyOf([1, 2, 3]);

	expect(propObject('a')).toBe(1);
	expect(propObject('b')).toBe(2);
	expect(propObject('c')).toBe(3);
	expect(propObject<any>('d')).toBe(undefined);

	expect(propArray(0)).toBe(1);
	expect(propArray(1)).toBe(2);
	expect(propArray(2)).toBe(3);
	expect<number | undefined>(propArray(3)).toBe(undefined);
});
