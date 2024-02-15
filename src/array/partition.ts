import type {Fn, Predicate, T2} from '../types';
import {groupBy} from './groupBy';
import {pipe} from '../function';
import {toString} from '../convert';

export function partition<T>(predicate: Predicate<T>): Fn<T2<T[]>, T[]> {
	return (array) => {
		const grouped = groupBy(pipe(predicate, toString))(array);
		return [grouped.true ?? [], grouped.false ?? []];
	};
}
