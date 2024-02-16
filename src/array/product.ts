import {reduce} from './reduce';

export const product = reduce<number>((a, b) => a * b, 1);
