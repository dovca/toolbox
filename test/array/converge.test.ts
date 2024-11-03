import {expect, test} from 'bun:test';
import {converge, length, maximize, minimize} from '../../src';

test('converge', () => {
	expect(converge<string, number>((s) => Number(s), (a, b) => b - a)(['20', '0xA', '333'])).toBe('0xA');
});

test('minimize', () => {
	expect(minimize(length)([])).toBe(undefined);
	expect(minimize(length)(['foo'])).toBe('foo');
	expect(minimize(length)(['foo', 'bar', 'baz'])).toBe('foo');
	expect(minimize(length)(['foo', 'hello', 'a', 'bar'])).toBe('a');
	expect(minimize()([1, 2, 3, 4, 5])).toBe(1);
	expect(minimize()([new Date('2001-01-01'), new Date('2000-05-05')])).toEqual(new Date('2000-05-05'));
});

test('maximize', () => {
	expect(maximize(length)([])).toBe(undefined);
	expect(maximize(length)(['foo'])).toBe('foo');
	expect(maximize(length)(['foo', 'bar', 'baz'])).toBe('foo');
	expect(maximize(length)(['foo', 'hello', 'a', 'bar'])).toBe('hello');
	expect(maximize()([1, 2, 3, 4, 5])).toBe(5);
	expect(maximize()([new Date('2001-01-01'), new Date('2000-05-05')])).toEqual(new Date('2001-01-01'));
});
