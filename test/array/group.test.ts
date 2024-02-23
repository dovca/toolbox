import {expect, test} from 'bun:test';
import {groupBy, groupWith} from '../../src';

type Obj = { id: string; value: number; children?: Obj[] };

test('groupWith', () => {
	const groupByFloor = groupWith(Math.floor);
	const groupById = groupWith((obj: Obj) => obj.id);

	const objA: Obj = {id: 'a', value: 1};
	const objB: Obj = {id: 'b', value: 0};
	const objC: Obj = {id: 'c', value: 5};
	const objA2: Obj = {id: 'a', value: 3};
	const objA3: Obj = {id: 'a', value: 2};

	expect(groupByFloor([])).toEqual({});
	expect(groupByFloor([1.1, 2.2, 2.3, 4, 2.1])).toEqual({1: [1.1], 2: [2.2, 2.3, 2.1], 4: [4]});
	expect(groupById([])).toEqual({});
	expect(groupById([objA, objB, objC, objA2, objA3])).toEqual({
		a: [objA, objA2, objA3],
		b: [objB],
		c: [objC],
	});
});

test('groupBy', () => {
	const groupById = groupBy<Obj>('id');

	const objA: Obj = {id: 'a', value: 1};
	const objB: Obj = {id: 'b', value: 0};
	const objC: Obj = {id: 'c', value: 5};
	const objA2: Obj = {id: 'a', value: 3};
	const objA3: Obj = {id: 'a', value: 2};

	expect(groupById([])).toEqual({});
	expect(groupById([objA, objB, objC, objA2, objA3])).toEqual({
		a: [objA, objA2, objA3],
		b: [objB],
		c: [objC],
	});
});
