import {expect, test} from 'bun:test';
import {first, firstLoose} from '../../src';

test('first', () => {
	expect(first([])).toBe(undefined);
	expect(first([1])).toBe(1);
	expect(first([1, 2, 3])).toBe(1);
	expect(first([undefined])).toBe(undefined);
	expect<number | undefined>(first([undefined, 1])).toBe(undefined);
});

test('firstLoose', () => {
	expect(firstLoose([1])).toBe(1);
	expect(firstLoose([1, 2, 3])).toBe(1);
	expect(firstLoose([undefined])).toBe(undefined);
	expect<number | undefined>(firstLoose([undefined, 1])).toBe(undefined);
});
