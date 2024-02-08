import {pipe} from '../function/pipe';
import {isFalsy} from './isFalsy';
import {not} from '../bool/not';

export const isTruthy = pipe<unknown, boolean, boolean>(isFalsy, not);
