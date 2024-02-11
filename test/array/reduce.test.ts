import {expect, test} from 'bun:test';
import {reduce, reduceReversed, reduceRight} from '../../src';

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
	const sum = (acc: number, value: number) => acc + value;

	expect(() => reduceRight(sum)([])).toThrow();
	expect(reduceRight(sum, 0)([])).toBe(0);
	expect(reduceRight(sum, 0)([1])).toBe(1);
	expect(reduceRight(sum)([1])).toBe(1);
	expect(reduceRight(sum, 0)([1, 2, 3])).toBe(6);
	expect(reduceRight(sum)([1, 2, 3])).toBe(6);
	expect(reduceRight(sum, 100)([1, 2, 3])).toBe(106);
	expect(reduceRight<number>((acc, val) => acc * val)([1, 2, 3])).toBe(6);

	expect(reduceRight(concat)([1, 2, 3])).toBe('321');
	expect(reduceRight(concat, '')([1, 2, 3])).toBe('321');
	expect(reduceRight(concat, 'abc')([1, 2, 3])).toBe('abc321');
});

test('reduceReversed', () => {
	const sum = (acc: number, value: number) => acc + value;

	expect(() => reduceReversed(sum)([])).toThrow();
	expect(reduceReversed(sum, 0)([])).toBe(0);
	expect(reduceReversed(sum, 0)([1])).toBe(1);
	expect(reduceReversed(sum)([1])).toBe(1);
	expect(reduceReversed(sum, 0)([1, 2, 3])).toBe(6);
	expect(reduceReversed(sum)([1, 2, 3])).toBe(6);
	expect(reduceReversed(sum, 100)([1, 2, 3])).toBe(106);
	expect(reduceReversed<number>((acc, val) => acc * val)([1, 2, 3])).toBe(6);

	expect(reduceReversed(concat)([1, 2, 3])).toBe('321');
	expect(reduceReversed(concat, '')([1, 2, 3])).toBe('321');
	expect(reduceReversed(concat, 'abc')([1, 2, 3])).toBe('abc321');
});
