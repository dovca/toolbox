import {removeAll} from './remove';

export const difference = <T>(array: readonly T[]) => removeAll(...array);
