import {expect, test} from 'bun:test';
import {reduce, reduceAtMost, reduceReversed, reduceRight} from '../../src';

const add = (acc: number, value: number) => acc + value;
const concat = (acc: string | number, value: number): string => `${acc}${value}`;

test('reduce', () => {
	expect(() => reduce(add)([])).toThrow();
	expect(reduce(add, 0)([])).toBe(0);
	expect(reduce(add, 0)([1])).toBe(1);
	expect(reduce(add)([1])).toBe(1);
	expect(reduce(add, 0)([1, 2, 3])).toBe(6);
	expect(reduce(add)([1, 2, 3])).toBe(6);
	expect(reduce(add, 100)([1, 2, 3])).toBe(106);
	expect(reduce<number>((acc, val) => acc * val)([1, 2, 3])).toBe(6);

	expect(reduce(concat)([1, 2, 3])).toBe('123');
	expect(reduce(concat, '')([1, 2, 3])).toBe('123');
	expect(reduce(concat, 'abc')([1, 2, 3])).toBe('abc123');
});

test('reduceRight', () => {
	expect(() => reduceRight(add)([])).toThrow();
	expect(reduceRight(add, 0)([])).toBe(0);
	expect(reduceRight(add, 0)([1])).toBe(1);
	expect(reduceRight(add)([1])).toBe(1);
	expect(reduceRight(add, 0)([1, 2, 3])).toBe(6);
	expect(reduceRight(add)([1, 2, 3])).toBe(6);
	expect(reduceRight(add, 100)([1, 2, 3])).toBe(106);
	expect(reduceRight<number>((acc, val) => acc * val)([1, 2, 3])).toBe(6);

	expect(reduceRight(concat)([1, 2, 3])).toBe('321');
	expect(reduceRight(concat, '')([1, 2, 3])).toBe('321');
	expect(reduceRight(concat, 'abc')([1, 2, 3])).toBe('abc321');
});

test('reduceReversed', () => {
	expect(() => reduceReversed(add)([])).toThrow();
	expect(reduceReversed(add, 0)([])).toBe(0);
	expect(reduceReversed(add, 0)([1])).toBe(1);
	expect(reduceReversed(add)([1])).toBe(1);
	expect(reduceReversed(add, 0)([1, 2, 3])).toBe(6);
	expect(reduceReversed(add)([1, 2, 3])).toBe(6);
	expect(reduceReversed(add, 100)([1, 2, 3])).toBe(106);
	expect(reduceReversed<number>((acc, val) => acc * val)([1, 2, 3])).toBe(6);

	expect(reduceReversed(concat)([1, 2, 3])).toBe('321');
	expect(reduceReversed(concat, '')([1, 2, 3])).toBe('321');
	expect(reduceReversed(concat, 'abc')([1, 2, 3])).toBe('abc321');
});

test('reduceAtMost', () => {
	expect(reduceAtMost(0)(add, 0)([])).toBe(0);
	expect(reduceAtMost(0)(add, 0)([1])).toBe(0);
	expect(reduceAtMost(0)(add, 10)([1])).toBe(10);
	expect(reduceAtMost(1)(add, 100)([1, 2, 3])).toBe(101);
	expect(reduceAtMost(1)(add)([1, 2, 3, 4, 5])).toBe(3);
	expect(reduceAtMost(2)(add)([1, 2, 3, 4, 5])).toBe(6);
	expect(reduceAtMost(10)(add)([1, 2, 3, 4, 5])).toBe(15);
});
