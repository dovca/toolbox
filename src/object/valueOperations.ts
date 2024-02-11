import type {Fn, Predicate} from '../types';
import {every, some} from '../array';
import {pipe} from '../function';
import {values} from './values';

const objValueOp: <T extends object, K extends keyof T, R>(op: Fn<R, T[K][]>) => Fn<R, T> = (op) => pipe(values, op);

export const everyValue = <T extends object, K extends keyof T>(predicate: Predicate<T[K]>) => objValueOp<T, K, boolean>(every<T[K]>(predicate));
export const someValue = <T extends object, K extends keyof T>(predicate: Predicate<T[K]>) => objValueOp<T, K, boolean>(some<T[K]>(predicate));
