import {expect, test} from 'bun:test';
import {localeCompare} from '../../src';

test('localeCompare', () => {
	expect(localeCompare('de')('ä')('z')).toBeNegative();
	expect(localeCompare('sv')('ä')('z')).toBePositive();
});
