import {reduce} from './reduce';

export const sum = reduce<number>((acc, value) => acc + value, 0);
