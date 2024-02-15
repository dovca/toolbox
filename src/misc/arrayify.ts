import {flat} from '../array';

export const arrayify = <T>(input: T | T[]) => flat<(T | T[])[], 1>()([input]);
