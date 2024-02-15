import {pipe} from '../function';
import {isFalsy} from './isFalsy';
import {not} from '../boolean';

export const isTruthy = pipe<unknown, boolean, boolean>(isFalsy, not);
