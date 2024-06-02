import {expect, test} from 'bun:test';
import {findValue} from '../../src';

test('findValue', () => {
	const startsWithB = (key: string) => key.startsWith('b');

	expect<number | undefined>(findValue<Record<string, number>>(startsWithB)({foo: 2})).toBe(undefined);
	expect<number | undefined>(findValue<Record<string, number>>(startsWithB)({foo: 2, bar: 3})).toBe(3);
});
