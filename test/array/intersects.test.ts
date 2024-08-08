import {expect, test} from 'bun:test';
import {intersects, intersectsWith} from '../../src';

test('intersects', () => {
	expect(intersects<number>([])([])).toBe(false);
	expect(intersects<number>([])([2, 3, 4])).toBe(false);
	expect(intersects([1, 2, 3])([])).toBe(false);
	expect(intersects([1, 2, 3])([4, 5, 6])).toBe(false);
	expect(intersects([1, 2, 3])([2, 3, 4])).toBe(true);
});

test('intersectsWith', () => {
	const sameLength = (a: string, b: string) => a.length === b.length;
	const intersectsWithLength = intersectsWith(sameLength);
	expect(intersectsWithLength(['a', 'bb', 'ccc'])(['d', 'ee', 'fff'])).toBe(true);
	expect(intersectsWithLength(['a', 'ccc'])(['aa', 'cccc'])).toBe(false);
});
