import {expect, test} from 'bun:test';
import {command} from '../../src';

test('command', () => {
	expect(command([() => 1])).toBe(1);
	expect(command([(a: number) => a, 2])).toBe(2);
	expect(command([(a: number, b: number) => a + b, 2, 3])).toBe(5);
});
