import {reduce} from './reduce';

export const sum = reduce<number>((a, b) => a + b, 0);
