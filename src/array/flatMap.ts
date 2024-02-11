import type {Fn, IterationCallback} from '../types/types';
import {pipe} from '../function/pipe';
import {map} from './map';
import {flat} from './flat';

export const flatMap = <I, O>(
	mapper: IterationCallback<O | O[], I>,
): Fn<O[], ReadonlyArray<I>> => pipe(
	map(mapper),
	flat() as Fn<O[], (O | O[])[]>,
);
