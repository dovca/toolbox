import {type BinaryOperation, binaryOperation, identity} from '../misc';
import {negate} from '../function';
import {operatorAnd, operatorOr, operatorXor} from '../lang';
import type {Fn} from '../types';

export const and: BinaryOperation<boolean> = binaryOperation(operatorAnd);
export const or: BinaryOperation<boolean> = binaryOperation(operatorOr);
export const xor: BinaryOperation<boolean> = binaryOperation(operatorXor);
export const not: Fn<boolean> = negate(identity);
