import {expect, test} from 'bun:test';
import {pickValues} from '../../src';

type Obj = {
	a: number,
	b: number,
	c: number,
	d: number,
};

test('pickValues', () => {
	const obj: Obj = {a: 1, b: 2, c: 3, d: 4};

	expect(pickValues<Obj>()(obj)).toEqual([]);
	expect(pickValues<Obj>('a')(obj)).toEqual([1]);
	expect(pickValues<Obj>('a', 'b')(obj)).toEqual([1, 2]);
	expect(pickValues<Obj>('c', 'd')(obj)).toEqual([3, 4]);
});
