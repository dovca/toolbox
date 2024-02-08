import {expect, test} from 'bun:test';
import {isNullish} from '../../src/predicate/isNullish';

test('isNullish', () => {
	expect(isNullish(null)).toBe(true);
	expect(isNullish(undefined)).toBe(true);
	expect(isNullish(0)).toBe(false);
	expect(isNullish('')).toBe(false);
	expect(isNullish(false)).toBe(false);
	expect(isNullish(1)).toBe(false);
	expect(isNullish({})).toBe(false);
	expect(isNullish([])).toBe(false);
	expect(isNullish(() => {})).toBe(false);
	expect(isNullish(Symbol())).toBe(false);
	expect(isNullish(BigInt(0))).toBe(false);
	expect(isNullish(NaN)).toBe(false);
	expect(isNullish(Infinity)).toBe(false);
	expect(isNullish(-Infinity)).toBe(false);
	expect(isNullish(0n)).toBe(false);
});
