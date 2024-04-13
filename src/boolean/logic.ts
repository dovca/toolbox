import type {Equalizer} from '../types';
import {binaryOperation, identity} from '../misc';
import {negate} from '../function';

export const operatorAnd: Equalizer<boolean> = (a, b) => a && b;
export const operatorOr: Equalizer<boolean> = (a, b) => a || b;
export const operatorXor: Equalizer<boolean> = (a, b) => a !== b;

export const and = binaryOperation(operatorAnd);
export const or = binaryOperation(operatorOr);
export const xor = binaryOperation(operatorXor);
export const not = negate(identity);
