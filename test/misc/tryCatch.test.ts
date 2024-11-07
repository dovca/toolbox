import {expect, test} from 'bun:test';
import {asyncTryCatch, tryCatch} from '../../src/misc/tryCatch';

test('tryCatch', () => {
	const [result, error] = tryCatch(() => 1 + 2);

	expect(result).toEqual(3);
	expect(error).toBeNull();

	const [result2, error2] = tryCatch(() => JSON.parse('invalid json'));

	expect(result2).toBeNull();
	expect(error2).toBeInstanceOf(Error);
});

test('asyncTryCatch', async () => {
	const [result, error] = await asyncTryCatch(() => Promise.resolve(1 + 2));

	expect(result).toEqual(3);
	expect(error).toBeNull();

	const [result2, error2] = await asyncTryCatch(() => Promise.reject(new Error('rejected')));

	expect(result2).toBeNull();
	expect(error2).toBeInstanceOf(Error);
});
