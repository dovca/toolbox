import {expect, test} from 'bun:test';
import {operatorPlus, reduce, reduceAtMost, reduceReversed, reduceRight} from '../../src';

const concat = (acc: string | number, value: number): string => `${acc}${value}`;

test('reduce', () => {
	expect(() => reduce(operatorPlus)([])).toThrow();
	expect(reduce(operatorPlus, 0)([])).toBe(0);
	expect(reduce(operatorPlus, 0)([1])).toBe(1);
	expect(reduce(operatorPlus)([1])).toBe(1);
	expect(reduce(operatorPlus, 0)([1, 2, 3])).toBe(6);
	expect(reduce(operatorPlus)([1, 2, 3])).toBe(6);
	expect(reduce(operatorPlus, 100)([1, 2, 3])).toBe(106);
	expect(reduce<number>((acc, val) => acc * val)([1, 2, 3])).toBe(6);

	expect(reduce(concat)([1, 2, 3])).toBe('123');
	expect(reduce(concat, '')([1, 2, 3])).toBe('123');
	expect(reduce(concat, 'abc')([1, 2, 3])).toBe('abc123');
});

test('reduceRight', () => {
	expect(() => reduceRight(operatorPlus)([])).toThrow();
	expect(reduceRight(operatorPlus, 0)([])).toBe(0);
	expect(reduceRight(operatorPlus, 0)([1])).toBe(1);
	expect(reduceRight(operatorPlus)([1])).toBe(1);
	expect(reduceRight(operatorPlus, 0)([1, 2, 3])).toBe(6);
	expect(reduceRight(operatorPlus)([1, 2, 3])).toBe(6);
	expect(reduceRight(operatorPlus, 100)([1, 2, 3])).toBe(106);
	expect(reduceRight<number>((acc, val) => acc * val)([1, 2, 3])).toBe(6);

	expect(reduceRight(concat)([1, 2, 3])).toBe('321');
	expect(reduceRight(concat, '')([1, 2, 3])).toBe('321');
	expect(reduceRight(concat, 'abc')([1, 2, 3])).toBe('abc321');
});

test('reduceReversed', () => {
	expect(() => reduceReversed(operatorPlus)([])).toThrow();
	expect(reduceReversed(operatorPlus, 0)([])).toBe(0);
	expect(reduceReversed(operatorPlus, 0)([1])).toBe(1);
	expect(reduceReversed(operatorPlus)([1])).toBe(1);
	expect(reduceReversed(operatorPlus, 0)([1, 2, 3])).toBe(6);
	expect(reduceReversed(operatorPlus)([1, 2, 3])).toBe(6);
	expect(reduceReversed(operatorPlus, 100)([1, 2, 3])).toBe(106);
	expect(reduceReversed<number>((acc, val) => acc * val)([1, 2, 3])).toBe(6);

	expect(reduceReversed(concat)([1, 2, 3])).toBe('321');
	expect(reduceReversed(concat, '')([1, 2, 3])).toBe('321');
	expect(reduceReversed(concat, 'abc')([1, 2, 3])).toBe('abc321');
});

test('reduceAtMost', () => {
	expect(reduceAtMost(0)(operatorPlus, 0)([])).toBe(0);
	expect(reduceAtMost(0)(operatorPlus, 0)([1])).toBe(0);
	expect(reduceAtMost(0)(operatorPlus, 10)([1])).toBe(10);
	expect(reduceAtMost(1)(operatorPlus, 100)([1, 2, 3])).toBe(101);
	expect(reduceAtMost(1)(operatorPlus)([1, 2, 3, 4, 5])).toBe(3);
	expect(reduceAtMost(2)(operatorPlus)([1, 2, 3, 4, 5])).toBe(6);
	expect(reduceAtMost(10)(operatorPlus)([1, 2, 3, 4, 5])).toBe(15);
});
