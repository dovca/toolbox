import {expect, test} from 'bun:test';
import {property} from '../../src';

type Obj = {a: number; b: number; c: number};

test('property', () => {
	const obj = {a: 1, b: 2, c: 3};

	expect(property<Obj, 'a'>('a')(obj)).toBe(1);
	expect(property<Obj, 'b'>('b')(obj)).toBe(2);
	expect(property<Obj, 'c'>('c')(obj)).toBe(3);
	expect<any>(property<Record<string, any>, string>('d')({})).toBe(undefined);
});
