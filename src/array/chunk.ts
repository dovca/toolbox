import type {Fn, IterationCallback} from '../types';
import {forwardIterator} from './utils/iterators';

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

export const chunkBy = <K extends string, T extends { [k in K]?: any }>(key: K) => chunkWith<T>((value) => value[key]);

export const chunk = <T>(size: number) => chunkWith<T>((_, index) => Math.floor(index / size));

