import {filter} from './filter';
import {isTruthy} from '../predicate/isTruthy';
import type {Falsy} from '../types';

export const compact: <T>(values: ReadonlyArray<T>) => Exclude<T, Falsy>[] = filter(isTruthy);
