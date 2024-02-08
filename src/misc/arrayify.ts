import {flat} from '../array/flat';

export const arrayify = <T>(input: T | T[]) => flat<(T | T[])[], 1>()([input]);
