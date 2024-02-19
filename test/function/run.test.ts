import {expect, test} from 'bun:test';
import {run} from '../../src';

test('run', () => {
	expect(run([() => 1])).toBe(1);
	expect(run([(a: number) => a, 2])).toBe(2);
	expect(run([(a: number, b: number) => a + b, 2, 3])).toBe(5);
});
