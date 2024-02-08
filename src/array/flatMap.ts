import type {Fn, IterationCallback} from '../types/types';
import {pipe} from '../function/pipe';
import {map} from './map';
import {flat} from './flat';

export const flatMap = <T, U>(
	mapper: IterationCallback<T, U | ReadonlyArray<U>>,
): Fn<ReadonlyArray<T>, U[]> => pipe(map(mapper), flat(1)) as Fn<ReadonlyArray<T>, U[]>;
