import type {Fn, IterationCallback} from '../types';
import {forwardIterator} from './utils/iterators';

/**
 * Split a flowing array into chunks based on the result of the mapper function. A chunk boundary is created between
 * two elements if the result of the mapper function differs. This method is similar to run-length encoding.
 * @param mapper The function to determine the chunk boundaries.
 * @returns Produces an array of chunks.
 */
export function chunkWith<T>(mapper: IterationCallback<any, T>): Fn<T[][], T[]> {
	return (values) => {
		let group: T[] = [];
		let mapperResult: any = undefined;
		let lastMapperResult: any = undefined;
		const result: T[][] = [];

		function closeChunk(g: T[]) {
			if (g.length) {
				result.push(g);
			}
		}

		for (const [value, index, array] of forwardIterator(values)) {
			mapperResult = mapper(value, index, array)
			if (index === 0 || mapperResult !== lastMapperResult) {
				closeChunk(group);
				group = [];
			}

			lastMapperResult = mapperResult;
			group.push(value);
		}

		closeChunk(group);

		return result;
	}
}

/**
 * Split a flowing array of objects into chunks. A chunk boundary is created between elements whose
 * property `key` differs.
 * @param key The property to determine the chunk boundaries.
 * @returns Produces an array of chunks.
 */
export const chunkBy = <K extends string, T extends { [k in K]?: any }>(key: K) => chunkWith<T>((value) => value[key]);

/**
 * Splits a flowing array into same-sized chunks. The last chunk may be smaller than the specified size.
 * @param size The size of each chunk.
 * @returns Produces an array of chunks.
 */
export const chunk = <T>(size: number) => chunkWith<T>((_, index) => Math.floor(index / size));

