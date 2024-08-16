import {expect, test} from 'bun:test';
import {length, maximize, minimize} from '../../src';

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
