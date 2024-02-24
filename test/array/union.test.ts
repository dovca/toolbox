import {expect, test} from 'bun:test';
import {union, unionBy, unionWith} from '../../src';

type Obj = {a: number, b: string};

test('union', () => {
	expect(union([])([])).toEqual([]);
	expect(union([1])([])).toEqual([1]);
	expect(union<number>([])([1])).toEqual([1]);
	expect(union([1])([1])).toEqual([1]);
	expect(union([2])([1])).toEqual([1, 2]);
	expect(union([1, 2, 3])([2, 3, 4])).toEqual([2, 3, 4, 1]);
});

test('unionWith', () => {
	const isEqual = (x: Obj, y: Obj) => x.a === y.a;
	const unionFn = unionWith<Obj>(isEqual);

	expect(unionFn([])([])).toEqual([]);
	expect(unionFn([{a: 1, b: 'a'}])([])).toEqual([{a: 1, b: 'a'}]);
	expect(unionFn([])([{a: 1, b: 'a'}])).toEqual([{a: 1, b: 'a'}]);
	expect(unionFn([{a: 1, b: 'a'}])([{a: 1, b: 'a'}])).toEqual([{a: 1, b: 'a'}]);
	expect(unionFn([{a: 1, b: 'a'}])([{a: 1, b: 'b'}])).toEqual([{a: 1, b: 'b'}]);
	expect(unionFn([{a: 1, b: 'a'}])([{a: 2, b: 'a'}])).toEqual([{a: 2, b: 'a'}, {a: 1, b: 'a'}]);
});

test('unionBy', () => {
	const unionFn = unionBy((x: Obj) => x.b);

	expect(unionFn([])([])).toEqual([]);
	expect(unionFn([{a: 1, b: 'a'}])([])).toEqual([{a: 1, b: 'a'}]);
	expect(unionFn([])([{a: 1, b: 'a'}])).toEqual([{a: 1, b: 'a'}]);
	expect(unionFn([{a: 1, b: 'a'}])([{a: 1, b: 'a'}])).toEqual([{a: 1, b: 'a'}]);
	expect(unionFn([{a: 1, b: 'a'}])([{a: 1, b: 'b'}])).toEqual([{a: 1, b: 'b'}, {a: 1, b: 'a'}]);
	expect(unionFn([{a: 1, b: 'a'}])([{a: 2, b: 'a'}])).toEqual([{a: 2, b: 'a'}]);
})
