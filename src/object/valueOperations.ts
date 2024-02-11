import type {Fn, Predicate} from '../types/types';
import {pipe} from '../function/pipe';
import {values} from './values';
import {
	every as arrayEvery,
	some as arraySome,
} from '../array';

const objValueOp: <T extends object, K extends keyof T, R>(op: Fn<R, T[K][]>) => Fn<R, T> = (op) => pipe(values, op);

export const every = <T extends object, K extends keyof T>(predicate: Predicate<T[K]>) => objValueOp<T, K, boolean>(arrayEvery<T[K]>(predicate));
export const some = <T extends object, K extends keyof T>(predicate: Predicate<T[K]>) => objValueOp<T, K, boolean>(arraySome<T[K]>(predicate));
